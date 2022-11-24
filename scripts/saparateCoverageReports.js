const path = require('path'), fs = require('fs');

const project = process.argv.at(process.argv.length - 1) || 'default';
const coverageReportPath = path.join(__dirname, '..', 'coverage');
const tempReportPath = path.join(__dirname, '..', '.tmp');
const tempCoverageReportPath = path.join(tempReportPath, 'coverage');
const projectCoverageReportPath = path.join(tempCoverageReportPath, project);

if (fs.existsSync(projectCoverageReportPath)) {
    fs.rmSync(projectCoverageReportPath, { recursive: true, force: true });
}

!fs.existsSync(tempReportPath) && fs.mkdirSync(tempReportPath);
!fs.existsSync(tempCoverageReportPath) && fs.mkdirSync(tempCoverageReportPath);
!fs.existsSync(projectCoverageReportPath) && fs.mkdirSync(projectCoverageReportPath);

fs.cpSync(coverageReportPath, projectCoverageReportPath, { recursive: true, force: true });

const tmpDuplicateFolder = path.join(projectCoverageReportPath, project);

if (fs.existsSync(tmpDuplicateFolder)) {
    fs.rmSync(tmpDuplicateFolder, { recursive: true, force: true });
}
