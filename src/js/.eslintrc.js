module.exports = {
    extends: ["@cybozu", "@cybozu/eslint-config/presets/react"],
    parser: "babel-eslint",
    rules: {
        "no-invalid-this": 0,
        "react/no-deprecated": 0,
    }
};
