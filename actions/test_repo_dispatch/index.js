const core = require("@actions/core");
const github = require('@actions/github');
try {

  if (github.context && github.context.payload){
    let statusAutoTest=github.context.payload.client_payload.status

  }
  console.log("null");

} catch (e) {
  core.setFailed(e.message);
}
