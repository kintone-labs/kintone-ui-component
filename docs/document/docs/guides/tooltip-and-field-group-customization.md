---
id: tooltip-and-field-group-customization
title: Tooltip and FieldGroup customization
sidebar_label: Tooltip and FieldGroup customization
---

## Overview
This article explains how to utilize and customize the FieldGroup and Tooltip components.

We assume the following scenario:
1. Basic Usage for FieldGroup and Tooltip (*FieldGroup and Tooltip*)
2. Append Table component to FieldGroup content (*FieldGroup*)
3. Using Two Types of Tooltip (*Tooltip*)

### Components to use
- [Dropdown](../components/desktop/dropdown.md)
- [FieldGroup](../components/desktop/field-group.md)
- [MultiChoice](../components/desktop/multichoice.md)
- [Table](../components/desktop/table.md)
- [Text](../components/desktop/text.md)
- [Tooltip](../components/desktop/tooltip.md#%23%23%23%23Property)

## What you will need to have ready

Create an app that includes a blank space field with the id "kuc_space".

## JavaScript and CSS Customization

When you import the UMD file of Kintone UI Component to the app, you can upload the JavaScript files by following these steps:<br/>
You can see how to upload a file in the [Quick Start](../getting-started/quick-start.md).

### Basic Usage for FieldGroup and Tooltip
#### Create Tooltip with Basic FieldGroup
Create a Basic FieldGroup with a label "KUC team" and the Text component as its content.
    
```javascript   
  const fieldGroup = new Kuc.FieldGroup({
    label: 'KUC team',
    content: new Kuc.Text({text: 'This is a FieldGroup'})
  });
```

Create a Tooltip component with the tooltip message "Office day info" for the FieldGroup and associated them.

```javascript
  const tooltip = new Kuc.Tooltip({
    title: 'Office day info',
    content: fieldGroup
  });
```

#### The display on UI
![render](/img/tooltip_field-group.gif)

### Append Table components to FieldGroup content.
In the default Kintone, FieldGroup can't have a table, but KUC allows FieldGroup to show a table when it's open.

#### Create Tooltip with Html Button
Begin by creating a Tooltip component associated with an HTML button, conveying the message "Submit changes or additions for this entry."

```javascript
  const button = document.createElement('button');
  button.textContent = 'Submit';
  
  const tooltipForButton = new Kuc.Tooltip({
    title: 'Submit changes or additions for this entry.',
    container: button,
    describeChild: false,
    placement: 'bottom'
  });
```

#### Create Table with Dropdown, Text, MultiChoice components and Button wrapped by Tooltip
Create a Table component containing information such as 'Name', 'In office day', 'Location' and 'Note' and a button wrapped in a Tooltip.

```javascript
  const renderName = cellData => {
    return new Kuc.Text({
      value: cellData
    });
  };

  const renderDay = cellData => {
    return new Kuc.MultiChoice({
      items: [
        {
          label: 'Monday',
          value: '1'
        },
        {
          label: 'Tuesday',
          value: '2'
        },
        {
          label: 'Wednesday',
          value: '3'
        },
        {
          label: 'Thursday',
          value: '4'
        },
        {
          label: 'Friday',
          value: '5'
        }
      ],
      value: cellData
    });
  };

  const renderLocation = cellData => {
    return new Kuc.Dropdown({
      items: [
        {
          label: '-----',
          value: '-'
        },
        {
          label: 'Tokyo',
          value: 'Tokyo'
        },
        {
          label: 'Vietnam',
          value: 'Vietnam'
        },
        {
          label: 'Shanghai',
          value: 'Shanghai'
        }
      ],
      value: cellData
    });
  };

  const renderNote = cellData => {
    return new Kuc.Text({
      value: cellData
    });
  };

  const renderAction = cellData => {
      const button = document.createElement('button');
      const tooltipForButton = new Kuc.Tooltip({
        title: 'Submit changes or additions for this entry.',
        container: button,
        describeChild: false,
        placement: 'bottom'
      });
      return tooltipForButton;
    };

  const table = new Kuc.Table({
    label: 'team info',
    columns: [
      {
        title: 'Name',
        field: 'name',
        render: renderName
      },
      {
        title: 'In office day',
        field: 'day',
        render: renderDay
      },
      {
        title: 'Location',
        field: 'location',
        render: renderLocation
      },
      {
        title: 'Note',
        field: 'note',
        render: renderNote
      },
      {
        title: 'Action',
        field: 'action',
        render: renderAction}
    ],
    data: [
      {
        name: '',
        day: [],
        location: '-',
        note: ''
      }
    ]
  });
```

#### Create FieldGroup with Table component
Create a FieldGroup component with the label "KUC team" and the Table component as its content.

```javascript
  const fieldGroup = new Kuc.FieldGroup({
    label: 'KUC team',
    content: table
  });
```

#### Create Tooltip with the FieldGroup
Create Tooltip for the FieldGroup and associated them.

```javascript
  const tooltipForFieldGroup = new Kuc.Tooltip({
    title: 'Office day info',
    container: fieldGroup,
  });
```

#### Add Event listener for FieldGroup 
Add event listener for FieldGroup to change the tooltip message when FieldGroup is expanded or collapsed

```javascript
   fieldGroup.addEventListener('change', e => {
    if (e.detail.expanded) {
      tooltipForFieldGroup.title = '';
    } else {
      tooltipForFieldGroup.title = 'Office day info';
    }
  });
```

#### The display on UI
![render](/img/tooltip_fieldgroup_customize.gif)


### Using Two Types of Tooltip
You may have noticed that when creating a Tooltip for a button, I will introduce a new property, describeChild. 
This property is set to false by default. describeChild is used when enabling the assistive mode. 
Now, let's enable the screen reader and try moving the focus to the button to see what the screen reader reads.
```javascript
  const tooltipForButton = new Kuc.Tooltip({
    title: 'Submit changes or additions for this entry.',
    container: button,
    describeChild: false,
    placement: 'bottom'
  });
```

#### The display on UI
![render](/img/tooltip_describeChild_false.gif)
![render](/img/tooltip_describeChild_false.png)

In the examples, with describeChild set to false, the screen reader replaces the button's original content 'Submit' with the Tooltip's content ('Submit changes or additions for this entry') when the button gains focus. 
This is because when describeChild is false, Tooltip adds [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) to its child elements (button, FieldGroup), causing the screen reader to read the content of [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) instead of the original content.

When describeChild is set to true, let's see what the screen reader reads.
```javascript
  const tooltipForButton = new Kuc.Tooltip({
    title: 'Submit changes or additions for this entry.',
    container: button,
    describeChild: true,
    placement: 'bottom'
  });
```
#### The display on UI
![render](/img/tooltip_describeChild_true.gif)
![render](/img/tooltip_describeChild_true.png)

This time, we can see that when describeChild is true, the screen reader first reads the content of the button itself 'Submit' when the button gains focus, then continues to read the Tooltip's title 'Submit changes or additions for this entry.'. This is because when describeChild is true, Tooltip adds [aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) to its child elements (button), causing the screen reader to read the original content first and then continue with the content of [aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).


:::info
This article was reviewed by Kintone and Google Chrome as of Dec, 2023.<br/>
In addition, the version of Kintone UI Component that is used for customizations is v1.15.0.
:::