module.exports = {
  extends: "@cybozu/eslint-config/presets/typescript-prettier",
  plugins: ["kuc-v1"],
  rules: {
    "kuc-v1/no-create-render-root-function": "error",
    "kuc-v1/no-using-custom-event": "error",
    "kuc-v1/no-using-generate-guid-function": "error",
    "kuc-v1/no-describe-style-tag-inside-html": "error",
    "kuc-v1/no-using-image": "error",
    "kuc-v1/color-code-lowercase-6digits": "error",
    "kuc-v1/css-class-kuc-prefix": "error"
  }
};
