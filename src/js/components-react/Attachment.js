import React from 'react';
import PropTypes from 'prop-types';
import Message from '../constant/Message';
import AttachmentFileItem from './AttachmentFileItem';

const Attachment = (props) => {
  const _getMessage = (key) => {
    const language = (props.language === 'en' || props.language === 'ja' || props.language === 'zh') ? props.language : 'en';
    return Message.attachment[language].hasOwnProperty(key) ? Message.attachment[language][key] : '';
  };

  const _showError = () => {
    if (!Array.isArray(props.tooLargeFilesName) || props.tooLargeFilesName.length === 0) {
      return null;
    }

    return (
      <div className="kuc-attachment-file-error">
        <span>{_getMessage('EXCEED_LIMIT_1')}{props.tooLargeFilesName.join(', ')}{_getMessage('EXCEED_LIMIT_2')}</span>
      </div>
    );
  };

  const _removeFile = (index) => {
    if (props.onFileRemove) {
      const files = [...props.files];
      files.splice(index, 1);
      const data = {
        files: files,
        tooLargeFilesName: []
      };
      props.onFileRemove(data);
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

      if (file.size <= 1073741824) {
        files.push(file);
      } else {
        tooLargeFilesName.push(file.name);
      }
    }

    if (props.onFilesAdd) {
      const data = {
        files: [...props.files, ...files],
        tooLargeFilesName: tooLargeFilesName
      };
      props.onFilesAdd(data);
    }
  };

  const _onDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  let dropZone;
  let inputElement;
  const _onDragEnter = () => {
    const fileDroppableElement = dropZone.parentElement;
    const attachmentFileElement = fileDroppableElement.parentElement;

    attachmentFileElement.style.height = (attachmentFileElement.offsetHeight - 16 * 2) + 'px';
    attachmentFileElement.className = 'kuc-attachment-file kuc-attachment-drag-drop-active';

    dropZone.style.width = (attachmentFileElement.offsetWidth - 4) + 'px';
    dropZone.style.height = (attachmentFileElement.offsetHeight - 4) + 'px';
    fileDroppableElement.style.display = '';
  };

  const _onDragLeave = () => {
    const fileDroppableElement = dropZone.parentElement;
    const attachmentFileElement = fileDroppableElement.parentElement;

    attachmentFileElement.style.height = 'auto';
    attachmentFileElement.className = 'kuc-attachment-file';
    fileDroppableElement.style.display = 'none';
  };

  if (props.isVisible === false) {
    return null;
  }

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
                dropZone = dropElement;
              }}
            >
              {_getMessage('DROPPABLE_TEXT')}
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
            <span className="kuc-attachment-file-upload-button-text">{_getMessage('UPLOAD_BUTTON_TEXT')}</span>
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
          <p className="kuc-attachment-file-constraints">{_getMessage('FILE_CONSTRAINT')}</p>
        </div>
        {_showError()}
      </div>
    </div>
  );
};

Attachment.propTypes = {
  language: PropTypes.string,
  isVisible: PropTypes.bool,
  files: PropTypes.array,
  tooLargeFilesName: PropTypes.arrayOf(PropTypes.string),
  onFilesAdd: PropTypes.func,
  onFileRemove: PropTypes.func,
};
Attachment.defaultProps = {
  files: [],
  tooLargeFilesName: []
};
export default Attachment;
