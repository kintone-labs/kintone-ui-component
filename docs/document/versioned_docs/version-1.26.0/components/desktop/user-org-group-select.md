---
id: user-org-group-select
title: UserOrgGroupSelect
sidebar_label: UserOrgGroupSelect
---

## Overview
The UserOrgGroupSelect component allows the user to select user, organization, and group.

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
| icon | string | "" | Picker icon type | `icon` is used to set the main icon displayed on the right side of the toggle part<br/>Displays different icons based on different values of `icon`<br/>Available options:<ul><li>"user" : ![user](/img/icon-user.png)</li><li>"org" : ![org](/img/icon-org.png)</li><li>"group" : ![group](/img/icon-group.png)</li><li>"" : No icon</li></ul> |
| id | string | ""  | Component id name | |
| label | string | ""  | Label for the component | Label is not displayed if unspecified or empty |
| placeholder | string | "" | Placeholder text displayed in the input field | |
| disabled | boolean | false | Enable/Disable the component | |
| requiredIcon | boolean | false | Show/Hide the required icon | |
| visible | boolean | true | Show/Hide the component | |
| items | Array\<[Item](#item)\> | []  | List of options to display | Will result an error if the value of items is not an array |
| value |  Array\<string\> | [] | Selected value | No option will be selected if the `value` are unspecified<br/>Will result an error if the value is not an array |

### Item

| Name   | Type | Default | Description | Remark |
| :--- | :--- | :--- | :--- | :--- |
| label | string | null  | Text label for each option | If `Item.label` is unspecified, the value of `Item.value` is displayed on the UI |
| type | string | "" | Icon type of each option | `Item.type` determines the small icon type displayed for each option in both the toggle menu and the selected items list<br/>Displays different icons based on different values of the `Item.type`<br/>Available options:<ul><li>"user" : ![user](/img/selected-user.png)</li><li>"org" : ![org](/img/selected-org.png)</li><li>"group" : ![group](/img/selected-group.png)</li><li>"" : No icon</li></ul> |
| value | string | null  | Value of each option | Will result an error if setting duplicated value in `Item.value` |
| disabled | boolean | false | Enable/Disable each option | |

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

### Custom CSS
:::tip
Please check [Custom CSS feature guide](../../getting-started/custom-css.md) at first.
:::

Here is a list of properties that can be used for modifying component style:
#### Property
| Name |
| :--- |
| --kuc-user-org-group-select-font-size |
| --kuc-user-org-group-select-toggle-width |
| --kuc-user-org-group-select-toggle-height |
| --kuc-user-org-group-select-menu-max-height |

---
## Sample Code

:::tip
Please check the [package installation](../../getting-started/quick-start.md#installation) method first.
:::

Here is a sample code when all parameters are specified:

```javascript
const Kuc = Kucs['1.x.x'];

const space = kintone.app.record.getSpaceElement('space');

const userSelect = new Kuc.UserOrgGroupSelect({
  label: 'Assignees',
  items: [
    { label: 'Alice Johnson', value: 'alice', type: 'user', disabled: false },
    { label: 'Bob Smith', value: 'bob', type: 'user', disabled: false },
    { label: 'Charlie Lee', value: 'charlie', type: 'user', disabled: true },
    { label: 'Marketing Group', value: 'marketing-group', type: 'group', disabled: false },
    { label: 'Sales Team', value: 'sales-team', type: 'group', disabled: false },
    { label: 'Engineering Team', value: 'engineering-team', type: 'group', disabled: false },
    { label: 'Acme Corporation', value: 'acme-corp', type: 'org', disabled: false },
    { label: 'New York Office', value: 'ny-office', type: 'org', disabled: false },
  ],
  value: ['alice', 'marketing-group', 'acme-corp'],
  requiredIcon: true,
  error: 'Error occurred!',
  className: 'options-class',
  icon: 'user',
  id: 'options-id',
  placeholder: 'Please select assignees',
  visible: true,
  disabled: false
});
space.appendChild(userSelect);

userSelect.addEventListener('change', event => {
  console.log(event);
});

userSelect.addEventListener('click-picker-icon', event => {
  console.log(event);
});
```
