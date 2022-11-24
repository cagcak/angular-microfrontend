const path = require('path'), fs = require('fs');

const coverageReportPath = path.join(__dirname, '..', 'coverage');
const tempPath = path.join(__dirname, '..', '.tmp');
const tempCoverageReportPath = path.join(tempPath, 'coverage');

if (!fs.existsSync(tempCoverageReportPath) || !fs.existsSync(coverageReportPath)) {
    return;
}

fs.rmSync(coverageReportPath, { recursive: true, force: true });
fs.cpSync(tempCoverageReportPath, coverageReportPath, { recursive: true, errorOnExist: true, force: true });
fs.rmSync(tempPath, { recursive: true, force: true });

const projects = () => {
    const config = require('../angular.json') || { projects: null };

    return [...(Object.keys(config.projects || {}) || []), 'server'];
}

const fullCoverageReportNavigatorPath = path.join(coverageReportPath, 'index.html');
const fullCoverageReportNavigatorContext = `
<!DOCTYPE html><html lang="en"><head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Full Coverage Report</title>
    <style>
        body { color: #999; background-color: #333; } 
        a { text-decoration: none; color: aliceblue; } 
        .p-box:hover { background-color: #974646; }
        .p-container { padding: 30px; }
        .p-box { margin: 10px; cursor: pointer; }
    </style>
</head><body>
    <div class="p-container">
        <h2>Select a project to see coverage report</h2>
        ${projects().map(p => `<a href="${p}/lcov-report/index.html"><div class="p-box">${p}</div></a>`).join('')}
    </div>
</body></html>
`;

fs.writeFileSync(fullCoverageReportNavigatorPath, fullCoverageReportNavigatorContext, { encoding: 'utf8', flag: 'w' });

console.warn("\x1b[36m%s\x1b[0m", `Open ${fullCoverageReportNavigatorPath} in your browser to navigate collected reports\n`);

process.exit(0);
