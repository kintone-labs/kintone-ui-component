---
id: user-org-group-select
title: UserOrgGroupSelect
sidebar_label: UserOrgGroupSelect
---

## Overview
The UserOrgGroup component allows the user to select user/org/group.

import { UserOrgGroupSelectComponent } from "@site/static/js/samples/desktop/user-org-group-select.jsx"

<UserOrgGroupSelectComponent />

---

## Specification

### Property

Here is a list of properties that can be used for modifying the component:

| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| className | string | ""  | Component class name | |
| error | string | ""  | Text to be displayed in error | Error will not be displayed if unspecified or empty |
| icon | string | "user" | Picker icon type | The icon property is used to set the main icon displayed on the right side of the toggle part.<br/>Displays different icons based on different values of the icon property.<br/>The available values are "user", "org", and "group".<br/>If the value is not specified, the default icon is "user". |
| id | string | ""  | Component id name | |
| label | string | ""  | Label for the component | Label is not displayed if unspecified or empty |
| placeholder | string | "" | Placeholder text displayed in the input field | |
| disabled | boolean | false | Enable/Disable the component | |
| requiredIcon | boolean | false | Show/Hide the required icon | |
| visible | boolean | true | Show/Hide the component | |
| items | Array\<[Item](#item)\> | []  | List of options to display | Will result an error if the value of items is not an array |
| value |  Array\<string\> | [] | Value of the selected item | No option will be selected if the `value` are unspecified<br/>Will result an error if the value is not an array |

### Item

Here is a list of properties that can be used for modifying the item:

| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| label | string | null  | Text label for each option | If `Item.label` is unspecified, the value of `Item.value` is displayed on the UI |
| type | string | null | Icon type of each item | The Item.type property determines the small icon type displayed for each option in both the dropdown menu and the selected items list.<br/>Displays different icons based on different values of the icon property.<br/>The available values are "user", "org", and "group".<br/>If the value is not specified or invalid, no icon will be displayed. |
| value | string | null  | Value of each option | Will result an error if setting duplicated value in `Item.value` |
| disabled | boolean | false | Enable/Disable the item | |

### Event

Here is a list of events that can be specified:

| Name | Type | Description | Remark |
| :--- | :--- | :--- | :--- |
| change | function | Event handler when the value has been changed | It will pass the event object as the argument<br/><br/>You can receive the following values when used in event.detail<br/>event.detail.oldValue : Value before the change<br/>event.detail.value : Value after the change |
| click-picker-icon | function | Event handler when the picker icon is clicked | It will pass the event object as the argument |

### Constructor

UserOrgGroupSelect(options)<br/>
Here is a list of available constructors:

#### Parameter
| Name | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| options | object | \{\} | Object that includes component properties | |

## Sample Code

:::tip
Please check the [package installation](../../getting-started/quick-start.md#installation) method first.
:::

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');
const userOrgGroup = new Kuc.UserOrgGroup({
  label: "Sample label",
  requiredIcon: true,
  items: [
    {
    label: "User A",
    value: "userA",
    type: "user",
    disabled: true,
    },
    {
    label: "User B",
    value: "userB",
    type: "user",
    },
    {
    label: "Organization AOrganization AOrsAOrganization",
    value: "orgA",
    type: "org",
    },
    {
    label: "Group A",
    value: "groupA",
    type: "group",
    },
    {
    label: "User C",
    value: "userC",
    type: "user",
    },
  ],
  value: ["userB", "orgA", "groupA"],
  error: "Error occurred!",
  className: "sample-class",
  icon: "user",
  id: "sample-id",
  placeholder: "Sample placeholder",
  visible: true,
  disabled: false,
});
userOrgGroup.addEventListener('change', event => {
  console.log(event);
});
userOrgGroup.addEventListener('click-picker-icon', event => {
  console.log(event);
});
space.appendChild(userOrgGroup);
```
