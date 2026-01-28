
const fs = require('fs');
const path = require('path');

const targetFiles = ['template.css', 'preset1.css'];
const log = [];

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            if (f !== 'node_modules' && f !== '.git') {
                walkDir(dirPath, callback);
            }
        } else {
            callback(path.join(dir, f));
        }
    });
}

walkDir('.', function(filePath) {
    const fileName = path.basename(filePath);
    if (targetFiles.includes(fileName)) {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes('#4e7e5c')) {
                const newContent = content.replace(/#4e7e5c/g, '#3f4094');
                fs.writeFileSync(filePath, newContent);
                log.push(`Fixed: ${filePath}`);
            } else {
                log.push(`No match in: ${filePath}`);
            }
        } catch (e) {
            log.push(`Error ${filePath}: ${e.message}`);
        }
    }
});

fs.writeFileSync('fix_log_node.txt', log.join('\n'));
