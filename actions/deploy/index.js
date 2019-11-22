const exec = require("child_process").exec
exec('git add .');
exec("git commit -m 'merge release'",(err,stdout)=>{
  console.log(err);
  
});
exec("git push origin HEAD:master --force");


