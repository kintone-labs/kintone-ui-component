const mainConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "./addons/preset.js",
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
};

export default mainConfig;
