# Spinner

## Overview
![Spinner](../img/spinner.PNG)

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains parameters of constructor.|
|options.isVisible|Boolean|No|The spinner will be visible. <br> Default value: **false**|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var spinner = new kintoneUIComponent.Spinner({isVisible: true});
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
    };
};

```
</details>

## Methods
### render()
Get DOM element of Spinner component.

**Parameter**

None

**Returns**

DOM element

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var spinner = new kintoneUIComponent.Spinner({isVisible: true});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(spinner.render());
```
**React**
```javascript
import { Spinner } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Plugin extends React.Component {
    render() {
        return (
            <Spinner isVisible={true}/>
        );
    };
};

ReactDOM.render(<Plugin />, document.getElementById('root'));
```
</details>

### show()
Display Spinner component.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var spinner = new kintoneUIComponent.Spinner();
var btn = new kintoneUIComponent.Button({ text: 'Open spinner' });
btn.on('click', function () {
    spinner.show();
});
var body = document.getElementsByTagName("BODY")[0];
body.appendChild(spinner.render());
body.appendChild(btn.render());
```
**React**
```javascript
import { Spinner, Button } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: false };
    };

    handleClick = () => {
        this.setState({ isVisible: true });
    };

    render() {
        return (
            <div>
                <Spinner isVisible={this.state.isVisible} />
                <Button text='Open spinner' onClick={this.handleClick} />
            </div>
        );
    };
};

```
</details>

### hide()
Hide Spinner component.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
var spinner = new kintoneUIComponent.Spinner({ isVisible: true });
var label = new kintoneUIComponent.Label({ text: 'Spinner will hide after 3s' });

setTimeout(() => {
    spinner.hide();
}, 3000);

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(label.render());
body.appendChild(spinner.render());
```
**React**
```javascript
import { Spinner, Label } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isVisible: true };
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isVisible: false });
        }, 3000);
    };

    render() {
        return (
            <div>
                <Label text='Spinner will hide after 3s' />
                <Spinner isVisible={this.state.isVisible} />
            </div>
        );
    };
};

```
</details>