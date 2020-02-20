const {exec} = require('child_process');
const core = require('@actions/core');
const fs = require('fs');

exec('npm pack --json | grep integrity | cut -d "," -f1 | cut -d ":" -f2 | tr -d \'"\' ', (err, stdour) => {
    if (err) {
      throw new Error('Can not create binary file');
    }
    const filePath = 'integrity.txt';
    fs.writeFileSync(filePath, stdour);
    core.setOutput('integrity', filePath);
});