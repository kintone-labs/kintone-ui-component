import React from 'react';
import PropTypes from 'prop-types';
import AttachmentFileItem from './AttachmentFileItem';

import '../../../css/Attachment.css';

const Attachment = (props) => {
  if (props.isVisible === false) {
    return null;
  }

  let dropZoneElement;
  let inputElement;
  let dragEnterCounter = 0;

  const _removeFile = (index) => {
    if (props.onFileRemove) {
      const files = [...props.files];
      files.splice(index, 1);
      props.onFileRemove(files);
    }
  };

  const _addFiles = (event) => {
    if (props.onFilesAdd) {
      const addedFiles = event.dataTransfer ? event.dataTransfer.files : event.target.files;
      props.onFilesAdd([...props.files, ...addedFiles]);
    }
  };

  const _isFileDrop = function(event) {
    // handle IE
    if (event.dataTransfer.files.length === 0) {
      return false;
    }

    // handle Chrome, Firefox, Edge, Safari
    if (event.dataTransfer.items) {
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        if (typeof (event.dataTransfer.items[i].webkitGetAsEntry) === 'function'
          && event.dataTransfer.items[i].webkitGetAsEntry().isDirectory) {
          return false;
        }
      }
    }

    return true;
  };

  const _isFileOrDirectoryDrag = (event) => {
    if (event.dataTransfer.items !== undefined) {
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        if (event.dataTransfer.items[i].kind.toLowerCase() === 'file') {
          return true;
        }
      }
    }

    if (event.dataTransfer.types !== undefined) {
      for (let i = 0; i < event.dataTransfer.types.length; i++) {
        if (event.dataTransfer.types[i].toLowerCase() === 'files') {
          return true;
        }
      }
    }

    return false;
  };

  const _onDrop = (event) => {
    event.preventDefault();
    _onDragLeave();
    if (_isFileDrop(event)) {
      _addFiles(event);
    }
  };

  const _onDragOver = (event) => {
    event.stopPropagation();
    if (_isFileOrDirectoryDrag(event)) {
      event.preventDefault();
    }
  };

  const _onDragEnter = (event) => {
    dragEnterCounter++;
    if (dragEnterCounter === 1 && _isFileOrDirectoryDrag(event)) {
      event.preventDefault();

      const fileDroppableElement = dropZoneElement.parentElement;
      const attachmentFileElement = fileDroppableElement.parentElement;

      attachmentFileElement.style.height = (attachmentFileElement.offsetHeight - 16 * 2) + 'px';
      attachmentFileElement.className = 'kuc-attachment-file kuc-attachment-drag-drop-active';

      dropZoneElement.style.width = (attachmentFileElement.offsetWidth - 4) + 'px';
      dropZoneElement.style.height = (attachmentFileElement.offsetHeight - 4) + 'px';
      fileDroppableElement.style.display = '';
    }
  };

  const _onDragLeave = () => {
    dragEnterCounter--;
    if (dragEnterCounter === 0) {
      const fileDroppableElement = dropZoneElement.parentElement;
      const attachmentFileElement = fileDroppableElement.parentElement;

      attachmentFileElement.style.height = 'auto';
      attachmentFileElement.className = 'kuc-attachment-file';
      fileDroppableElement.style.display = 'none';
    }
  };

  return (
    <div className="kuc-attachment-outer">
      <div className="kuc-attachment-value">
        <div
          className="kuc-attachment-file"
          onDragOver={_onDragOver}
          onDragEnter={_onDragEnter}
          onDragLeave={_onDragLeave}
        >
          <div className="kuc-attachment-file-droppable" style={{display: 'none'}} onDrop={_onDrop}>
            <div
              className="kuc-attachment-file-droppable-text"
              ref={(dropElement) => {
                dropZoneElement = dropElement;
              }}
            >
              {props.dropZoneText}
            </div>
          </div>
          <div className="kuc-attachment-file-filelist" />
          <div className="kuc-attachment-file-filelist kuc-attachment-file-filelist-list">
            {Array.isArray(props.files) && props.files.map((file, index) => (
              <AttachmentFileItem
                key={index}
                index={index}
                fileName={file.name}
                fileSize={file.size}
                onFileRemove={_removeFile}
              />
            ))}
          </div>
          <a className="kuc-attachment-file-upload-button" tabIndex="-1">
            <span className="kuc-attachment-file-upload-button-text">{props.browseButtonText}</span>
            <div className="kuc-attachment-file-upload-html5">
              <input
                type="file"
                multiple
                ref={(element) => {
                  inputElement = element;
                }}
                onClick={() => {
                  inputElement.value = null;
                }}
                onChange={_addFiles}
              />
            </div>
          </a>
          <p className="kuc-attachment-file-constraints">{props.fileLimitText}</p>
        </div>
        {props.isErrorVisible === true && (
          <div className="kuc-attachment-file-error">
            <span>{props.errorMessage}</span>
          </div>
        )}
      </div>
    </div>
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
  onFileRemove: PropTypes.func,
};
Attachment.defaultProps = {
  files: [],
  dropZoneText: 'Drop files here.',
  browseButtonText: 'Browse',
};
export default Attachment;
