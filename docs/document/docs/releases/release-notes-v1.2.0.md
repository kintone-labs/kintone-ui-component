---
id: release-notes-v1.2.0
title: v1.2.0 Release Notes
sidebar_label: v1.2.0 Release Notes
---

## Overview

Here are the [kintone UI Component v1.2.0](https://github.com/kintone-labs/kintone-ui-component/releases/tag/v1.2.0) Release Notes.<br/>
New Features, maintenances, document updates, and security updates have been made.

## Update details
### New Features
- Added `duration` property on Notification and MobileNotification.
- Added `close` event on Notification and MobileNotification.
- Added `input` event on Text, TextArea, MobileText, and MobileTextArea.
- Added the function to get the info of version.

### Maintenance
- Installed License Finder to check 3rd party libraries' license to the project.
- Fixed accessibility attribute values on Dropdown and MultiChoice.
- Improved some internal processing.

### Security Updates
- Updated dependent libraries: webpack.

### Document
- Notification and MobileNotification: Added description of `duration` property and `close` event.
- Text, TextArea, MobileText, MobileTextArea: Added description of `input` event.
- Added the page of version function.

## Topics to share!

### duration property and close event
We added new property and event on Notification and MobileNotification components!<br/>
You can use the `duration` property to specify the time until the component closes.<br/>
You can also use the `close` event to get the timing when clicking the close button.


### input event
We added `input` event to get the value when inserting characters on Text, TextArea, MobileText, and MobileTextArea components.<br/>
You can utilize it in case you want to implement "incremental search", and so on.


### version function
Now you can get the version information of the package using version property of Kuc.<br/>

In UMD, you can use version property of Kuc.<br/>
Example:

```javascript
console.log(Kuc.version);
```
<br/>

In ESM, you can import "version" from kintone-ui-component.<br/>
Example:

```js
import { version } from "kintone-ui-component/lib/version";
console.log(version);
```

If you have any feedback or ideas, please feel free to post on GitHub issue!
