const custom = require('../webpack.config');

module.exports = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-viewport'],
  stories: ["../src/**/index.stories.js"],
  webpackFinal: (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  }
};
