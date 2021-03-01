module.exports = {
  extends: "@cybozu/eslint-config/presets/react-typescript-prettier",
  root: true,
  env: {
    node: true,
    commonjs: true,
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
