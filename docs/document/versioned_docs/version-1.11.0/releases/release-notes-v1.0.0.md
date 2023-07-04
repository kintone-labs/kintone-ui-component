---
id: release-notes-v1.0.0
title: v1.0.0 Release Notes
sidebar_label: v1.0.0 Release Notes
---

## Overview

Here are the [kintone UI Component v1.0.0](https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.0.0) Release Notes.<br/>
You can find the background of the update from v0 to v1 and the future plans of v1.

## Background

The following are the reasons why we decided to implement v1.
- Variety of requests for v0
- Complexity of the design and usage of v0
- Maintenance difficulties of v0

For those engineers who are developing Kintone customization, we have added features to make the experience to develop Kintone-like components easier. Please find the following to learn more about v1.

## Update details

The major updates are as follows:

- Improved the reproducibility of Kintone components
  - The UI and behavior of the components are closer to the native Kintone components.
- Enabled accessibility
  - Support for keyboard operation and voice-to-speech software.
- Enabled mobile
  - Added mobile components.
- Improved documentation
  - Easy to understand the specification with the sample code.
  - Multiple languages supported.

## What we considered for v1

- Interface
  - Inherit the interface from v0. This is for v0 users who don't want to experience a significant change for v1.

1. v1.0.0
```js
    const button = new Kuc.Button({
      type: 'submit',
      text: 'Search',
      id: 'kuc_button' // Add id property
    });
    header.appendChild(button);　// Show button
```
2. v0.7.4
```js
    const button = new kintoneUIComponent.Button({
      type: 'submit',
      text: 'Search',
    });
    header.appendChild(button.render());　// Show button
```

- Simplicity
  - Property can be directly accessed without using a method.

1. v1.0.0
```js
    const button = new Kuc.Button({
      type: 'submit',
      text: 'Search',
      id: 'kuc_button'
    });
    header.appendChild(button);
    button.text = 'Register'; // Update text property
```
2. v0.7.4
```js
    const button = new kintoneUIComponent.Button({
      type: 'submit',
      text: 'Search',
    });
    header.appendChild(button.render());
    button.setText('Register'); // Update text property
```


- Component prioritization
  - We prioritized components which can be used very frequently.
  - We have excluded the components such as Attachment, ColorPicker, FieldGroup, IconButton, and Tab at this moment since there are not so many use cases with the components. Of course, we will consider to implement new components if we get many requests. Please give us your feedbacks on [GitHub issue](https://github.com/kintone-labs/kintone-ui-component/issues).

- Framework
  - Implemented with the LitElement of the Web Components framework to improve readability of internal code.
  - The Web Components interface will be considered in the future.

With the above, we aimed to provide components that developers use easily and are aligned with the actual needs from developers.<br/>
Please refer to the [link](../guides/comparison-v0-v1.md) for the details of differences between v0 and v1.

## Future plans

The following are the plans for the upcoming releases:

- Additional components
  - Additional components such as Table, ReadOnlyTable, Dialog, Date, and DateTime are expected to be provided.
- Mobile components
- Improvement of documentation

:::info
As for v0, we will continue to fix bugs and update the dependent libraries. However, we are not planning to add new features to v0 as of now.
:::

## Conclusion

Thank you for reading the release notes.<br/>
Kintone UI Component v1 is a library designed to provide convenience for engineers who are involved in Kintone customization and plug-in development.<br/>
Please stay tuned for further releases.

We always appreciate your feedbacks. Please submit questions and requests on [GitHub issue](https://github.com/kintone-labs/kintone-ui-component/issues).<br/>
Best regards,