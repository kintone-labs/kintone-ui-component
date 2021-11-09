const noCreateRenderRootFunction = require("./no-create-render-root-function");
const noUsingCustomEvent = require("./no-using-custom-event");
const noUsingGenerateGUIDFunction = require("./no-using-generate-guid-function");
const noDescribeStyleTagInsideHtml = require("./no-describe-style-tag-inside-html");
const noUsingImage = require("./no-using-image");

module.exports = {
  rules: {
    "no-create-render-root-function": noCreateRenderRootFunction,
    "no-using-custom-event": noUsingCustomEvent,
    "no-using-generate-guid-function": noUsingGenerateGUIDFunction,
    "no-describe-style-tag-inside-html": noDescribeStyleTagInsideHtml,
    "no-using-image": noUsingImage
  }
};
