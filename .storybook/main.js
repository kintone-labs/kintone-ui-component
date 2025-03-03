const custom = require("../webpack.config");

const mainConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@chromatic-com/storybook",
    "./addons/preset.js",
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        fallback: { crypto: false },
      },
      module: {
        ...config.module,
        rules: custom.module.rules,
      },
    };
  },
  framework: {
    name: "@storybook/web-components-webpack5",
    options: {},
  },
};

export default mainConfig;
