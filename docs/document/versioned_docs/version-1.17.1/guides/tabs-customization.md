---
id: tabs-customization
title: Tabs customization
sidebar_label: Tabs customization
---

## Overview
This article explains how to utilize and customize the Tabs component.<br/>
We assume the following scenario:
1. Append KUC components to Tabs content.
2. Append Kintone native fields to Tabs content.

### Components to use
- [Tabs](../components/desktop/tabs.md)
- [ReadOnlyTable](../components/desktop/readonly-table.md)

## Completed image

The completed image of the customized page is as follows:

![tabs customize](/img/tabs_customize.gif)

## What you will need to have ready

Create an application that includes the fields as follows:
- Two blank fields with id "space_for_native_kintone" and "space_for_custom_components".
- Three table fields with id "sales_record_table", "task_management_table", and "sales_order_table".

## JavaScript and CSS Customization

When you import the UMD file of Kintone UI Component to the app, you can upload the JavaScript files by following these steps:<br/>
You can see how to upload a file in the [Quick Start](../getting-started/quick-start.md).

### Define constants

We use constants to refer to important identifiers and values, such as the version number of Kintone UI Components, space IDs, Kintone fields, etc.

```javascript
const Kuc = Kucs['1.x.x'];

const SPACE_FOR_NATIVE_KINTONE = 'space_for_native_kintone';
const SPACE_FOR_CUSTOM_COMPONENTS = 'space_for_custom_components';

const SALES_RECORD_TABLE_ID = 'sales_record_table';
const TASK_MANAGEMENT_ID = 'task_management_table';
const SALES_ORDER_ID = 'sales_order_table';

// A set of Kintone fields that need to be shown/hidden on each tab.
const salesRecordTabFields = [SALES_RECORD_TABLE_ID];
const taskManagementTabFields = [TASK_MANAGEMENT_ID];
const salesOrderTabFields = [SALES_ORDER_ID];
let currentTabFields;
```

### Create some common functions

We create two common functions
- Function `createContent()` to create a KUC Tabs. And for preventing DOM manipulations, we created the `isBorderVisible` option.
You can set Kintone native fields to Tabs content without DOM manipulation setting the `isBorderVisible: false`.
- Function `addTabsToDom()` to append the Tabs to the specified space.

```javascript
function createTabs(contents, isBorderVisible) {
  const items = [
    {
      label: 'Sales Record',
      value: 'salesRecordTab',
      content: contents ? contents[0] : ''
    },
    {
      label: 'Task Management',
      value: 'taskManagementTab',
      content: contents ? contents[1] : ''
    },
    {
      label: 'Sales Order',
      value: 'salesOrderTab',
      content: contents ? contents[2] : ''
    }
  ];
  const tabs = new Kuc.Tabs({
    value: 'salesRecordTab',
    borderVisible: isBorderVisible,
    items
  });
  return tabs;
}

function addTabsToDOM(tabs, space_id) {
  const spaceElement = kintone.app.record.getSpaceElement(space_id);
  spaceElement.appendChild(tabs);
}
```


### Initialize Tabs for custom components

We use the Tabs component feature to display different custom tables (create with ReadOnlyTable component from the Kintone UI Component library) depending on the tab.<br/>
When the tab is clicked, the Tabs component will automatically show the corresponding custom table and hide the rest of the tables.<br/>
We use the `createContent()` function that takes an array of components and adds them to a container with inner padding.<br/>
Finally, we call the `createTabs()` function to create the tabs and call the `addTabsToDOM()` function to add them to the specified space.

```javascript
function initCustomComponentTabs() {
  const salesRecordTable = new Kuc.ReadOnlyTable({
    label: 'Sales Record',
    columns: [
      { title: 'Create Date', field: 'date' },
      { title: 'Reporter Account', field: 'account' },
      { title: 'Communication Content', field: 'communication' }
    ],
    data: [
      {
        date: 'Feb 28, 2023',
        account: 'Howard',
        communication:
        'Discussed the new product launch strategy with the client and received positive feedback.' +
        'The client agreed to place an order for 500 units of the new product. They also requested a 10% discount on the total order value.'
      }
    ]
  });
  const salesRecordContent = createContent([salesRecordTable]);

  const taskManagementTable = new Kuc.ReadOnlyTable({
    label: 'Task Management',
    columns: [
      { title: 'Status', field: 'status' },
      { title: 'Task Executor', field: 'executor' },
      { title: 'Task Requirements', field: 'requirements' },
      { title: 'Result Reporting', field: 'reporting' }
    ],
    data: [
      {
        status: 'In Progress',
        executor: 'Mike',
        requirements:
        'Conduct market research on the latest trends and consumer behavior in the target market.',
        reporting: 'Report due by March 15th.'
      }
    ]
  });
  const taskManagementContent = createContent([taskManagementTable]);

  const salesOrderTable = new Kuc.ReadOnlyTable({
    label: 'Sales Order',
    columns: [{ title: 'Order Number', field: 'order' }],
    data: [{ order: '1' }]
  });
  const salesOrderContent = createContent([salesOrderTable]);

  const tabs = createTabs(
    [salesRecordContent, taskManagementContent, salesOrderContent],
    true
  );
  addTabsToDOM(tabs, SPACE_FOR_CUSTOM_COMPONENTS);
}

function createContent(components) {
  const content = document.createElement('div');
  content.style.padding = '16px';
  components.map(component => content.appendChild(component));
  return content;
}
```

### Initialize Tabs for kintone native fields

We use the Tabs component feature to display different Kintone native fields depending on the tab.<br/>
When a tab is clicked, we show the corresponding Kintone native fields and hide the rest of the fields.<br/>
In the "setFieldsShown()" function, the fields are shown or hidden by using the [kintone.app.record.setFieldShown()](https://kintone.dev/en/docs/kintone/js-api/other/show-or-hide-a-field/) API and use the `addTabsChangeEventListener()` function to handle the click event and update the fields.<br/>
We also create the tabs using the `createTabs()` function , but this time we set `isBorderVisible: false` to make it more compatible with the Kintone native field.<br/>
Finally, we call `addTabsToDom()` function to append the Tabs to the specified space.

```javascript
function initNativeKintoneTabs() {
  setFieldsShown(taskManagementTabFields, false);
  setFieldsShown(salesOrderTabFields, false);
  currentTabFields = salesRecordTabFields;
  const tabs = createTabs(undefined, false);
  addTabsChangeEventListener(tabs);
  addTabsToDOM(tabs, SPACE_FOR_NATIVE_KINTONE);
}

function addTabsChangeEventListener(tabs) {
  tabs.addEventListener('change', event => {
    switch (event.detail.value) {
      case 'salesRecordTab':
        switchDisplayedFields(salesRecordTabFields);
        break;
      case 'taskManagementTab':
        switchDisplayedFields(taskManagementTabFields);
        break;
      case 'salesOrderTab':
        switchDisplayedFields(salesOrderTabFields);
        break;
    }
  });
}

function switchDisplayedFields(displayedFields) {
  setFieldsShown(displayedFields, true);
  setFieldsShown(currentTabFields, false);
  currentTabFields = displayedFields;
}

function setFieldsShown(fields, isShown) {
  fields.forEach(field => {
    kintone.app.record.setFieldShown(field, isShown);
  });
}
```
:::info
This article was reviewed by Kintone and Google Chrome as of May, 2023.<br/>
In addition, the version of Kintone UI Component that is used for customizations is v1.11.0.
:::