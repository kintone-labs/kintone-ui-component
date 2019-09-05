# Spinner

## Overview
![Spinner](../img/spinner.PNG)

## Constructor

**Parameter**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var spinner = new kintoneUIComponent.Spinner();
```
**React**
```javascript
import { Spinner } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <Spinner isVisible={true}/>
        );
    }
}

```
</details>

## Methods
### render()
Get dom element of component.

**Parameter**

None

**Returns**

Dom element

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var spinner = new kintoneUIComponent.Spinner();
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(spinner.render());
```
**React**
```javascript
import { Spinner } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <Spinner isVisible={true}/>
        );
    }
}
```
</details>

### show()
Display the spinner.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var spinner = new kintoneUIComponent.Spinner();
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(spinner.render());
spinner.show();
```
**React**
```javascript
import { Spinner } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <Spinner isVisible={true}/>
        );
    }
}

```
</details>

### hide()
Hide the spinner.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var spinner = new kintoneUIComponent.Spinner();
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(spinner.render());
spinner.hide();
```
**React**
```javascript
import { Spinner } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <Spinner isVisible={false}/>
        );
    }
}

```
</details>

### setStyles(style)
Set style of container dom element.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|style|object|Yes|Set the style for container dom element. For Key of Style Object Properties, please read references: https://www.w3schools.com/jsref/dom_obj_style.asp |

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var spinner = new kintoneUIComponent.Spinner();
spinner.setStyles({background:"blue",fontSize:'20px'});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(spinner.render());
```
**React**
```javascript
import { Spinner } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <Spinner setStyles={{background:"blue", fontSize:'20px'}}/>
        );
    }
}
```
</details>


### setClassName(className)
Set className of container dom element.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|className|string|Yes|Set className for container dom element. Add trailing space for multiple className|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var spinner = new kintoneUIComponent.Spinner();
spinner.setClassName("class1 class2");
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(spinner.render());
```
**React**
```javascript
import { Spinner } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <Spinner setClassName="class1 class2"/>
        );
    }
}
```
</details>