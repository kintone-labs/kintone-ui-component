import Control from './Control';
import AttachmentReact from '../components-react/Attachment';
import Message from '../constant/Message';
import withState from './withState';
import React from 'react';
const validEventNames = ['filesAdd', 'fileRemove'];
export default class Attachment extends Control {
  _reactComponentClass = AttachmentReact;

  setFiles(files) {
    this._setState({files});
  }

  getFiles() {
    return this._getState().files;
  }

  on(eventName, callback) {
    if (!validEventNames.some(event => event === eventName)) {
      throw new Error(Message.control.INVALID_EVENT + ' ' + validEventNames.join(','));
    }
    if (validEventNames.some(event => event === eventName)) {
      this[eventName] = callback;
    }
  }

  _handleOnFilesAdd = (data) => {
    if (typeof this.filesAdd === 'function') {
      this.filesAdd(data);
    }
    this._reactObject.setState({files: data.files, tooLargeFilesName: data.tooLargeFilesName});
  };

  _handleOnFileRemove = (data) => {
    if (typeof this.fileRemove === 'function') {
      this.fileRemove(data);
    }
    this._reactObject.setState({files: data.files, tooLargeFilesName: data.tooLargeFilesName});
  };

  _getReactElement() {
    const Component = withState(this._reactComponentClass);
    const additionalProps = {
      onFilesAdd: this._handleOnFilesAdd,
      onFileRemove: this._handleOnFileRemove,
    };
    // eslint-disable-next-line react/jsx-filename-extension
    const reactElement = <Component {...this.props} {...additionalProps} />;
    return reactElement;
  }
}
