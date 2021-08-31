module.exports = {
  extends: "@cybozu/eslint-config/presets/typescript-prettier",
  plugins: ["kuc-v1"],
  rules: {
    "kuc-v1/no-create-render-root-function": "error",
    "kuc-v1/no-using-custom-event": "error"
  }
};
