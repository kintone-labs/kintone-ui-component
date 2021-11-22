const noCreateRenderRootFunction = require("./no-create-render-root-function");
const noUsingCustomEvent = require("./no-using-custom-event");
const noUsingGenerateGUIDFunction = require("./no-using-generate-guid-function");
const noDescribeStyleTagInsideHtml = require("./no-describe-style-tag-inside-html");
const noUsingImgTag = require("./no-using-img-tag");
const noLowercase6DigitsColorCode = require("./no-lowercase-6digits-color-code");
const noKucClassPrefix = require("./no-kuc-class-prefix");
const validatorInUpdate = require("./validator-in-update");
const doubleQuoteAttributeValue = require("./double-quote-attribute-value");
const inheritFromKucBase = require("./inherit-from-KucBase");

module.exports = {
  rules: {
    "no-create-render-root-function": noCreateRenderRootFunction,
    "no-using-custom-event": noUsingCustomEvent,
    "no-using-generate-guid-function": noUsingGenerateGUIDFunction,
    "no-describe-style-tag-inside-html": noDescribeStyleTagInsideHtml,
    "no-using-img-tag": noUsingImgTag,
    "no-lowercase-6digits-color-code": noLowercase6DigitsColorCode,
    "no-kuc-class-prefix": noKucClassPrefix,
    "validator-in-update": validatorInUpdate,
    "double-quote-attribute-value": doubleQuoteAttributeValue,
    "inherit-from-KucBase": inheritFromKucBase
  }
};
