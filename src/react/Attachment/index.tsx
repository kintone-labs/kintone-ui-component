import React from 'react';
import AttachmentFileItem from './AttachmentFileItem';
import '../../css/font.css';
import '../../css/Attachment.css';

type FileObject = {
  name?: string;
  size?: number;
}

type AttachmentProps = {
  dropZoneText?: string;
  browseButtonText?: string;
  fileLimitText?: string;
  errorMessage?: string;
  isErrorVisible?: boolean;
  isVisible?: boolean;
  files?: FileObject[];
  onFilesAdd?: (files?: FileObject[]) => void;
  onFileRemove?: (files?: FileObject[]) => void;
};


const Attachment = (props: AttachmentProps) => {
  if (props.isVisible === false) {
    return null;
  }

  let dropZoneElement: HTMLDivElement;
  let inputElement: HTMLInputElement;
  let dragEnterCounter = 0;

  const _removeFile = (index: number) => {
    if (props.onFileRemove && props.files) {
      const files = [...props.files];
      files.splice(index, 1);
      props.onFileRemove(files);
    }
  };

  const _addFiles = (event: any) => {
    if (props.onFilesAdd && props.files) {
      let addedFiles = event.dataTransfer ? event.dataTransfer.files : event.target.files;
      addedFiles = Object.keys(addedFiles).map((e) => {
        return addedFiles[e];
      });
      props.onFilesAdd([...props.files, ...addedFiles]);
    }
  };

  const _isFileDrop = function(event: React.DragEvent) {
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

  const _isFileOrDirectoryDrag = (event: React.DragEvent) => {
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

  const _onDrop = (event: React.DragEvent) => {
    event.preventDefault();
    _onDragLeave();
    if (_isFileDrop(event)) {
      _addFiles(event);
    }
  };

  const _onDragOver = (event: React.DragEvent) => {
    event.stopPropagation();
    if (_isFileOrDirectoryDrag(event)) {
      event.preventDefault();
    }
  };

  const _onDragEnter = (event: React.DragEvent) => {
    dragEnterCounter++;
    if (dragEnterCounter === 1 && _isFileOrDirectoryDrag(event)) {
      event.preventDefault();

      const fileDroppableElement = dropZoneElement.parentElement;

      const attachmentFileElement = fileDroppableElement && fileDroppableElement.parentElement;

      if (attachmentFileElement) {
        attachmentFileElement.style.height = (attachmentFileElement.offsetHeight - 16 * 2) + 'px';
        attachmentFileElement.className = 'kuc-attachment-file kuc-attachment-drag-drop-active';
        dropZoneElement.style.width = (attachmentFileElement.offsetWidth - 4) + 'px';
        dropZoneElement.style.height = (attachmentFileElement.offsetHeight - 4) + 'px';
      }
      if (fileDroppableElement) fileDroppableElement.style.display = '';
    }
  };

  const _onDragLeave = () => {
    dragEnterCounter--;
    if (dragEnterCounter === 0) {
      const fileDroppableElement = dropZoneElement.parentElement;
      const attachmentFileElement = fileDroppableElement && fileDroppableElement.parentElement;
      if (attachmentFileElement) {
        attachmentFileElement.style.height = 'auto';
        attachmentFileElement.className = 'kuc-attachment-file';
      }
      if (fileDroppableElement) fileDroppableElement.style.display = 'none';
    }
  };

  return (
    <div className="kuc-attachment-outer">
      <div
        className="kuc-attachment-file"
        role="presentation"
        onDragOver={_onDragOver}
        onDragEnter={_onDragEnter}
        onDragLeave={_onDragLeave}
      >
        <div className="kuc-attachment-file-droppable" style={{display: 'none'}} onDrop={_onDrop} role="presentation">
          <div
            className="kuc-attachment-file-droppable-text"
            ref={(dropElement) => {
              if (dropElement) dropZoneElement = dropElement;
            }}
          >
            {props.dropZoneText || 'Drop files here.'}
          </div>
        </div>
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
        <span className="kuc-attachment-file-upload-button" tabIndex={-1}>
          <span className="kuc-attachment-file-upload-button-text"> {props.browseButtonText || 'Browse'}</span>
          <div className="kuc-attachment-file-upload-html5">
            <input
              type="file"
              multiple
              ref={(element) => {
                if (element) inputElement = element;
              }}
              onClick={() => {
                inputElement.value = '';
              }}
              onChange={_addFiles}
            />
          </div>
        </span>
        <p className="kuc-attachment-file-constraints">{props.fileLimitText}</p>
      </div>
      {props.isErrorVisible === true && (
        <div className="kuc-attachment-file-error">
          <span>{props.errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default Attachment;
