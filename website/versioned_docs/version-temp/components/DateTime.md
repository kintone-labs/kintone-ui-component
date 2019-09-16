---
id: version-0.1.5-datetime
title: DateTime
sidebar_label: DateTime
original_id: datetime
---

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | - | --- | ----- |
|options|Object|No|An object contains params of constructor.|
|options.value|Date|No|	The Default DateTime Value.|
|options.type|Boolean|No|The component type <br> <ul><li>date</li><li>time</li><li>datetime</li></ul>|
|options.dateFormat|String|No|The date format showed on date picker.<br>Supported format:<br>Seperator: "/", "-", " ", ":" <br>Day of week:<br><ul><li>E (Week Day Short): Su, Mo...</li><li>EE (Week Day Medium): Sun, Mon...</li><li>EEE (Week Day): Sunday, Monday...</li></ul><br>Date:<br><ul><li>d (Date Short): 1,2 ...</li><li>dd (Date Full): 01, 02...</li></ul><br>Month:<br><ul><li>MM (Month Number): 01, 02 ...</li><li>MMM (Month Text Short): Jan, Feb...</li><li>MMMM (Month Text Long): January, February...</li></ul><br>Year:<br><ul><li>YYYY (Year): 2019, 2020...</li></ul><br>Default format: MM/dd/YYYY|
|options.isVisible|Boolean|No|The DatePicker will be visible.<br>Default value: 'true'|
|options.isDisabled|Boolean|No|The DateTime field will be disabled. <br>Default value: 'false'|

<details class="tab-container" open>
<Summary>View source</Summary>

**Javascript**
```javascript
var dateTime = new kintoneUIComponent.DateTime({value: date, type: 'datetime', locale: 'en'});
```

**React**
```jsx
import { DateTime } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
class DateTimeComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    render() {
        return (
            <DateTime
                value={this.state.date}
                type='datetime'
                locale='en'
            />
        );
    }
}
kintone.events.on('app.record.index.show', function(event) {
    ReactDOM.render(
        <DateTimeComponent />,
        kintone.app.getHeaderSpaceElement()
    ) 
    return event;
});
```

</details>