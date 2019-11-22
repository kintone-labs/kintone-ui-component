const exec = require("child_process").exec
exec('git add .');
exec("git commit -m 'merge release'");
exec("git push origin HEAD:master --force",(err,stdout)=>{
  console.log(err);
  
});


