const core = require("@actions/core");
const package = require("../../package.json");
const github = require('@actions/github');
try {
  const tagVersion = github.context.payload.release.name;  
  let packageVersion = "v" + package.version;
  if (tagVersion !== packageVersion) {
    core.setFailed("Version is invalid");  
    
  } else {
    core.setOutput("version", package.version);
  }
} catch (e) {
  core.setFailed(e.message);
}
