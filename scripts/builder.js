const childProcess = require('child_process')
const os = require('os');

console.log('Transpilling typescript...')

childProcess.spawnSync('./node_modules/.bin/tsc',{stdio: 'inherit'})

if (os.type() === 'Linux' || os.type() === 'Darwin') {
    childProcess.spawnSync('mkdir',['-p','dist/esm/vendor'],{stdio: 'inherit'})
    childProcess.spawnSync('cp',['-a','src/lib/vendor/.','dist/esm/vendor/'], {stdio: 'inherit'})
}
else if (os.type() === 'Windows_NT') {
    childProcess.spawnSync('mkdir',['"dist/esm/vendor"'],{stdio: 'inherit'})
    childProcess.spawnSync('xcopy',['"src/lib/vendor"','"dist/esm/vendor"', '/O', '/X', '/E', '/H', '/K'],{stdio: 'inherit'})
}
else
    throw new Error("Unsupported OS found: " + os.type());

console.log('ALL DONE !!!')