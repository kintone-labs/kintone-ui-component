---
id: version-0.1.5-colorpicker
title: ColorPicker
sidebar_label: ColorPicker
original_id: colorpicker
---

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | - | --- | ----- |
|options|Object|No|An object contains params of constructor.|
|options.color|HEX String|No|The ColorPicker's input value. If setted color is not valid, an error will be displayed.<br>Default value is '#FF0000'.|
|options.isDisabled|Boolean|No|The ColorPicker will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The ColorPicker will be visible. <br> Default value: 'true'|
|options.onChange|Callback|No|Handler for color change event.|

<details class="tab-container" open>
<Summary>View source</Summary>

**Javascript**
```javascript
var colorPicker = new kintoneUIComponent.ColorPicker({color: '#FF0000'});
```

**React**
```jsx
import { ColorPicker } from '@kintone/kintone-ui-component';
import React from 'react';
  
export default class Plugin extends React.Component {
    state = {color: ''}
    render() {
        return (
            <ColorPicker color={this.state.color} />
        );
    }
}
```

</details>