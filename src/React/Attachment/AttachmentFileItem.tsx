import React from 'react';

type AttachmentFileItemProps = {
    index: number,
    fileName: string,
    fileSize: number,
    onFileRemove: (index: number) => void
}

const AttachmentFileItem = ({index, fileName, fileSize, onFileRemove}: AttachmentFileItemProps) => {
    const _removeFile = () => {
        onFileRemove(index);
    };

    const _formatFileSize = (size: number) => {
        if (size >= 1073741824) {
            return Math.round(size / 1073741824) + ' GB';
        } else if (size >= 1048576) {
            return Math.round(size / 1048576) + ' MB';
        } else if (size >= 1024) {
            return Math.round(size / 1024) + ' KB';
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
