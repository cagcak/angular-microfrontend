const path = require('path'), fs = require('fs');

const covPath = path.join(__dirname, '..', 'coverage');

if (!fs.existsSync(covPath)) {
    fs.mkdirSync(covPath);
} else {
    fs.rmSync(covPath, { recursive: true, force: true })
}

