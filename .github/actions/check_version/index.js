const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const core = require('@actions/core');

exec('git tag | tail -1 ', (err, stdout) => {
  if (err) {
    throw err;
  }
  const version = stdout.slice(1);
  const packageFile = fs.readFileSync('package.json');
  const packageJson = JSON.parse(packageFile);
  if ((packageJson.version).trim() !== (version).trim()) {
    throw new Error('version is not match');
  }
  core.setOutput('version', version.trim());
});