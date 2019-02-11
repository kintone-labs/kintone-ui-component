import React from 'react';
import PropTypes from 'prop-types';

const AttachmentFileItem = (props) => {
  const _removeFile = () => {
    props.onFileRemove(props.index);
  };

  const _formatFileSize = (size) => {
    if (size >= 1048576) {
      return Math.round(size / 1048576) + 'MB';
    } else if (size >= 1024) {
      return Math.round(size / 1024) + 'KB';
    }
    return Math.round(size) + 'bytes';
  };

  return (
    <div className="kuc-attachment_delete kuc-attachment-file-item">
      <div className="kuc-attachment_file_name" title={props.fileName}>{props.fileName}</div>
      <div className="kuc-attachment_file_action">
        <button type="button" onClick={_removeFile} />
      </div>
      <div className="kuc-attachment_file_size">{_formatFileSize(props.fileSize)}</div>
      <div className="kuc-attachment_clearer" />
    </div>
  );
};
AttachmentFileItem.propTypes = {
  index: PropTypes.string,
  fileName: PropTypes.string,
  fileSize: PropTypes.string,
  onFileRemove: PropTypes.func,
};
export default AttachmentFileItem;
