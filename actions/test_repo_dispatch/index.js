const core = require("@actions/core");
const github = require('@actions/github');
try {
  if (github.event && github.event.client_payload){
    console.log(github.event.client_payload);

  }
  console.log("null");

} catch (e) {
  core.setFailed(e.message);
}
