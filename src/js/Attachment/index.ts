import Control, {ControlProps} from '../Control';
import AttachmentFileItem from "./AttachmentFileItem";
import '../../css/Attachment.css';
type FileObject = {
    name: string;
    size: number;
}

type AttachmentProps = ControlProps & {
    dropZoneText: string;
    browseButtonText: string;
    fileLimitText: string;
    errorMessage: string;
    isErrorVisible: boolean;
    isVisible: boolean;
    files: FileObject[];
    onFilesAdd: (files: FileObject[]) => void;
    onFileRemove: (files: FileObject[]) => void;
}

class Attachment extends Control {
  protected _props: AttachmentProps = {
    ...this._props,
    ...{
        browseButtonText: 'Browse',
        dropZoneText: 'Drop files here.'
    }
  }
  private _onFileRemove: (params?: any) => void = () => {};
  private _onFileAdd: (params?: any) => void = () => {};
  private listFileEl: HTMLDivElement;
  private attachInputTextEl: HTMLSpanElement;
  private constraintsFileEl: HTMLDivElement;
  private fileErrorEl: HTMLSpanElement;
  private dropZoneElement: HTMLDivElement;
  private dragEnterCounter = 0;

  constructor(params: AttachmentProps) {
    super();
    if (params) {
      this._props = {...this._props, ...params};
    }

    this.element = this.createContainerEL();
    this.rerender(Object.keys(this._props));
  }

  rerender(changedAttr?: string[]) {
    super.rerender();
    if (!changedAttr) return;
    if (changedAttr.indexOf('browseButtonText') !== -1) {
        this.attachInputTextEl.innerText = this._props.browseButtonText;
    }
    if (changedAttr.indexOf('fileLimitText') !== -1) {
        this.constraintsFileEl.innerText = this._props.fileLimitText;
    }

    if (changedAttr.indexOf('dropZoneText') !== -1) {
        this.dropZoneElement.innerText = this._props.dropZoneText
    }

    if (changedAttr.indexOf('files') !== -1 && Array.isArray(this._props.files)) {
        this._props.files.forEach((file, index) => {
            let itemFile = new AttachmentFileItem({
              index:index,
              fileName:file.name,
              fileSize:file.size,
              onFileRemove:(index) => {
                this._removeFile(index)
              }
            })
            this.listFileEl.appendChild(itemFile.render());
        });
    }

    if (changedAttr.indexOf('isErrorVisible') !== -1) {
        this.fileErrorEl.style.display = 'none';
        if (this._props.isErrorVisible === true) {
          this.fileErrorEl.style.display = 'block';
        }
    }

    if (changedAttr.indexOf('errorMessage') !== -1) {
      this.fileErrorEl.innerText = this._props.errorMessage;
    }
  }

  private _addFiles(event: any){
      let addedFiles = event.dataTransfer ? event.dataTransfer.files : event.target.files;
      addedFiles = Object.values(addedFiles);
      this._props.files = [...this._props.files, ...addedFiles];
      
      addedFiles.forEach((file, index) => {
        let itemFile = new AttachmentFileItem({
          index:this._props.files + index,
          fileName:file.name,
          fileSize:file.size,
          onFileRemove:(index) => {
            this._removeFile(index)
          }
        })
        this.listFileEl.appendChild(itemFile.render());
    });
    this._onFileAdd(this._props.files)
  };

  setFiles(files: Array<FileObject>) {
      this._props.files = files
      this.listFileEl.innerHTML = ''
      this.rerender(['files'])
  }

  getFiles() {
      return this._props.files
  }

  setDropZoneText(text: string) {
    this._props.dropZoneText = text
    this.rerender(['dropZoneText'])
  }

  setBrowseButtonText(text: string) {
    this._props.browseButtonText = text
    this.rerender(['browseButtonText'])
  }

  setFileLimitText(text: string) {
    this._props.fileLimitText = text
    this.rerender(['fileLimitText'])
  }

  setErrorMessage(text: string) {
    this._props.errorMessage = text
    this.rerender(['errorMessage'])
  }
  
  showError() {
    this._props.isErrorVisible = true;
    this.rerender(['isErrorVisible'])
  }

  hideError() {
    this._props.isErrorVisible = false;
    this.rerender(['isErrorVisible'])
  }
  
  on(eventName: string, callback: (params?: any) => void) {
      if (eventName === 'filesAdd'){
        this._onFileAdd = callback;
      }
      if (eventName === 'fileRemove') {
        this._onFileRemove = callback;
      }
  }

  private _removeFile = (index) =>{
      this._props.files.splice(index, 1);
      this._onFileRemove(this._props.files)
  }

  private createFileErrorEl() {
    let errorEl = document.createElement('span');
    errorEl.innerHTML = this._props.errorMessage;

    const fileErrorEl = document.createElement('div');
    fileErrorEl.className = 'kuc-attachment-file-error';
    fileErrorEl.style.display = 'none';
    fileErrorEl.appendChild(errorEl);
    return fileErrorEl;
  }

  private createContainerEL() {
    let container = document.createElement('div');
    container.className = 'kuc-attachment-outer';
    container.appendChild(this.createAttachDnDContainerEL());

    this.fileErrorEl = this.createFileErrorEl();
    container.appendChild(this.fileErrorEl);
    return container;
  }

  private _isFileOrDirectoryDrag = (event: DragEvent) => {
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

  private _isFileDrop = function(event: DragEvent) {
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

  private _onDrop = (event: DragEvent) => {
    event.preventDefault();
    this._onDragLeave();
    if (this._isFileDrop(event)) {
      this._addFiles(event);
    }
  };

  private _onDragOver = (event: DragEvent) => {
    event.stopPropagation();
    if (this._isFileOrDirectoryDrag(event)) {
      event.preventDefault();
    }
  };

  private _onDragEnter = (event: DragEvent) => {
    this.dragEnterCounter++;
    if (this.dragEnterCounter === 1 && this._isFileOrDirectoryDrag(event)) {
      event.preventDefault();

      const fileDroppableElement = this.dropZoneElement.parentElement;

      const attachmentFileElement = fileDroppableElement && fileDroppableElement.parentElement;

      if (attachmentFileElement) {
        attachmentFileElement.style.height = (attachmentFileElement.offsetHeight - 16 * 2) + 'px';
        attachmentFileElement.className = 'kuc-attachment-file kuc-attachment-drag-drop-active';
        this.dropZoneElement.style.width = (attachmentFileElement.offsetWidth - 4) + 'px';
        this.dropZoneElement.style.height = (attachmentFileElement.offsetHeight - 4) + 'px';
      }
      if (fileDroppableElement) fileDroppableElement.style.display = '';
    }
  };

  private _onDragLeave = () => {
    this.dragEnterCounter--;
    if (this.dragEnterCounter === 0) {
      const fileDroppableElement = this.dropZoneElement.parentElement;
      const attachmentFileElement = fileDroppableElement && fileDroppableElement.parentElement;
      if (attachmentFileElement) {
        attachmentFileElement.style.height = 'auto';
        attachmentFileElement.className = 'kuc-attachment-file';
      }
      if (fileDroppableElement) fileDroppableElement.style.display = 'none';
    }
  };

  private createAttachDnDContainerEL() {
    let container = document.createElement('div');
    container.className = 'kuc-attachment-file'
    container.ondragover = this._onDragOver
    container.ondragenter = this._onDragEnter
    container.ondragleave = this._onDragLeave

    container.appendChild(this.createAttachDnDEL())
    this.listFileEl = this.createlistFileEL()
    container.appendChild(this.listFileEl)
    container.appendChild(this.renderAttachInputEl())
    this.constraintsFileEl = this.createFileConstraintsEL()
    container.appendChild(this.constraintsFileEl)
    return container;
  }

  private createAttachDnDEL() {
    const droppableFileEl = document.createElement('div');
    droppableFileEl.className = 'kuc-attachment-file-droppable'
    droppableFileEl.style.display = 'none'
    droppableFileEl.ondrop = this._onDrop

    this.dropZoneElement = document.createElement('div');
    this.dropZoneElement.className = 'kuc-attachment-file-droppable-text'

    droppableFileEl.appendChild(this.dropZoneElement);
    return droppableFileEl;
  }

  private createlistFileEL() {
    const listFileEl = document.createElement('div');
    listFileEl.classList.add('kuc-attachment-file-filelist', 'kuc-attachment-file-filelist-list');
    return listFileEl;
  }

  private renderAttachInputEl() {
    let attachInputContainerEl = document.createElement('a');
    attachInputContainerEl.className = 'kuc-attachment-file-upload-button';
    attachInputContainerEl.tabIndex = -1;

    this.attachInputTextEl = document.createElement('span');
    this.attachInputTextEl.className = 'kuc-attachment-file-upload-button-text';
    attachInputContainerEl.appendChild(this.attachInputTextEl)

    const attachInputEl = document.createElement('input');
    attachInputEl.setAttribute("type", "file");
    attachInputEl.setAttribute("multiple", "true");
    attachInputEl.onchange = (e) => {
        this._addFiles(e)
    }

    let wrapInputEl = document.createElement('div');
    wrapInputEl.className = 'kuc-attachment-file-upload-html5';
    wrapInputEl.appendChild(attachInputEl);
    attachInputContainerEl.appendChild(wrapInputEl)

    return attachInputContainerEl;
  }

  private createFileConstraintsEL() {
    const constraintsFileEl = document.createElement('div');
    constraintsFileEl.classList.add('kuc-attachment-file-constraints');
    return constraintsFileEl
  }

}

export default Attachment;