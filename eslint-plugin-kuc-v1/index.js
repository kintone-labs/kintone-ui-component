const noCreateRenderRootFunction = require("./no-create-render-root-function");
const noUsingCustomEvent = require("./no-using-custom-event");
const noUsingGenerateGUIDFunction = require("./no-using-generate-guid-function");
const noUsingImgTag = require("./no-using-img-tag");
const noLowercase6DigitsColorCode = require("./no-lowercase-6digits-color-code");
const noKucClassPrefix = require("./no-kuc-class-prefix");
const validatorInShouldUpdate = require("./validator-in-should-update");
const doubleQuoteAttributeValue = require("./double-quote-attribute-value");
const inheritFromKucBase = require("./inherit-from-KucBase");
const superUpdate = require("./super-update");
const noPrefixOfPrivateFunction = require("./no-prefix-of-private-function");
const noUsingBemMethodForClassname = require("./no-using-bem-method-for-classname");
const noUsingEventHandlerName = require("./no-using-event-handler-name");
const privateCustomEvent = require("./private-custom-event");
const noSortingInAlphabeticalOrder = require("./no-sorting-in-alphabetical-order");

module.exports = {
  rules: {
    "no-create-render-root-function": noCreateRenderRootFunction,
    "no-using-custom-event": noUsingCustomEvent,
    "no-using-generate-guid-function": noUsingGenerateGUIDFunction,
    "no-using-img-tag": noUsingImgTag,
    "no-lowercase-6digits-color-code": noLowercase6DigitsColorCode,
    "no-kuc-class-prefix": noKucClassPrefix,
    "validator-in-should-update": validatorInShouldUpdate,
    "double-quote-attribute-value": doubleQuoteAttributeValue,
    "inherit-from-KucBase": inheritFromKucBase,
    "super-update": superUpdate,
    "no-prefix-of-private-function": noPrefixOfPrivateFunction,
    "no-using-bem-method-for-classname": noUsingBemMethodForClassname,
    "no-using-event-handler-name": noUsingEventHandlerName,
    "private-custom-event": privateCustomEvent,
    "no-sorting-in-alphabetical-order": noSortingInAlphabeticalOrder
  }
};
