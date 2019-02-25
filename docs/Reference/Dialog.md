# Dialog

## Overview
![Dialog](../img/dialog.PNG)

|Item|	Description|
| --- | --- |
|Item-1|	Header section|	
|Item-2|	Content section|
|Item-3| Footer section|

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.header|String, DOM, React Element|No|Header of dialog.|
|options.content|String, DOM, React Element|No|Content of dialog.|
|options.footer|String, DOM, React Element|No|Footer of dialog.|
|options.isVisible|Boolean|No|If set to true, Dialog will show up. Otherwise Dialog will hide.|
|options.showCloseButton|Boolean|No|If set to true, close button in Item-1 will show up. Otherwise close button will hide.|

<details class="tab-container" open>
<Summary>Sample</Summary>

**React**
```javascript
import {Dialog} from 'kintone-ui-component';
import React from 'react';
  
export default class Plugin extends React.Component {
    state = {isVisible: true}
     
    onClose = () => {
        this.setState({isVisible: false})
    }
 
    render() {
        return (
            <Dialog
                showCloseButton={true}
                header="Dialog header"
                content="This is content"
                footer="Footer"
                isVisible={this.state.isVisible}
                onClose={this.onClose}
            />
        );
    }
}
```
**Javascript**
```javascript
var myDialog = new kintoneUIComponent.Dialog({
    header: "Dialog header",
    content: "This is content",
    footer: "Footer",
    isVisible: false,
    showCloseButton: true
});
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

**React**
```javascript
import {Dialog} from 'kintone-ui-component';
import React from 'react';
  
export default class Plugin extends React.Component {
    state = {isVisible: true}
     
    onClose = () => {
        this.setState({isVisible: false})
    }
 
    render() {
        return (
            <Dialog
                showCloseButton={true}
                header="Dialog header"
                content="This is content"
                footer="Footer"
                isVisible={this.state.isVisible}
                onClose={this.onClose}
            />
        );
    }
}
```
**Javascript**
```javascript
var myDialog = new kintoneUIComponent.Dialog({
    header: "Dialog header",
    content: "This is content",
    footer: "Footer",
    isVisible: false,
    showCloseButton: true
});

var body = document.getElementsByTagName("BODY")[0];
    body.appendChild(dropdown.render());
```
</details>

### show()
Display the Dialog.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var myDialog = new kintoneUIComponent.Dialog({
    header: "Dialog header",
    content: "This is content",
    footer: "Footer",
    isVisible: false,
    showCloseButton: true
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(myDialog.render());
myDialog.show();
```
**React**
```javascript
import { Dialog } from 'kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <Dialog
                showCloseButton={true}
                header="Dialog header"
                content="This is content"
                footer="Footer"
                isVisible={true}
                onClose={this.onClose}
            />
        );
    }
}

```
</details>

### hide()
Hide the Dialog.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var myDialog = new kintoneUIComponent.Dialog({
    header: "Dialog header",
    content: "This is content",
    footer: "Footer",
    isVisible: true,
    showCloseButton: true
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(myDialog.render());
myDialog.hide();
```
**React**
```javascript
import { Dialog } from 'kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <Dialog
                showCloseButton={true}
                header="Dialog header"
                content="This is content"
                footer="Footer"
                isVisible={false}
            />
        );
    }
}
```
</details>

### setHeader()
Set header for Dialog.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|header|String, DOM, React Element|	Yes|Header of dialog.|

**Returns**

Dialog instance

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var myDialog = new kintoneUIComponent.Dialog();
var elements = 'Announcement'
myDialog.setHeader(elements);
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(myDialog.render());
myDialog.show();
```
**React**
```javascript
import { Dialog } from 'kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <Dialog
                showCloseButton={true}
                header="Announcement"
                isVisible={true}
                onClose={this.onClose}
            />
        );
    }
}
```
</details>

### getHeader()
Get header for Dialog.

**Parameter**

None

**Returns**

Header of Dialog: string | DOM | React Element

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var myDialog = new kintoneUIComponent.Dialog({
    header: "Dialog header",
    content: "This is content",
    footer: "Footer",
    isVisible: false,
    showCloseButton: true
});
 
myDialog.getHeader(); // return "Dialog header"
```
**React**
```javascript
import { Dialog } from 'kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    state = {header: "Announcement"}
    handleClick= () => {
        console.log(this.state.header);
    };
    render() {
        return (
            <div>
                <Dialog
                    showCloseButton={true}
                    header={this.state.header}
                    isVisible={true}
                    onClose={this.onClose}
                />
                <button onClick={this.handleClick}>Get Header</button>
            </div>
        );
    }
}
```
</details>

### setContent()
Set content for Dialog.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|content|String, DOM, React Element|	Yes|Content of dialog.|

**Returns**

Dialog instance

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var myDialog = new kintoneUIComponent.Dialog();
var elements = 'Content'
myDialog.setContent(elements);
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(myDialog.render());
myDialog.show();
```
**React**
```javascript
import { Dialog } from 'kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <Dialog
                showCloseButton={true}
                content="content"
                isVisible={true}
                onClose={this.onClose}
            />
        );
    }
}
```
</details>

### getContent()
Get content for Dialog.

**Parameter**

None

**Returns**

Content of Dialog: string | DOM | React Element

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var myDialog = new kintoneUIComponent.Dialog({
    header: "Dialog header",
    content: "This is content",
    footer: "Footer",
    isVisible: false,
    showCloseButton: true
});
 
myDialog.getContent(); // return "This is content"
```
**React**
```javascript
import { Dialog } from 'kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    state = {content: "Dialog content"}
    handleClick= () => {
        console.log(this.state.content);
    };
    render() {
        return (
            <div>
                <Dialog
                    showCloseButton={true}
                    content={this.state.content}
                    isVisible={true}
                    onClose={this.onClose}
                />
                <button onClick={this.handleClick}>Get Content</button>
            </div>
        );
    }
}
```
</details>

### setFooter()
Set footer for Dialog.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|footer|String, DOM, React Element|	Yes|Footer of dialog.|

**Returns**

Dialog instance

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var myDialog = new kintoneUIComponent.Dialog();
var elements = 'Footer'
myDialog.setFooter(elements);
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(myDialog.render());
myDialog.show();
```
**React**
```javascript
import { Dialog } from 'kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    render() {
        return (
            <Dialog
                showCloseButton={true}
                footer="footer"
                isVisible={true}
                onClose={this.onClose}
            />
        );
    }
}
```
</details>

### getFooter()
Get footer for Dialog.

**Parameter**

None

**Returns**

Footer of Dialog: string | DOM | React Element

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var myDialog = new kintoneUIComponent.Dialog({
    header: "Dialog header",
    content: "This is content",
    footer: "Footer",
    isVisible: false,
    showCloseButton: true
});
 
myDialog.getFooter(); // return "Footer"
```
**React**
```javascript
import { Dialog } from 'kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    state = {footer: "Dialog footer"}
    handleClick= () => {
        console.log(this.state.footer);
    };
    render() {
        return (
            <div>
                <Dialog
                    showCloseButton={true}
                    footer={this.state.footer}
                    isVisible={true}
                    onClose={this.onClose}
                />
                <button onClick={this.handleClick}>Get Footer</button>
            </div>
        );
    }
}
```
</details>