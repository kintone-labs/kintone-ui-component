---
id: comparison-v0-v1
Title: A commentary on the difference between v0 and v1 writing
sidebar_Label: A commentary on the difference between v0 and v1 writing
---

## Overview
**kintone UI Component**  In addition to the scrutiny and accessibility of the components provided by v1, the internal design has been reviewed to make it easier for developers to use.

This section explains the differences between the code written in v0 and v1 and the points that are easier to use in v1 in customizing the kintone app.

## Completed image
For example, you can use the kintone UI Component to create a search button on the "Record list" screen.
Here is the image of the finished screen.

![Search box](assets/v1_search_box.png) 

## JavaScript and CSS Customization

Let's start by looking at the code.
The kintone UI Component UMD file is used here.
How to upload a file [Quick Start](../getting-started/quick-start.md)  For details.

### When v0 is used

```javascript
// Process to prevent proliferation bugs
if (document.getElementById('my_index_text') !== null) {
  return event;
}

const header = kintone.app.getHeaderMenuSpaceElement();

// Show search box
const text = new kintoneUIComponent.Text({
  placeholder: 'Enter keywords'
});

const button = new kintoneUIComponent.Button({
  type: 'submit',
  text: 'Search'
});

// Use text and a button side by side
text.element.style.float = 'left';
button.element.style.float = 'right';

header.appendChild(text.render());
header.appendChild(button.render());

// ID granted for proliferation bug correspondence
text.element.id = 'my_index_text';
```

### When using v1

```javascript
// Process to prevent proliferation bugs
if (document.getElementById('kuc_text') !== null) {
  return event;
}

const header = kintone.app.getHeaderMenuSpaceElement();

// Show search box
const text = new Kuc.Text({
  placeholder: 'Enter keywords',
  id: 'kuc_text'
});
  
const button = new Kuc.Button({
  type: 'submit',
  text: 'Search',
  id: 'kuc_button'
});

header.appendChild(text);
header.appendChild(button);    
```

## The difference between v0 and v1 is explained

So how does the code change in v0 and v1?

The main difference is as follows:
- Name Space Simplified
- Render () method is not required.
- Property can be used to update values
- Improve the convenience of parts
- Property reviews
- Property of Alert and Label components

This section explains each one at a time.

---
#### Name Space Simplified
---
In v1, you can call the instance from the new kintoneUIComponent **new Kuc**  So that you can write more concise code.

- Code in v0
```
const text = new kintoneUIComponent.Text({
  placeholder: 'Enter keywords'
});
```

- v1 Code
```
const text = new Kuc.Text({
  placeholder: 'Enter keywords'
});
```

In addition, there is no risk that one of them will be overwritten when the v0 and v1 UMD are loaded in the same app.

---
#### Render () method is not required.
---
In v0, the Element of the component must be returned using the render () method in appendChild for internal implementation reasons.

In v1, render () is not required by reviewing the design, and the components can be drawn in simpler ways of writing.

- Code in v0
```
header.appendChild(text.render());
```

- v1 Code
```
header.appendChild(text);
```

---
#### Property can be used to update values
---
In v0, when a value is updated, a method must be called separately.
In v1, you can use properties to update values.

- Code in v0
```
const button = new kintoneUIComponent.Button({
  type: 'submit',
  text: 'Search'
});

// Update the value by calling the method
button.setText('Register');
```

- v1 Code
```
const button = new Kuc.Button({
  type: 'submit',
  text: 'Search',
  id: 'kuc_button'
});

// Property can be used to update values
button.text = 'Register';
```

---
#### Improve the convenience of parts
---
In v0, the specifications of the parts are lined up vertically by default, and CSS is required to be adjusted in the same order.

![v0](assets/v0_search_box.png) 

- Style must be adjusted
```
// Use text and a button side by side
text.element.style.float = 'left';
button.element.style.float = 'right';
```

In v1, the internal specifications are reviewed, and most of the components are side by side by default, so no adjustment is required.  
(For convenience, some components have default height and are set. ）

![Search box](assets/v1_search_box.png)

---
#### Property reviews
---
In v1, the properties of each component are scrutinized, and the properties are reviewed and added as needed.

For example, when a new entry is added in v1, `id`  You can add an ID to a component by using the property.
You can use the ID to retrieve the element.

- Code in v0
```
// Process to prevent proliferation bugs
if (document.getElementById('my_index_text') !== null) {
  return event;
}

const text = new kintoneUIComponent.Text({
  placeholder: 'Enter keywords'
});

// ID property is missing, ID must be granted separately
text.element.id = 'my_index_text';
```

- v1 Code
```
// Process to prevent growth bug (ID name granted by the property is available)
if (document.getElementById('kuc_text') !== null) {
  return event;
}

const header = kintone.app.getHeaderMenuSpaceElement();
const text = new Kuc.Text({
  placeholder: 'Enter keywords',
  id: 'kuc_text'
});
```
---
#### Property of Alert and Label components
---
In v0, when you want to display an error message in a component, or when you want to display a label, you need to implement it in another component such as Alert and Label.

As a property in v1  `error`  And `label`  Are available, and can be used by each component.        
For example, the Text component `error`  Let's take a look at the property.

In the beginning, I introduced a code to use KUC to create the search box, but when you click the button, nothing is left to respond.

Then, when the button is clicked, the text input character is checked and the error message is displayed only when the full width is added.

Here is a code.

```
const button = new Kuc.Button({
  type: 'submit',
  text: 'Search',
  id: 'kuc_button'
});

/* Add the following code */

button.addEventListener('click', event => {      
  const keyword = text.value;
  const errorMessage = 'Only full-width can be entered';
  text.error = ''; 
  
  // Full-width character judgment process
  if (!keyword.match(/^[^\x01-\x7E\xA1-\xDF]+$/)) {
    // Interrupt the process by displaying an error message if the input value is not full width
    text.error = errorMessage;
    return;
  }
});

```

In this code, in the Click event, the value is retrieved in Text.value, and the value is checked using regular expressions.
If the result of the check is not full-width, the error message is displayed and the process is interrupted.

The error message is used to display the Text `error`  The property.

When you initialize the message (hide the error message), you can write it in a concise manner, because only an empty string is assigned to Text.error.

![search_box_error](assets/v1_search_box_error.png)


## Conclusion

How did it work?
We hope you will experience smarter kintone development than ever before using the evolved kintone UI Component.

> This article will be reviewed by kintone and Google Chrome as of February, 2021.  
> In addition, the version of kintone UI Component that is used for customization is v0.7.4 and v1.0.0.

> The documentation for v0 is a separate site.[Here](https://kintone-labs.github.io/kintone-ui-component/latest/)Please check.
