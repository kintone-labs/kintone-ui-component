const core = require("@actions/core");
const package = require("../package.json");
const packageLog = require("../package-lock.json");
const path = require("path");
console.log("path",path.resolve());
try {
  let https = require("https");
  let username = "/Pham-Gia-Huong";
  let repo = "/kintone-ui-component";
  let options = {
    host: "api.github.com",
    path: "/repos" + username + repo + "/releases",
    method: "GET",
    headers: { "user-agent": "node.js" }
  };

  let request = https.request(options, function(response) {
    let body = "";
    response.on("data", function(chunk) {
      body += chunk.toString("utf8");
    });

    response.on("end", function() {
      let packageVersion = "v" + package.version;
      let packageLockVersion = "v" + packageLog.version;
      let listRelease = JSON.parse(body).filter(release => release.tag_name.includes(packageVersion));
      let tagVersion = listRelease[0].tag_name;
      if (tagVersion !== packageVersion || tagVersion !== packageLockVersion) {
        core.setFailed("Version is invalid");
      }
      core.setOutput(package.version);
    });
  });
  request.end();
} catch (e) {
  core.setFailed(e.message);
}
