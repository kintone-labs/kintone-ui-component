const childProcess = require('child_process')
const os = require('os');
const path = require('path')

console.log('Transpilling typescript...')

if (os.type() === 'Linux' || os.type() === 'Darwin') {
    const transpile = childProcess.spawnSync('npm',['run','transpile'],{stdio: 'inherit'})
    if(transpile.status !== 0){
        throw "Transpile fail";
    }  
    childProcess.spawnSync('mkdir',['-p','esm/css'],{stdio: 'inherit'})
    childProcess.spawnSync('cp',['-a','src/css/.','esm/css/'], {stdio: 'inherit'})
}
else if (os.type() === 'Windows_NT') {
    const transpile = childProcess.spawnSync('npm.cmd',['run','transpile'],{stdio: 'inherit'}); 
    if(transpile.status !== 0){
        throw "Transpile fail";
    }
    childProcess.spawnSync('mkdir',['-p','esm/css'],{stdio: 'inherit'})
    childProcess.spawnSync('xcopy',[path.resolve('./src/css/'), path.resolve('./esm/css/'), '/O', '/X', '/E', '/H', '/K', '/Y'],{stdio: 'inherit'})
}
else
    throw new Error("Unsupported OS found: " + os.type());

console.log('ALL DONE !!!')