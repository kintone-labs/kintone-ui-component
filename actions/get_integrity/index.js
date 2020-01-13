var exec = require("child_process").exec;
const core = require("@actions/core");
const fs = require("fs");

exec("npm pack --json | grep integrity", (error, stdout, stderr) => {
  if (stdout) {
    let integrity = stdout
      .replace(/['"]+/g, "")
      .replace("integrity", "")
      .replace(":", "")
      .replace(",", "");
    fs.writeFile("integrity.txt", integrity, err => {
      if (err) {
        core.setFailed("write integrity fail: " + err);
      } else {
        core.setOutput("integrity", integrity);
        console.log("The file was saved!");
      }
    });
  } else {
    core.setFailed("get integrity fail: " + error);
  }
});
