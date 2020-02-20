const {exec, execSync} = require('child_process')
const fs = require('fs');
const core = require('@actions/core');

execSync('git fetch --tags')
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