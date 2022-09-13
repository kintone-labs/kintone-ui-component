# Changes
## New Features
- Provided Custom CSS feature for Button and Text components. #519 @the-red
  - For more details, please check [this guide page](https://kintone-ui-component.netlify.app/docs/en/getting-started/custom-css).
  - We will provide other components' CSS properties in the near future.

## Bug Fixes
- Fixed the error property display condition and value reflection logic when setting empty on UI on DateTimePicker component.

## Maintenance
- Added error target property name on console error message when setting invalid format value on Date/Time series components.
- Modified Mobile components' requiredIcon font-size.
- Modified Button component's style after clicking.
- Removed excess height when not setting label or error properties on MultiChoice, Text, and TextArea components.
- Modified the border style when focusing on Dialog and Button components.
- Modified HTML structure of calendar part for improving accessibility on DatePicker and DataTimePicker components.
- Resolved `npm ci` execution error with after Node v16.15.1.

## Security Updates
- Updated dependent libraries:  @babel/core, @babel/preset-env, @cybozu/eslint-config,  @storybook/addon-a11y, @storybook/addon-actions, @storybook/addon-controls, @storybook/addon-viewport, @storybook/builder-webpack5, @storybook/manager-webpack5, @storybook/web-components, @open-wc/testing, @types/mocha, eslint, ts-loader, typescript, webpack, @webcomponents/webcomponentsjs, core-js, lit, regenerator-runtime, uuid.
- Changed unit test library from testing-karma to web-test-runner.

## Document
- Added Custom CSS feature guide and updated Button and Text components' page to include CSS property list.
- Fixed component preview display collapse issue.