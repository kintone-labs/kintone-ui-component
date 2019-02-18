import React from 'react';
import PropTypes from 'prop-types';
import AttachmentFileItem from './AttachmentFileItem';
import Message from '../constant/Message';

const Attachment = (props) => {
  if (props.isVisible === false) {
    return null;
  }

  let dropZoneElement;
  let inputElement;

  if (isNaN(props.maxFileSize) && !isFinite(props.maxFileSize) || props.maxFileSize === '') {
    throw new Error(Message.common.INVALID_ARGUMENT);
  }

  const _removeFile = (index) => {
    if (props.onFileRemove) {
      const files = [...props.files];
      files.splice(index, 1);
      props.onFileRemove(files);
    }
  };

  const _addFiles = (event) => {
    event.preventDefault();
    _onDragLeave(event);

    const addedFiles = event.dataTransfer ? event.dataTransfer.files : event.target.files;

    const tooLargeFilesName = [];
    const files = [];
    for (let i = 0; i < addedFiles.length; i++) {
      const file = addedFiles[i];

      if (file.size <= props.maxFileSize) {
        files.push(file);
      } else {
        tooLargeFilesName.push(file.name);
      }
    }

    if (props.onFilesAdd) {
      props.onFilesAdd([...props.files, ...files], tooLargeFilesName);
    }
  };

  const _onDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const _onDragEnter = () => {
    const fileDroppableElement = dropZoneElement.parentElement;
    const attachmentFileElement = fileDroppableElement.parentElement;

    attachmentFileElement.style.height = (attachmentFileElement.offsetHeight - 16 * 2) + 'px';
    attachmentFileElement.className = 'kuc-attachment-file kuc-attachment-drag-drop-active';

    dropZoneElement.style.width = (attachmentFileElement.offsetWidth - 4) + 'px';
    dropZoneElement.style.height = (attachmentFileElement.offsetHeight - 4) + 'px';
    fileDroppableElement.style.display = '';
  };

  const _onDragLeave = () => {
    const fileDroppableElement = dropZoneElement.parentElement;
    const attachmentFileElement = fileDroppableElement.parentElement;

    attachmentFileElement.style.height = 'auto';
    attachmentFileElement.className = 'kuc-attachment-file';
    fileDroppableElement.style.display = 'none';
  };

  return (
    <div className="kuc-attachment-outer">
      <div className="kuc-attachment-value">
        <div
          className="kuc-attachment-file"
          onDragOver={_onDragOver}
          onDragEnter={_onDragEnter}
        >
          <div className="kuc-attachment-file-droppable" style={{display: 'none'}}>
            <div
              className="kuc-attachment-file-droppable-text"
              onDrop={_addFiles}
              onDragLeave={_onDragLeave}
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
  maxFileSize: PropTypes.number,
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
  fileLimitText: '(Maximum: 1 GB)',
  maxFileSize: 1073741824,
};
export default Attachment;
