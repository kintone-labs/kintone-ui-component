import React from 'react';

type AttachmentFileItemProps = {
  index: number;
  fileName?: string;
  fileSize?: number;
  onFileRemove: (index: number) => void;
}

const AttachmentFileItem = ({index, fileName, fileSize, onFileRemove}: AttachmentFileItemProps) => {
  const _removeFile = () => {
    onFileRemove(index);
  };
  const ONE_GB = 1073741824;
  const ONE_MB = 1048576;
  const ONE_KB = 1024;

  const _formatFileSize = (size: number) => {
    if (size >= ONE_GB) {
      return Math.round(size / ONE_GB) + ' GB';
    } else if (size >= ONE_MB) {
      return Math.round(size / ONE_MB) + ' MB';
    } else if (size >= ONE_KB) {
      return Math.round(size / ONE_KB) + ' KB';
    }
    return Math.round(size) + ' bytes';
  };
  return (
    <div className="kuc-attachment_delete kuc-attachment-file-item">
      <div className="kuc-attachment_file_name" title={fileName}>{fileName}</div>
      <div className="kuc-attachment_file_action">
        <button type="button" onClick={_removeFile} />
      </div>
      <div className="kuc-attachment_file_size">{typeof fileSize === 'number' ? _formatFileSize(fileSize) : 'NaN bytes' }</div>
      <div className="kuc-attachment_clearer" />
    </div>
  );
};

export default AttachmentFileItem;
