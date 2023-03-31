---
id: tabs-customization
title: Tabs customization
sidebar_label: Tabs customization
---

## Overview
This article explains how to utilize and customize the Tabs component.<br>
We assume the following scenario:
1. Append KUC components to Tabs content.
2. Append Kintone native field to Tabs content.

### Components to use
- [Tabs](../components/desktop/tabs.md)
- [ReadOnlyTable](../components/desktop/readonly-table.md)

## Completed image

The completed image of the customized page is as follows:

![tabs customize](assets/tabs_customize.gif)

## What you will need to have ready

Create an application that includes two blank fields with IDs 'space' and 'spas', and add three table fields below them with IDs 'sales_record_table' and 'task_management_table', 'sales_order_table'.

## JavaScript and CSS Customization

When you import the UMD file of Kintone UI Component to the app, you can upload the JavaScript files by following these steps:<br>
You can see how to upload a file in the [Quick Start](../getting-started/quick-start.md).

### Defining Constants

We use constants to refer to important identifiers and values, such as the version number of Kintone, different space IDs, kintone fields, etc.

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

### Initialize Custom Component Tabs

We utilize the ReadOnlyTable component from the Kintone UI Component library to create the tab content.
We create three read-only tables: Sales Records, Task Management, and Sales Orders.
We also define a `createContent()` function that takes an array of components and adds them to a container with inner padding.
Finally, we call the `createTabs()` function to create the tabs and add them to the specified space.

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

### Initialize Kintone Native Tabs

We use the Kintone native tab feature to display different record fields.
We define three constants in the `initNativeKintoneTabs()` function, each representing a tab.
We use the `setFieldsShown()` function to hide and show the fields associated with the current tab and use the `addTabsChangeEventListener()` function to update the field.

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

> This article was reviewed by Kintone and Google Chrome as of April, 2023.<br>
> In addition, the version of Kintone UI Component that is used for customizations is v1.10.0.