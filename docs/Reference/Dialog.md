# Dialog

## Overview
![Dialog](../img/dialog.PNG)

|Item|	Description|
| --- | --- |
|Item-1| Header section|	
|Item-2| Content section|
|Item-3| Footer section|
|Item-4| Close button|

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.header|String, DOM, React Element|No|Header of Dialog.|
|options.content|String, DOM, React Element|No|Content of Dialog.|
|options.footer|String, DOM, React Element|No|Footer of Dialog.|
|options.isVisible|Boolean|No|If set to true, Dialog will show up. Otherwise Dialog will hide. Default: true|
|options.showCloseButton|Boolean|No|If set to true, close button in Item-1 will show up. Otherwise close button will hide. Default: true|

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
```
**React**
```javascript
import {Dialog} from '@kintone/kintone-ui-component';
import React from 'react';
  
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        };
    }
     
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
</details>

## Methods
### render()
Get DOM element of component.

**Parameter**

None

**Returns**

DOM element

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
```
**React**
```javascript
import {Dialog} from '@kintone/kintone-ui-component';
import React from 'react';
import {render} from 'react-dom';
  
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        };
    }
     
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
render(<Plugin />, document.getElementById('root'));
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
import { Dialog } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        };
    }
    onClose = () => {
        this.setState({
            isVisible: false
        })
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
import { Dialog } from '@kintone/kintone-ui-component';
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
|header|String, DOM, React Element|	Yes|Header of Dialog.|

**Returns**

Dialog instance

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var myDialog = new kintoneUIComponent.Dialog();
var elements = 'Announcement'
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(myDialog.render());
myDialog.setHeader(elements);
myDialog.show();
```
**React**
```javascript
import { Dialog } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        };
    }
    onClose = () => {
        this.setState({
            isVisible: false
        })
    }
    render() {
        return (
            <Dialog
                showCloseButton={true}
                header="Announcement"
                isVisible={this.state.isVisible}
                onClose={this.onClose}
            />
        );
    }
}
```
</details>

### getHeader()
Get header of Dialog.

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
    isVisible: true,
    showCloseButton: true
});

document.body.append(myDialog.render());
 
console.log('Header: ', myDialog.getHeader()); // return "Dialog header"
```
**React**
```javascript
import { Dialog } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
            header: 'Announcement'
        };
    }
    onClose = () => {
        this.setState({
            isVisible: false
        })
    }
    handleClick= () => {
        console.log(this.state.header);
    };
    
    render() {
        return (
            <div>
                <Dialog
                    showCloseButton={true}
                    header={this.state.header}
                    isVisible={this.state.isVisible}
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
|content|String, DOM, React Element|	Yes|Content of Dialog.|

**Returns**

Dialog instance

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var myDialog = new kintoneUIComponent.Dialog();
var elements = 'Content'
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(myDialog.render());
myDialog.setContent(elements);
myDialog.show();
```
**React**
```javascript
import { Dialog } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        };
    }
    onClose = () => {
        this.setState({
            isVisible: false
        })
    }
    render() {
        return (
            <Dialog
                showCloseButton={true}
                content="content"
                isVisible={this.state.isVisible}
                onClose={this.onClose}
            />
        );
    }
}
```
</details>

### getContent()
Get content of Dialog.

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
    isVisible: true,
    showCloseButton: true
});

document.body.append(myDialog.render());
 
console.log('Content: ', myDialog.getContent()); // return "This is content"
```
**React**
```javascript
import { Dialog } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "Dialog content",
            isVisible: true
        };
    }
    onClose = () => {
        this.setState({
            isVisible: false
        })
    }
    handleClick= () => {
        console.log(this.state.content);
    };
    render() {
        return (
            <div>
                <Dialog
                    showCloseButton={true}
                    content={this.state.content}
                    isVisible={this.state.isVisible}
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
|footer|String, DOM, React Element|	Yes|Footer of Dialog.|

**Returns**

Dialog instance

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var myDialog = new kintoneUIComponent.Dialog();
var elements = 'Footer'
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(myDialog.render());
myDialog.setFooter(elements);
myDialog.show();
```
**React**
```javascript
import { Dialog } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true
        };
    }
    onClose = () => {
        this.setState({
            isVisible: false
        })
    }
    render() {
        return (
            <Dialog
                showCloseButton={true}
                footer="footer"
                isVisible={this.state.isVisible}
                onClose={this.onClose}
            />
        );
    }
}
```
</details>

### getFooter()
Get footer of Dialog.

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
    footer: "This is footer",
    isVisible: true,
    showCloseButton: true
});

document.body.append(myDialog.render());
 
console.log('Footer: ', myDialog.getFooter()); // return "Footer"
```
**React**
```javascript
import { Dialog } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            footer: "Dialog footer",
            isVisible: true
        };
    }
    handleClick= () => {
        console.log(this.state.footer);
    };
    onClose = () => {
        this.setState({
            isVisible: false
        })
    }
    render() {
        return (
            <div>
                <Dialog
                    showCloseButton={true}
                    footer={this.state.footer}
                    isVisible={this.state.isVisible}
                    onClose={this.onClose}
                />
                <button onClick={this.handleClick}>Get Footer</button>
            </div>
        );
    }
}
```
</details>