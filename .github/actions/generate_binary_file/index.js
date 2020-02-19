const {exec} = require('child_process');
const core = require('@actions/core');
const fs = require('fs');
const shasum = require('shasum');

exec('npm pack | tail -n 1', (err, fileDir) => {
  const text = shasum(fs.readFileSync(fileDir.trim()));
  const filePath= 'integrity.txt';
  fs.writeFileSync(filePath, text);
  core.setOutput('shasum', filePath);
});
