# ColorPicker

## Overview
![ColorPicker](../img/colorPicker.PNG)

|Number|	Description|
| --- | --- |
|1|HEX input|	
|2|ColorPicker popup window|
|3|Saturation|	
|4|Hue|
|5|RGB input|
|6|HSV input|
|7|OK button|
|8|Cancel button|

## Constructor

**Parameter**

| Name| Type| Required| Description |
| --- | - | --- | ----- |
|options|Object|No|An object contains params of constructor.|
|options.color|HEX String|No|The ColorPicker's input value. If setted color is not valid ,it's value will be changed to #000000.<br>Default value is '#ff0000'.|
|options.isDisabled|Boolean|No|The ColorPicker will be disabled. <br> Default value: 'false'|
|options.isVisible|Boolean|No|The ColorPicker will be visible.|
|options.onChange|Callback|No|Handler for color change event.|