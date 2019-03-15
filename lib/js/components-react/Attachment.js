function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import React from 'react';
import PropTypes from 'prop-types';
import AttachmentFileItem from './AttachmentFileItem';

var Attachment = function Attachment(props) {
  if (props.isVisible === false) {
    return null;
  }

  var dropZoneElement = void 0;
  var inputElement = void 0;

  var _removeFile = function _removeFile(index) {
    if (props.onFileRemove) {
      var files = [].concat(_toConsumableArray(props.files));
      files.splice(index, 1);
      props.onFileRemove(files);
    }
  };

  var _addFiles = function _addFiles(event) {
    event.preventDefault();
    _onDragLeave(event);

    if (props.onFilesAdd) {
      var addedFiles = event.dataTransfer ? event.dataTransfer.files : event.target.files;
      props.onFilesAdd([].concat(_toConsumableArray(props.files), _toConsumableArray(addedFiles)));
    }
  };

  var _onDragOver = function _onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
  };

  var _onDragEnter = function _onDragEnter() {
    var fileDroppableElement = dropZoneElement.parentElement;
    var attachmentFileElement = fileDroppableElement.parentElement;

    attachmentFileElement.style.height = attachmentFileElement.offsetHeight - 16 * 2 + 'px';
    attachmentFileElement.className = 'kuc-attachment-file kuc-attachment-drag-drop-active';

    dropZoneElement.style.width = attachmentFileElement.offsetWidth - 4 + 'px';
    dropZoneElement.style.height = attachmentFileElement.offsetHeight - 4 + 'px';
    fileDroppableElement.style.display = '';
  };

  var _onDragLeave = function _onDragLeave() {
    var fileDroppableElement = dropZoneElement.parentElement;
    var attachmentFileElement = fileDroppableElement.parentElement;

    attachmentFileElement.style.height = 'auto';
    attachmentFileElement.className = 'kuc-attachment-file';
    fileDroppableElement.style.display = 'none';
  };

  return React.createElement(
    'div',
    { className: 'kuc-attachment-outer' },
    React.createElement(
      'div',
      { className: 'kuc-attachment-value' },
      React.createElement(
        'div',
        {
          className: 'kuc-attachment-file',
          onDragOver: _onDragOver,
          onDragEnter: _onDragEnter
        },
        React.createElement(
          'div',
          { className: 'kuc-attachment-file-droppable', style: { display: 'none' } },
          React.createElement(
            'div',
            {
              className: 'kuc-attachment-file-droppable-text',
              onDrop: _addFiles,
              onDragLeave: _onDragLeave,
              ref: function ref(dropElement) {
                dropZoneElement = dropElement;
              }
            },
            props.dropZoneText
          )
        ),
        React.createElement('div', { className: 'kuc-attachment-file-filelist' }),
        React.createElement(
          'div',
          { className: 'kuc-attachment-file-filelist kuc-attachment-file-filelist-list' },
          Array.isArray(props.files) && props.files.map(function (file, index) {
            return React.createElement(AttachmentFileItem, {
              key: index,
              index: index,
              fileName: file.name,
              fileSize: file.size,
              onFileRemove: _removeFile
            });
          })
        ),
        React.createElement(
          'a',
          { className: 'kuc-attachment-file-upload-button', tabIndex: '-1' },
          React.createElement(
            'span',
            { className: 'kuc-attachment-file-upload-button-text' },
            props.browseButtonText
          ),
          React.createElement(
            'div',
            { className: 'kuc-attachment-file-upload-html5' },
            React.createElement('input', {
              type: 'file',
              multiple: true,
              ref: function ref(element) {
                inputElement = element;
              },
              onClick: function onClick() {
                inputElement.value = null;
              },
              onChange: _addFiles
            })
          )
        ),
        React.createElement(
          'p',
          { className: 'kuc-attachment-file-constraints' },
          props.fileLimitText
        )
      ),
      props.isErrorVisible === true && React.createElement(
        'div',
        { className: 'kuc-attachment-file-error' },
        React.createElement(
          'span',
          null,
          props.errorMessage
        )
      )
    )
  );
};

Attachment.propTypes = {
  dropZoneText: PropTypes.string,
  browseButtonText: PropTypes.string,
  fileLimitText: PropTypes.string,
  errorMessage: PropTypes.string,
  isErrorVisible: PropTypes.bool,
  isVisible: PropTypes.bool,
  files: PropTypes.array,
  onFilesAdd: PropTypes.func,
  onFileRemove: PropTypes.func
};
Attachment.defaultProps = {
  files: [],
  dropZoneText: 'Drop files here.',
  browseButtonText: 'Browse'
};
export default Attachment;