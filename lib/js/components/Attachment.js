var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Control from './Control';
import AttachmentReact from '../components-react/Attachment';
import Message from '../constant/Message';
import withState from './withState';
import React from 'react';
var validEventNames = ['filesAdd', 'fileRemove'];

var Attachment = function (_Control) {
  _inherits(Attachment, _Control);

  function Attachment() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Attachment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Attachment.__proto__ || Object.getPrototypeOf(Attachment)).call.apply(_ref, [this].concat(args))), _this), _this._reactComponentClass = AttachmentReact, _this._handleOnFilesAdd = function (files) {
      if (typeof _this.filesAdd === 'function') {
        _this.filesAdd(files);
      }
      _this._reactObject.setState({ files: files });
    }, _this._handleOnFileRemove = function (files) {
      if (typeof _this.fileRemove === 'function') {
        _this.fileRemove(files);
      }
      _this._reactObject.setState({ files: files });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Attachment, [{
    key: 'setFiles',
    value: function setFiles(files) {
      this._setState({ files: files });
    }
  }, {
    key: 'getFiles',
    value: function getFiles() {
      return this._getState().files;
    }
  }, {
    key: 'setDropZoneText',
    value: function setDropZoneText(dropZoneText) {
      this._setState({ dropZoneText: dropZoneText });
    }
  }, {
    key: 'setBrowseButtonText',
    value: function setBrowseButtonText(browseButtonText) {
      this._setState({ browseButtonText: browseButtonText });
    }
  }, {
    key: 'setFileLimitText',
    value: function setFileLimitText(fileLimitText) {
      this._setState({ fileLimitText: fileLimitText });
    }
  }, {
    key: 'setErrorMessage',
    value: function setErrorMessage(errorMessage) {
      this._setState({ errorMessage: errorMessage });
    }
  }, {
    key: 'showError',
    value: function showError() {
      this._setState({ isErrorVisible: true });
    }
  }, {
    key: 'hideError',
    value: function hideError() {
      this._setState({ isErrorVisible: false });
    }
  }, {
    key: 'on',
    value: function on(eventName, callback) {
      if (!validEventNames.some(function (event) {
        return event === eventName;
      })) {
        throw new Error(Message.control.INVALID_EVENT + ' ' + validEventNames.join(','));
      }
      if (validEventNames.some(function (event) {
        return event === eventName;
      })) {
        this[eventName] = callback;
      }
    }
  }, {
    key: '_getReactElement',
    value: function _getReactElement() {
      var _this2 = this;

      var Component = withState(this._reactComponentClass);
      var additionalProps = {
        onFilesAdd: this._handleOnFilesAdd,
        onFileRemove: this._handleOnFileRemove
      };
      // eslint-disable-next-line react/jsx-filename-extension
      var reactElement = React.createElement(Component, Object.assign({}, this.props, additionalProps, { ref: function ref(el) {
          return _this2._reactObject = el;
        } }));
      return reactElement;
    }
  }]);

  return Attachment;
}(Control);

export default Attachment;