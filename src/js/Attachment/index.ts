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
  private attachInputEl: HTMLInputElement;
  private attachInputTextEl: HTMLSpanElement;
  private droppableFileEl: HTMLDivElement;
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
  }
  
  showError() {
    this.element.appendChild(this.createFileErrorEl());
  }

  hideError() {
    this.fileErrorEl.parentNode.removeChild(this.fileErrorEl);
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

    this.fileErrorEl = document.createElement('div');
    this.fileErrorEl.className = 'kuc-attachment-file-error';
    this.fileErrorEl.appendChild(errorEl);
    return this.fileErrorEl;
  }

  private createContainerEL() {
    let container = document.createElement('div');
    container.className = 'kuc-attachment-outer';
    container.appendChild(this.createAttachDnDContainerEL());

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
      console.log(1)
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
    container.appendChild(this.createlistFileEL())
    container.appendChild(this.renderAttachInputEl())
    container.appendChild(this.createFileConstraintsEL())
    return container;
  }

  private createAttachDnDEL() {
    this.droppableFileEl = document.createElement('div');
    this.droppableFileEl.className = 'kuc-attachment-file-droppable'
    this.droppableFileEl.style.display = 'none'
    this.droppableFileEl.ondrop = this._onDrop

    let droppableTextEl = document.createElement('div');
    droppableTextEl.className = 'kuc-attachment-file-droppable-text'
    this.dropZoneElement = droppableTextEl

    this.droppableFileEl.appendChild(droppableTextEl);
    return this.droppableFileEl;
  }

  private createlistFileEL() {
    this.listFileEl = document.createElement('div');
    this.listFileEl.classList.add('kuc-attachment-file-filelist', 'kuc-attachment-file-filelist-list');
    return this.listFileEl;
  }

  private renderAttachInputEl() {
    let attachInputContainerEl = document.createElement('a');
    attachInputContainerEl.className = 'kuc-attachment-file-upload-button';
    attachInputContainerEl.tabIndex = -1;

    this.attachInputTextEl = document.createElement('span');
    this.attachInputTextEl.className = 'kuc-attachment-file-upload-button-text';
    attachInputContainerEl.appendChild(this.attachInputTextEl)

    this.attachInputEl = document.createElement('input');
    this.attachInputEl.setAttribute("type", "file");
    this.attachInputEl.setAttribute("multiple", "true");
    this.attachInputEl.onchange = (e) => {
        this._addFiles(e)
    }

    let wrapInputEl = document.createElement('div');
    wrapInputEl.className = 'kuc-attachment-file-upload-html5';
    wrapInputEl.appendChild(this.attachInputEl);
    attachInputContainerEl.appendChild(wrapInputEl)

    return attachInputContainerEl;
  }

  private createFileConstraintsEL() {
    this.constraintsFileEl = document.createElement('div');
    this.constraintsFileEl.classList.add('kuc-attachment-file-constraints');
    return this.constraintsFileEl;
  }

}

export default Attachment;
