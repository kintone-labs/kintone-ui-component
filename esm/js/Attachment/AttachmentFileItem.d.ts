import Control, { ControlProps } from '../Control';
import '../../css/Attachment.css';
declare type AttachmentFileItemProps = ControlProps & {
    index?: number;
    fileName?: string;
    fileSize?: number;
    onFileRemove?: (index: number) => void;
};
declare class AttachmentFileItem extends Control<AttachmentFileItemProps> {
    protected element: HTMLDivElement;
    private ONE_GB;
    private ONE_MB;
    private ONE_KB;
    constructor(params?: AttachmentFileItemProps);
    _formatFileSize(size: number): string;
    createItemContainerEl(): HTMLDivElement;
    onRemove(): void;
}
export default AttachmentFileItem;
