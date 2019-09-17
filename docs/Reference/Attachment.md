# Attachment

## Overview
![Attachment](../img/attachment.PNG)

|Number|Description|
| --- | --- |
|1|"X" button to remove the related file|
|2|File name<br><ul><li>If the length is too long, it will show like "xxx..."</li></ul>|
|3|File size<br><ul><li>If the length is too long, it will show like "xxx..."</li><li>There are 4 types to show the size.<br>1. size >= 1073741824  :  xxx GB<br>2. 1073741824 > size >= 1048576  :  xxx MB<br>3. 1048576 > size >= 1024  :  xxx KB<br>4. 1024 > size  :  xxx bytes</li></ul>|
|4|Link to show "file select" pop-up box|
|5|Text to show file limit message|
|6|Error message|
|7|Drag drop zone|

## Constructor
**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|options|Object|No|An object contains parameter of the constructor.|
|options.dropZoneText|String|No|Text will show when the file is dragged over the attachment field. (item 7)<br>Default value: 'Drop files here.'|
|options.browseButtonText|String|No|Text of the browse button. (item 4)<br>Default value: 'Browse'|
|options.fileLimitText|String|No|Text of the file limit warn part. (item 5)|
|options.errorMessage|String|No|Error message (item 6)|
|options.isErrorVisible|Boolean|No|Only when it is **true**, "errorMessage" will show.<br>Default value: false|
|options.files|Array&lt;Object&gt;|No|File objects (ref. [https://developer.mozilla.org/en-US/docs/Web/API/File](https://developer.mozilla.org/en-US/docs/Web/API/File))<br>Or objects contain "name" and "size"|
|options.files[].name|String|No|The file name|
|options.files[].size|Integer|No|The file size|
|options.isVisible|Boolean|No|The attachment component will be visible.<br>Default value: true|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const attachment = new kintoneUIComponent.Attachment({files: [{name: 'test_1', size: 12345}]});
```

**React**
```javascript
import {Attachment} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {files: []};
  };

  handleFilesAdd = (files) => {
    this.setState({files});
  };
 
  handleFileRemove = (files) => {
    this.setState({files});
  };
 
  render() {
    return (<Attachment files={this.state.files} onFilesAdd={this.handleFilesAdd} onFileRemove={this.handleFileRemove} />);
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
const attachment = new kintoneUIComponent.Attachment({files: [{name: 'test_1', size: 12345}]});
const body = document.getElementsByTagName('BODY')[0];
body.appendChild(attachment.render());
```

**React**
```javascript
import {Attachment} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {files: []};
  };
 
  handleFilesAdd = (files) => {
    this.setState({files});
  };
 
  handleFileRemove = (files) => {
    this.setState({files});
  };
 
  render() {
    return (<Attachment files={this.state.files} onFilesAdd={this.handleFilesAdd} onFileRemove={this.handleFileRemove} />);
  }
}
```
</details>

### setFiles(files)
Set the files of attachment field.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|files|Array&lt;Object&gt;|Yes|File objects (ref. [https://developer.mozilla.org/en-US/docs/Web/API/File](https://developer.mozilla.org/en-US/docs/Web/API/File))<br>Or objects contain "name" and "size"|
|files[].name|String|No|The file name|
|files[].size|Integer|No|The file size|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const body = document.getElementsByTagName("BODY")[0];
 
const attachment = new kintoneUIComponent.Attachment();
body.appendChild(attachment.render());
 
const button = new kintoneUIComponent.Button({text: 'Set Files'});
body.appendChild(button.render());
button.on('click', () => {
    attachment.setFiles([{name: 'test_1', size: 12345}]);
});
```

**React**
```javascript
import {Attachment} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {files: []};
  };
 
  handleFilesAdd = (files) => {
    this.setState({files});
  };
 
  handleFileRemove = (files) => {
    this.setState({files});
  };
 
  handleClick = () => {
    this.setState({files: [{name: 'test_1', size: 12345}]});
  };
 
  render() {
    return (
      <div>
        <Attachment files={this.state.files} onFilesAdd={this.handleFilesAdd} onFileRemove={this.handleFileRemove} />
        <button onClick={this.handleClick}>Set Files</button>
      </div>
    );
  }
}
```
</details>

### getFiles()
Get all files information on attachment field.

**Parameter**

None

**Returns**

| Name| Type| Description |
| --- | --- | --- |
|files|Array&lt;Object&gt;|List of all file objects in the attachment field|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const body = document.getElementsByTagName("BODY")[0];
const attachment = new kintoneUIComponent.Attachment({files: [{name: 'test_1', size: 12345}]});
body.appendChild(attachment.render());
 
const button = new kintoneUIComponent.Button({text: 'Get Files'});
body.appendChild(button.render());
button.on('click', () => {
    console.log('files:', attachment.getFiles());
});
```

**React**
```javascript
import {Attachment} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {files: []};
  };
 
  handleFilesAdd = (files) => {
    this.setState({files});
  };
 
  handleFileRemove = (files) => {
    this.setState({files});
  };
 
  handleClick = () => {
    console.log('files:', this.state.files);
  };
 
  render() {
    return (
      <div>
        <Attachment files={this.state.files} onFilesAdd={this.handleFilesAdd} onFileRemove={this.handleFileRemove} />
        <button onClick={this.handleClick}>Get Files</button>
      </div>
    );
  }
}
```
</details>

### setDropZoneText(dropZoneText)
Set the text of the drop zone

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|dropZoneText|String|Yes|Text will show when the file is dragged over the attachment field.|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const body = document.getElementsByTagName("BODY")[0];
const attachment = new kintoneUIComponent.Attachment();
body.appendChild(attachment.render());
attachment.setDropZoneText('Drop files here.');
```

**React**
```javascript
import {Attachment} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: [],dropZoneText:"Drop files here." };
  }

  handleFilesAdd = files => {
    this.setState({ files });
  };

  handleFileRemove = files => {
    this.setState({ files });
  };
  setDropZoneText = dropZoneText => {
    this.setState({ dropZoneText });
  };
  render() {
    return (
      <div>
        <button onClick={()=>this.setDropZoneText("new drop file")}>setDropZoneText</button>
        <Attachment
          files={this.state.files}
          dropZoneText={this.state.dropZoneText}
          onFilesAdd={this.handleFilesAdd}
          onFileRemove={this.handleFileRemove}
        />
      </div>
    );
  }
}
```
</details>

### setBrowseButtonText(browseButtonText)
Set the text of the browse button

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|browseButtonText|String|Yes|Text of the browse button|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const body = document.getElementsByTagName("BODY")[0];
const attachment = new kintoneUIComponent.Attachment();
body.appendChild(attachment.render());
attachment.setBrowseButtonText('Browse');
```

**React**
```javascript
import {Attachment} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: [], browseButtonText: "Browse" };
  }

  handleFilesAdd = files => {
    this.setState({ files });
  };

  handleFileRemove = files => {
    this.setState({ files });
  };
  browseButtonText = browseButtonText => {
    this.setState({ browseButtonText });
  };
  render() {
    return (
      <div>
        <Attachment
          files={this.state.files}
          browseButtonText={this.state.browseButtonText}
          onFilesAdd={this.handleFilesAdd}
          onFileRemove={this.handleFileRemove}
        />
        <button onClick={()=>this.browseButtonText("new browse")}>Set Browse Button Text</button>
      </div>
    );
  }
}
```
</details>

### setFileLimitText(fileLimitText)
Set the text of the file limit warn part.

**Parameter**

| Name| Type| Required| Description |
| --- | --- | --- | --- |
|fileLimitText|String|Yes|Text of the file limit warn part|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const body = document.getElementsByTagName("BODY")[0];
const attachment = new kintoneUIComponent.Attachment();
body.appendChild(attachment.render());
attachment.setFileLimitText('Maximum: 1 GB');
```

**React**
```javascript
import {Attachment} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: [], fileLimitText: "Maximum: 1 GB" };
  }

  handleFilesAdd = files => {
    this.setState({ files });
  };

  handleFileRemove = files => {
    this.setState({ files });
  };
  setFileLimitText = fileLimitText => {
    this.setState({ fileLimitText });
  };
  render() {
    return (
      <div>
        <Attachment
          files={this.state.files}
          fileLimitText={this.state.fileLimitText}
          onFilesAdd={this.handleFilesAdd}
          onFileRemove={this.handleFileRemove}
        />
        <button onClick={()=>this.setFileLimitText("new file limit text")}>Set File Limit Text</button>
      </div>
    );
  }
}
```
</details>

### setErrorMessage(errorMessage)
Set the error message.

**Parameter**

|Name|Type|Required|Description|
| --- | --- | --- |---|
|errorMessage|String|Yes|Error message|

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const body = document.getElementsByTagName("BODY")[0];
const attachment = new kintoneUIComponent.Attachment();
body.appendChild(attachment.render());
attachment.setErrorMessage('Error message');
```

**React**
```javascript
import {Attachment} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
   constructor(props) {
    super(props);
    this.state = { files: [], errorMessage: "error message" };
  }

  handleFilesAdd = files => {
    this.setState({ files });
  };

  handleFileRemove = files => {
    this.setState({ files });
  };
  setErrorMessage = errorMessage => {
    this.setState({ errorMessage });
  };
  render() {
    return (
      <div>
        <Attachment
          files={this.state.files}
          errorMessage={this.state.errorMessage}
          onFilesAdd={this.handleFilesAdd}
          onFileRemove={this.handleFileRemove}
        />
        <button onClick={()=>this.setErrorMessage("new error message")}>Set Error Message</button>
      </div>
    );
  }
}
```
</details>

### showError()
Show the error message

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const body = document.getElementsByTagName("BODY")[0];
 
const attachment = new kintoneUIComponent.Attachment({errorMessage: 'Error message'});
body.appendChild(attachment.render());
 
const showButton = new kintoneUIComponent.Button({text: 'Show Error'});
body.appendChild(showButton.render());
showButton.on('click', () => {
    attachment.showError();
});
```

**React**
```javascript
import {Attachment} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: [], errorMessage: "error message",isErrorVisible:false };
  }

  handleFilesAdd = files => {
    this.setState({ files });
  };

  handleFileRemove = files => {
    this.setState({ files });
  };
  showError = () => {
    this.setState({ isErrorVisible: true });
  };
  render() {
    return (
      <div>
        <Attachment
          files={this.state.files}
          errorMessage={this.state.errorMessage}
          isErrorVisible={this.state.isErrorVisible}
          onFilesAdd={this.handleFilesAdd}
          onFileRemove={this.handleFileRemove}
        />
        <button onClick={()=>this.showError()}>Show error</button>
      </div>
    );
  }
}
```
</details>

### hideError()
Hide the error message

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const body = document.getElementsByTagName("BODY")[0];
 
const attachment = new kintoneUIComponent.Attachment({errorMessage: 'Error message'});
body.appendChild(attachment.render());
 
const showButton = new kintoneUIComponent.Button({text: 'Show Error'});
body.appendChild(showButton.render());
showButton.on('click', () => {
    attachment.showError();
});
 
const hideButton = new kintoneUIComponent.Button({text: 'Hide Error'});
body.appendChild(hideButton.render());
hideButton.on('click', () => {
    attachment.hideError();
});
```

**React**
```javascript
import {Attachment} from '@kintone/kintone-ui-component';
import React from 'react';
export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: [], errorMessage: "error message",isErrorVisible:true };
  }

  handleFilesAdd = files => {
    this.setState({ files });
  };

  handleFileRemove = files => {
    this.setState({ files });
  };
  hideError = () => {
    this.setState({ isErrorVisible: false });
  };
  render() {
    return (
      <div>
        <Attachment
          files={this.state.files}
          errorMessage={this.state.errorMessage}
          isErrorVisible={this.state.isErrorVisible}
          onFilesAdd={this.handleFilesAdd}
          onFileRemove={this.handleFileRemove}
        />
        <button onClick={()=>this.hideError()}>Hide error</button>
      </div>
    );
  }
}
```
</details>

### on(eventName, callBack)
Register callback for change event

**Parameter**

|Name|Type|Required|Description|
| --- | --- | --- | --- |
|eventName|String|Yes|Name of event: <ul><li>'filesAdd'</li><li>'fileRemove'</li></ul>|
|callback|Function |Yes|callback|

**Returns**

Callback data

|Event|Name|Type|Description|
| --- | --- | --- | --- |
|filesAdd|files|Array&lt;Object&gt;|List of all file objects that are displayed in the attachment field after files are added.|
|fileRemove|files|Array&lt;Object&gt;|List of all file objects that are displayed in the attachment field after a file is removed.|

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const body = document.getElementsByTagName("BODY")[0];
 
const attachment = new kintoneUIComponent.Attachment();
body.appendChild(attachment.render());
 
attachment.on('filesAdd', (files) => {
    console.log('files:', files);
});
 
attachment.on('fileRemove', (files) => {
    console.log('files:', files);
});
```

**React**
```javascript
import {Attachment} from '@kintone/kintone-ui-component';
import React from 'react';
 
export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {files: []};
  };
 
  handleFilesAdd = (files) => {
    this.setState({files});
    console.log('files:', files);
  };
 
  handleFileRemove = (files) => {
    this.setState({files});
    console.log('files:', files);
  };
 
  render() {
    return (
      <Attachment
        files={this.state.files}
        onFilesAdd={this.handleFilesAdd}
        onFileRemove={this.handleFileRemove}
      />
    );
  }
}
```
</details>

### show()
Display the attachment component.

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const attachment = new kintoneUIComponent.Attachment({files: [{name: 'test_1', size: 12345}]});
const body = document.getElementsByTagName('BODY')[0];
body.appendChild(attachment.render());
attachment.show();
```

**React**
```javascript
import {Attachment} from '@kintone/kintone-ui-component';
import React from 'react';
export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: [], errorMessage: "error message",isVisible:false };
  }

  handleFilesAdd = files => {
    this.setState({ files });
  };

  handleFileRemove = files => {
    this.setState({ files });
  };
  show = () => {
    this.setState({ isVisible: true });
  };
  render() {
    return (
      <div>
        <Attachment
          files={this.state.files}
          isVisible={this.state.isVisible}
          onFilesAdd={this.handleFilesAdd}
          onFileRemove={this.handleFileRemove}
        />
        <button onClick={()=>this.show()}>Show</button>
      </div>
    );
  }
}
```
</details>

### hide()
Hide the the attachment component..

**Parameter**

None

**Returns**

None

<details class="tab-container" open>
<Summary>Sample</Summary>

**Javascript**
```javascript
const attachment = new kintoneUIComponent.Attachment({files: [{name: 'test_1', size: 12345}]});
const body = document.getElementsByTagName('BODY')[0];
body.appendChild(attachment.render());
attachment.hide();
```

**React**
```javascript
import {Attachment} from '@kintone/kintone-ui-component';
import React from 'react';
export default class Plugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { files: [], errorMessage: "error message",isVisible:true };
  }

  handleFilesAdd = files => {
    this.setState({ files });
  };

  handleFileRemove = files => {
    this.setState({ files });
  };
  show = () => {
    this.setState({ isVisible: false });
  };
  render() {
    return (
      <div>
        <Attachment
          files={this.state.files}
          isVisible={this.state.isVisible}
          onFilesAdd={this.handleFilesAdd}
          onFileRemove={this.handleFileRemove}
        />
        <button onClick={()=>this.hide()}>Hide</button>
      </div>
    );
  }
}
```
</details>