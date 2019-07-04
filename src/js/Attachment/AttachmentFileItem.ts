import Control, {ControlProps} from '../Control';
import '../../css/Attachment.css';
type AttachmentFileItemProps = ControlProps & {
    index: number;
    fileName: string;
    fileSize: number;
    onFileRemove: (index: number) => void;
  }

class AttachmentFileItem extends Control{
    protected _props: AttachmentFileItemProps = this._props;
    protected element: HTMLDivElement
    private ONE_GB = 1073741824;
    private ONE_MB = 1048576;
    private ONE_KB = 1024;
  constructor(params: AttachmentFileItemProps) {
    super()
    this._props = {...params};
    if (!this._props.onFileRemove || typeof this._props.onFileRemove !== 'function') {
      this._props.onFileRemove = () => {};
    }
    this.element = this.createItemContainerEl();
  }
  _formatFileSize(size: number) {
    if (size >= this.ONE_GB) {
      return Math.round(size / this.ONE_GB) + ' GB';
    } else if (size >= this.ONE_MB) {
      return Math.round(size / this.ONE_MB) + ' MB';
    } else if (size >= this.ONE_KB) {
      return Math.round(size / this.ONE_KB) + ' KB';
    }
    return Math.round(size) + ' bytes';
  };

  createItemContainerEl() {
    let container = document.createElement('div');
    container.classList.add('kuc-attachment_delete');
    container.classList.add('kuc-attachment-file-item');

    let fileNameEl = document.createElement('div');
    fileNameEl.classList.add('kuc-attachment_file_name');
    fileNameEl.setAttribute('title',this._props.fileName)
    fileNameEl.innerText = this._props.fileName
    container.appendChild(fileNameEl);

    let actionContainerEl = document.createElement('div');
    actionContainerEl.classList.add('kuc-attachment_file_action');

    let actionInputEl = document.createElement('button');
    actionInputEl.setAttribute('type','button')
    actionInputEl.onclick = () =>{
      this.onRemove();
    }
    actionContainerEl.appendChild(actionInputEl);
    container.appendChild(actionContainerEl);

    let fileSizeEl = document.createElement('div');
    fileSizeEl.classList.add('kuc-attachment_file_size');
    fileSizeEl.innerText = this._formatFileSize(this._props.fileSize);
    container.appendChild(fileSizeEl);

    let clearEl = document.createElement('div');
    clearEl.classList.add('kuc-attachment_clearer');
    container.appendChild(actionContainerEl);

    return container;
  }

  onRemove = () => {
    this._props.onFileRemove(this._props.index);
    this.element.remove();
  }
}

export default AttachmentFileItem;