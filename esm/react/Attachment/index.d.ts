/// <reference types="react" />
import '../../css/font.css';
import '../../css/Attachment.css';
declare type FileObject = {
    name?: string;
    size?: number;
};
declare type AttachmentProps = {
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
declare const Attachment: (props: AttachmentProps) => JSX.Element | null;
export default Attachment;
