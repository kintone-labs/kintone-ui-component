const package = require("../package.json");
const packageLog = require("../package-lock.json");
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
    let release = JSON.parse(body);    
    let tagVersion = release[0].tag_name;
    let packageVersion = "v" + package.version;
    let packageLockVersion = "v" + packageLog.version;
    console.log("tagVersion",tagVersion);
    console.log("packageVersion",packageVersion);
    console.log("packageLockVersion",packageLockVersion);

    if ((tagVersion !== packageVersion) || (tagVersion !== packageLockVersion)) {
      throw "Version is invalid";
    }
  });
});

request.end();
