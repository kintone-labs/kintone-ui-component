---
id: version-0.1.5-iconbutton
title: IconButton
sidebar_label: IconButton
original_id: iconbutton
---

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|The object contains params of constructor.|
|options.color|String|No |Color of icon button:<ul><li>  'gray'</li><li>'blue'</li><li>'red'</li><li>'green'</li><li>'transparent'</li></ul>Default value is 'gray'.|
|options.size|String|No|Size of icon button:<ul><li> 'normal'</li><li> 'small'</li></ul> Default value is 'normal'.|
|options.shape|String|No|The shape of of button. The value is one of::<ul><li> 'circle'</li><li> 'normal'</li></ul> Default value is 'circle'.|
|options.type|String|No|The type of of button. The value is one of: <ul><li> 'insert'</li><li> 'remove'</li><li> 'close'</li><li> 'file'</li><li> 'right'</li><li> 'left'</li></ul> Default value is 'insert'.|
|options.isDisabled|Boolean|No|The icon button will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The icon button will be visible. <br> Default value: 'true'|

<details class="tab-container" open>
<Summary>View source</Summary>

**Javascript**
```
var insertBtn = new kintoneUIComponent.IconButton({type: 'insert',color:'blue', size: 'small'});
```

**React**
```
import { IconButton } from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
    render() {
        return (
            <IconButton type='insert' size='small' color='blue' />
        );
    }
}
```
</details>