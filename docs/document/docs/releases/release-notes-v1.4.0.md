---
id: release-notes-v1.4.0
title: v1.4.0 Release Notes
sidebar_label: v1.4.0 Release Notes
---

## Overview

Here are the [kintone UI Component v1.4.0](https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.4.0) Release Notes.<br>
New components and features, document updates, security updates, and maintenance have been made.

> Note that in this version, there is backward compatible big change with coding way and components' tags and class names for resolving version conflicts issue.
> For more details, please check the [Version conflicts issue and solution](../guides/version-conflicts-issue-solution) and the new [Quick Start](../getting-started/quick-start) article.

## Update details
### New Components
- Added Mobile Date/Time series components (MobileDatePicker, MobileTimePicker, and MobileDateTimePicker).

### New Features
- Added `timeStep`, `min`, and `max` properties on TimePicker and DateTimePicker components.
- Added `icon` property on Dialog component.

### Maintenance
- Resolved version conflicts issue.
- Exported type definition.
- Fixed style of Mobile Date/Time series.

### Security Updates
- Updated dependent libraries: nth-check, core-js, webpack, webpack-cli, @storybook/builder-webpack5, @storybook/manager-webpack5, @storybook/web-components, @storybook/addon-actions, @storybook/addon-controls, @storybook/addon-viewport, @storybook/addon-a11y, karma-coverage, @babel/preset-env, @babel/core, babel-loader, ts-loader, @open-wc/testing, karma, prettier, @cybozu/eslint-config, lit, @types/uuid, typescript.

### Document
- Added an article to explain the version conflicts issue and solution, updated quick start description, component sample code and README.
- Added Mobile Date/Time series components document.
- Added/updated description of `timeStep`, `min`, `max`, and `value` properties of TimePicker and DateTimePicker components.
- Added description of `icon` property of Dialog component.
- Added `Format setting plug-in` article.
- Fixed default value of RadioButton component's `borderVisible` property.