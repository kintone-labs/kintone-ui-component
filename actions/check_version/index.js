const core = require("@actions/core");
const package = require("../../package.json");
let https = require("https");
let username = "/Pham-Gia-Huong";
let repo = "/kintone-ui-component";
const github = require('@actions/github');
const releaseTag = github.context;
console.log(releaseTag);

// let options = { 
//   host: "api.github.com",
//   path: "/repos" + username + repo + "/releases/latest",
//   method: "GET",
//   headers: { "user-agent": "node.js" }
// };

// try {
//   let request = https.request(options, function(response) {
//     let body = "";
//     response.on("data", function(chunk) {
//       body += chunk.toString("utf8");
//     });
//     response.on("end", function() {
//       let latestRelease = JSON.parse(body);
//       let packageVersion = "v" + package.version;
//       let tagVersion = latestRelease.tag_name;
//       if (tagVersion !== packageVersion) {
//         core.setFailed("Version is invalid");
//       } else {
//         core.setOutput("version", package.version);
//       }
//     });
//   });
//   request.end();
// } catch (e) {
//   core.setFailed(e.message);
// }
