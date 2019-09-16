---
id: version-0.1.5-notifypopup
title: NotifyPopup
sidebar_label: NotifyPopup
original_id: notifypopup
---

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.text|String|No|Displayed text on notify popup.|
|options.type|String|No|Type of notify popup:<ul><li> 'error' </li><li> 'success'</li><li> 'infor' </li></ul> Default value: 'error'|
|options.isDisabled|Boolean|No|The notify popup will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The notify popup will be visible. <br> Default value: 'true'|

<details class="tab-container" open>
<Summary>View source</Summary>

**Javascript**
```
var notifyPopup = new kintoneUIComponent.NotifyPopup({
    text: 'Submit sucessffully',
    type: 'success'
});
```
**React**
```
import { NotifyPopup } from '@kintone/kintone-ui-component';
import React from 'react';
   
export default class Plugin extends React.Component {
    state = {
        isVisible: true
    }
    render() {
        return (
            <NotifyPopup text='Submit successfully' type='success' isVisible={this.state.isVisible} onClose={()=>(this.setState({isVisible: false}))} />
        );
    }
}

```
</details>