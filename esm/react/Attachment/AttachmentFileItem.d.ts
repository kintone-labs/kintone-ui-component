/// <reference types="react" />
declare type AttachmentFileItemProps = {
    index: number;
    fileName?: string;
    fileSize?: number;
    onFileRemove: (index: number) => void;
};
declare const AttachmentFileItem: ({ index, fileName, fileSize, onFileRemove }: AttachmentFileItemProps) => JSX.Element;
export default AttachmentFileItem;
