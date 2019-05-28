const childProcess = require('child_process')
const os = require('os');

console.log('Transpilling typescript...')

childProcess.spawnSync('./node_modules/typescript/bin/tsc',{stdio: 'inherit'})

if (os.type() === 'Linux' || os.type() === 'Darwin') {
    childProcess.spawnSync('mkdir',['-p','dist/esm/css'],{stdio: 'inherit'})
    childProcess.spawnSync('cp',['-a','src/css/.','dist/esm/css/'], {stdio: 'inherit'})
}
else if (os.type() === 'Windows_NT') {
    childProcess.spawnSync('mkdir',['"dist/esm/css"'],{stdio: 'inherit'})
    childProcess.spawnSync('xcopy',['"src/css"','"dist/esm/css/"', '/O', '/X', '/E', '/H', '/K'],{stdio: 'inherit'})
}
else
    throw new Error("Unsupported OS found: " + os.type());

console.log('ALL DONE !!!')