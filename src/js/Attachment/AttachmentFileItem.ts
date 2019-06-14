import '../../css/Attachment.css';
type AttachmentFileItemProps = {
    index: number;
    fileName: string;
    fileSize: number;
    onFileRemove: (index: number) => void;
  }

class AttachmentFileItem{
    protected _props: AttachmentFileItemProps;
    protected element: HTMLDivElement
  constructor(params: AttachmentFileItemProps) {
    this._props = {...params};
    this.element = this.createItemContainerEl();
  }
  _formatFileSize(size: number) {
    if (size >= 1073741824) {
      return Math.round(size / 1073741824) + ' GB';
    } else if (size >= 1048576) {
      return Math.round(size / 1048576) + ' MB';
    } else if (size >= 1024) {
      return Math.round(size / 1024) + ' KB';
    }
    return Math.round(size) + ' bytes';
  };

  createItemContainerEl() {
    let container = document.createElement('div');
    container.classList.add('kuc-attachment_delete', 'kuc-attachment-file-item');

    let fileNameEl = document.createElement('div');
    fileNameEl.classList.add('kuc-attachment_file_name');
    fileNameEl.setAttribute('title',this._props.fileName)
    fileNameEl.innerText = this._props.fileName
    container.appendChild(fileNameEl);

    let actionContainerEl = document.createElement('div');
    actionContainerEl.classList.add('kuc-attachment_file_action');

    let actionInputEl = document.createElement('button');
    actionInputEl.setAttribute('type','button')
    actionInputEl.onclick = (e) =>{
        this.onRemove(e);
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
  render() {
      this.element = this.createItemContainerEl();
      return this.element;
  }

  onRemove = (event) => {
      this._props.onFileRemove(this._props.index);
      const itemToremove = event.target.parentNode.parentNode;
      itemToremove.parentNode.removeChild(itemToremove);
  }
}

export default AttachmentFileItem;