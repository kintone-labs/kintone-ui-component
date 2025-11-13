---
id: release-notes-v1.3.0
title: v1.3.0 Release Notes
sidebar_label: v1.3.0 Release Notes
---

## Overview

Here are the [kintone UI Component v1.3.0](https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.3.0) Release Notes.<br/>
New components, features, maintenances, document updates, and security updates have been made.

## Update details
### New Components
- Added Date/Time series components (DatePicker, TimePicker, and DateTimePicker).
- Added Dialog component.

### New Features
- Updated to accept duplicated value in `value` and `Item.value` properties and newly added `selectedIndex` property on choice components (MultiChoice, Checkbox, Dropdown, RadioButton, MobileMultiChoice, MobileCheckbox, MobileDropdown, and MobileRadioButton).<br/>
  *Please check the detail on each component's document page.

### Maintenance
- Improved Spinner component to disable any controls outside of it when opening.
- Updated to use from LitElement and lit-html to Lit 2.0.
- Added the function to get the information of developing version.
- Installed Yamory for checking package vulnerability.
- Developed ESLint Custom Rules for checking our coding rule and deleted Sider system.
- Installed storybook controls and actions feature.
- Updated LICENSE file.
- Fixed build setting for ESM.

### Security Updates
- Updated dependent libraries: webpack, json-schema, karma, nanoid, node-fetch, log4js, and core-js.

### Document
- Added DatePicker, TimePicker, DateTimePicker, and Dialog pages.
- Updated `value` and `selectedIndex` properties' specification to follow the logic change described above on choice components' pages.
- Added `Bulk update customization` article.

## Topics to share!

### Release new components
We added several new components together this time!<br/>
About Date/Time series components, we considered it will be useful to provide each separately for property setting and leaning cost reasons.

About Dialog, we set the default size small, so you can utilize it on both desktop and mobile screens.

### Accept duplicated value
For choice components, we updated the specification to accept duplicated value in `value` and `Item.value` properties. (We used to throw error if it is duplicated.)<br/>
And for that, we newly added the `selectedIndex` property to distinguish which duplicated value item will be selected.<br/>
You can utilize the feature for example when you want to categorize by value and switch the display.

If you have any feedback or ideas, please feel free to post on GitHub issue!
