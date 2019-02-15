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

  setDropZoneText(dropZoneText) {
    this._setState({dropZoneText});
  }

  setBrowseButtonText(browseButtonText) {
    this._setState({browseButtonText});
  }

  setFileLimitText(fileLimitText) {
    this._setState({fileLimitText});
  }

  setMaxFileSize(maxFileSize) {
    if (isNaN(maxFileSize) && !isFinite(maxFileSize) || maxFileSize === '') {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }

    this._setState({maxFileSize});
  }

  setErrorMessage(errorMessage) {
    this._setState({errorMessage});
  }

  showError() {
    this._setState({isErrorVisible: true});
  }

  hideError() {
    this._setState({isErrorVisible: false});
  }

  on(eventName, callback) {
    if (!validEventNames.some(event => event === eventName)) {
      throw new Error(Message.control.INVALID_EVENT + ' ' + validEventNames.join(','));
    }
    if (validEventNames.some(event => event === eventName)) {
      this[eventName] = callback;
    }
  }

  _handleOnFilesAdd = (files, tooLargeFilesName) => {
    if (typeof this.filesAdd === 'function') {
      this.filesAdd(files, tooLargeFilesName);
    }
    this._reactObject.setState({files});
  };

  _handleOnFileRemove = (files) => {
    if (typeof this.fileRemove === 'function') {
      this.fileRemove(files);
    }
    this._reactObject.setState({files});
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
