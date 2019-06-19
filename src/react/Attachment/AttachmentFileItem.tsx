import React from 'react';

type AttachmentFileItemProps = {
  index: number;
  fileName: string;
  fileSize: number;
  onFileRemove: (index: number) => void;
}

const AttachmentFileItem = ({index, fileName, fileSize, onFileRemove}: AttachmentFileItemProps) => {
  const _removeFile = () => {
    onFileRemove(index);
  };
  const GB = 1073741824;
  const MB = 1048576;
  const KB = 1024;

  const _formatFileSize = (size: number) => {
    if (size >= GB) {
      return Math.round(size / GB) + ' GB';
    } else if (size >= MB) {
      return Math.round(size / MB) + ' MB';
    } else if (size >= KB) {
      return Math.round(size / KB) + ' KB';
    }
    return Math.round(size) + ' bytes';
  };

  return (
    <div className="kuc-attachment_delete kuc-attachment-file-item">
      <div className="kuc-attachment_file_name" title={fileName}>{fileName}</div>
      <div className="kuc-attachment_file_action">
        <button type="button" onClick={_removeFile} />
      </div>
      <div className="kuc-attachment_file_size">{_formatFileSize(fileSize)}</div>
      <div className="kuc-attachment_clearer" />
    </div>
  );
};

export default AttachmentFileItem;
