const custom = require('../webpack.config');

module.exports = {
  core: {
    builder: "webpack5",
  },
  addons: ['@storybook/addon-a11y', '@storybook/addon-viewport'],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        fallback: { crypto: false },
      },
      module: {
        ...config.module,
        rules: custom.module.rules
      }
    };
  }
};
