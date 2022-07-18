import { html, PropertyValueMap, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";
import { KucBase, dispatchCustomEvent, generateGUID } from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import { validateProps } from "../base/validator";
import { en, ja, zh } from "../base/locale";

type FileItem = File | { name: string; size: string; [key: string]: any };

type AttachmentProps = {
  className?: string;
  disabled?: boolean;
  error?: string;
  files?: FileItem[];
  id?: string;
  label?: string;
  language?: "ja" | "en" | "zh" | "auto";
  requiredIcon?: boolean;
  visible?: boolean;
};

export class Attachment extends KucBase {
  @property({ type: String, reflect: true, attribute: "class" }) className = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) error = "";
  @property({
    type: Array<FileItem>,
  })
  files = [];
  @property({ type: String, reflect: true, attribute: "id" })
  id = "";
  @property({ type: String }) label = "";
  @property({ type: String }) language = "auto";
  @property({ type: Boolean }) requiredIcon = false;
  @property({
    type: Boolean,
    attribute: "hidden",
    reflect: true,
    converter: visiblePropConverter,
  })
  visible = true;
  private _GUID: string;
  @state()
  private _isDraging = false;
  private _ONE_GB = 1073741824;
  private _ONE_MB = 1048576;
  private _ONE_KB = 1024;
  private _dragEnterCounter = 0;
  private _locale = this._getLocale();

  @query(".kuc-attachment__group__files")
  private _groupFilesEl!: HTMLDivElement;
  @query(".kuc-attachment__group__files__droppable-text")
  private _dragEl!: HTMLDivElement;

  constructor(props?: AttachmentProps) {
    super();
    this._GUID = generateGUID();
    const validProps = validateProps(props);
    Object.assign(this, validProps);
  }

  protected willUpdate(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    console.log(_changedProperties);

    super.willUpdate(_changedProperties);
  }
  update(changedProperties: PropertyValues) {
    console.log(changedProperties);
    console.log(this.files);
    if (changedProperties.has("language")) {
      this._locale = this._getLocale();
    }
    super.update(changedProperties);
  }
  protected updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    console.log(_changedProperties);
  }
  render() {
    return html`
      ${this._getStyleTagTemplate()}
      <div class="kuc-attachment__group" 
        aria-describedby="${this._GUID}-error">
        <div
          class="kuc-attachment__group__label"
          for="${this._GUID}-label"
          ?hidden="${!this.label}"
        >
          <kuc-base-label
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-label>
        </div>
        <div
          class="kuc-attachment__group__files"
          @dragenter="${this._onDragEnter}"
          @dragover="${this._onDragOver}"
          @dragleave="${this._onDragLeave}"
        >
          <div
            class="kuc-attachment__group__files__droppable"
            @drop="${this._onDragDrop}"
            ?hidden="${!this._isDraging}"
          >
          <div class="kuc-attachment__group__files__droppable-text">${
            this._locale.ATTACHMENT_DRAG_DROP_ZONE
          }</div>
          </div>
          <div
            class="kuc-attachment__group__files__display-field"
            ?hidden="${this._isDraging}"
          >
          ${this.files.map((item, number) =>
            this._getAttachmentItemTemplete(item, number)
          )}
            <a tabindex="1" class="kuc-attachment__group__files__upload-button"
            role="button" aria-controls="filename">
              <span class="kuc-attachment__group__files__upload-button-text">${
                this._locale.ATTACHMENT_BROWSER
              }</span>
              <div class="kuc-attachment__group__files__input-container">
                <input type="file" multiple="true" @change="${
                  this._handleSelectFiles
                }"></input>
              </div>
            </a>
          </div>
        </div>
        <kuc-base-error
          ?hidden="${!this.error}"
          .text="${this.error}"
          .guid="${this._GUID}"
        ></kuc-base-error>
      </div>
    `;
  }

  private _getAttachmentItemTemplete(item: FileItem, index: number) {
    return html`
      <div class="kuc-attachment__group__file-item">
        <div
          title="${item.name || ""}"
          class="kuc-attachment__group__file-name"
        >
          ${item.name || ""}
        </div>
        <div class="kuc-attachment__group__remove-button">
          <button
            type="button"
            data-file-index="${index}"
            @click="${this._handleClickFileRemove}"
          ></button>
        </div>
        <div class="kuc-attachment__group__file-size">
          ${this._getFileSize(item.size)}
        </div>
      </div>
    `;
  }

  private _getLanguage() {
    const langs = ["en", "ja", "zh"];
    if (langs.indexOf(this.language) !== -1) return this.language;

    if (langs.indexOf(document.documentElement.lang) !== -1)
      return document.documentElement.lang;

    return "en";
  }

  private _getLocale() {
    const language = this._getLanguage();
    switch (language) {
      case "en":
        return en;
      case "zh":
        return zh;
      case "ja":
        return ja;
      default:
        return en;
    }
  }

  private _handleClickFileRemove(event: any) {
    const index = event.target.getAttribute("data-file-index");
    if (index !== -1 && this.files) {
      const tempFiles = [...this.files];
      const changedFiles = tempFiles.splice(index, 1);
      const detail = {
        oldFiles: this._deepClone(this.files),
        files: this._deepClone(tempFiles),
        action: "remove",
        changedFiles: this._deepClone(changedFiles),
      };
      dispatchCustomEvent(this, "change", detail);
      this.files = tempFiles;
    }
  }

  private _onDragEnter(event: DragEvent) {
    this._dragEnterCounter++;
    if (this._dragEnterCounter === 1 && this._isFileOrDirectoryDrag(event)) {
      event.preventDefault();

      this._groupFilesEl.style.height =
        this._groupFilesEl.offsetHeight - 16 * 2 + "px";
      this._dragEl.style.width = this._groupFilesEl.offsetWidth - 4 + "px";
      this._dragEl.style.height = this._groupFilesEl.offsetHeight - 6 + "px";
      this._isDraging = true;
    }
  }

  private _onDragOver(event: DragEvent) {
    event.stopPropagation();
    if (this._isFileOrDirectoryDrag(event)) {
      event.preventDefault();
    }
  }

  private _onDragDrop(event: DragEvent) {
    event.preventDefault();
    this._onDragLeave();
    if (this._isFileDrop(event)) {
      this._addFiles(event);
    }
  }

  private _isFileDrop(event: DragEvent) {
    // handle IE
    if (event.dataTransfer && event.dataTransfer.files.length === 0) {
      return false;
    }

    // handle Chrome, Firefox, Edge, Safari
    if (event.dataTransfer && event.dataTransfer.items) {
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        if (
          typeof event.dataTransfer.items[i].webkitGetAsEntry === "function" &&
          event.dataTransfer.items[i].webkitGetAsEntry()!.isDirectory
        ) {
          return false;
        }
      }
    }
    return true;
  }

  private _onDragLeave() {
    this._dragEnterCounter--;

    if (this._dragEnterCounter === 0) {
      this._groupFilesEl.style.height = "auto";
      this._isDraging = false;
    }
  }

  private _handleSelectFiles(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this._addFiles(event);
  }

  private _addFiles(event: any) {
    let addedFiles = event.dataTransfer
      ? event.dataTransfer.files
      : event.target.files;
    addedFiles = Object.keys(addedFiles).map((e) => {
      return addedFiles[e];
    });
    if (this.files) {
      const tempFileList = this.files.concat(addedFiles);
      const detail = {
        oldFiles: this._deepClone(this.files),
        files: this._deepClone(tempFileList),
        action: "add",
        changedFiles: addedFiles,
      };
      dispatchCustomEvent(this, "change", detail);
      this.files = tempFileList;
    }
  }

  private _getFileSize(size: string | number) {
    if (typeof size === "number") {
      return this._formatFileSize(size);
    }
    return this._isNumber(size)
      ? this._formatFileSize(parseInt(size, 10))
      : "Nan size";
  }

  private _isNumber(data: string) {
    const reg = /^[1-9]\d*$/;
    return reg.test(data);
  }

  private _deepClone(data: any) {
    return JSON.parse(JSON.stringify(data)) as FileItem[];
  }

  private _formatFileSize(size: number) {
    if (size >= this._ONE_GB) {
      return Math.round(size / this._ONE_GB) + " GB";
    } else if (size >= this._ONE_MB) {
      return Math.round(size / this._ONE_MB) + " MB";
    } else if (size >= this._ONE_KB) {
      return Math.round(size / this._ONE_KB) + " KB";
    }
    return Math.round(size) + " bytes";
  }

  private _isFileOrDirectoryDrag = (event: DragEvent) => {
    if (event.dataTransfer && event.dataTransfer.items !== undefined) {
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        if (event.dataTransfer.items[i].kind.toLowerCase() === "file") {
          return true;
        }
      }
    }

    if (event.dataTransfer && event.dataTransfer.types !== undefined) {
      for (let i = 0; i < event.dataTransfer.types.length; i++) {
        if (event.dataTransfer.types[i].toLowerCase() === "files") {
          return true;
        }
      }
    }
    return false;
  };

  private _getStyleTagTemplate() {
    return html`
      <style>
        kuc-attachment,
        kuc-attachment *,
        :lang(en) kuc-attachment,
        :lang(en) kuc-attachment * {
          font-family: "HelveticaNeueW02-45Ligh", Arial,
            "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
        }
        :lang(ja) kuc-attachment,
        :lang(ja) kuc-attachment * {
          font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
            sans-serif;
        }
        :lang(zh) kuc-attachment,
        :lang(zh) kuc-attachment * {
          font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
            Hei, "Heiti SC", sans-serif;
        }
        .kuc-attachment__group {
          width: 293px;
          height: auto;
          box-sizing: border-box;
          position: relative;
        }
        .kuc-attachment__group__label {
          background-color: f5f5f5;
          display: block;
          padding: 4px 8px;
          color: #333333;
          margin: 0 -8px;
          white-space: nowrap;
        }
        .kuc-attachment__group__label[hidden] {
          display: none;
        }
        .kuc-attachment__group__files {
          border: solid 1px #e3e7e8;
          background-color: #eeeeee;
          padding: 16px 8px;
          display: block;
          font-size: 14px;
          overflow: hidden;
          position: relative;
        }
        .kuc-attachment__group__files__upload-button {
          border: 1px solid transparent;
          position: relative;
          display: inline-block;
          margin-right: 16px;
          padding: 8px;
          text-decoration: none;
        }
        .kuc-attachment__group__files__upload-button:focus-within {
          border: 1px solid #3498db;
        }
        .kuc-attachment-file-upload-button:hover
          .kuc-attachment-file-upload-button-text {
          color: #217dbb;
        }
        .kuc-attachment__group__files__upload-button-text {
          color: #3498db;
          font-size: 14px;
        }
        .kuc-attachment__group__files__input-container {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          display: inline-block;
        }
        .kuc-attachment__group__files__input-container input {
          cursor: pointer;
          font-size: 999px;
          vertical-align: middle;
          height: 100%;
          width: 100%;
          line-height: 1.5;
        }
        .kuc-attachment__group__file-item {
          position: relative;
          margin-bottom: 8px;
          height: 24px;
          border: 2px solid #f1f4f5;
          background-color: #f1f4f5;
        }
        .kuc-attachment__group__file-item .kuc-attachment__group__file-name {
          display: inline-block;
          padding: 3px 68px 0 26px;
          width: 100%;
          box-sizing: border-box;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          word-wrap: normal;
          font-size: 14px;
        }
        .kuc-attachment__group__file-item
          .kuc-attachment__group__remove-button {
          display: inline-block;
          position: absolute;
          top: 0;
          left: 0;
          width: 24px;
          height: 24px;
        }
        .kuc-attachment__group__file-item
          .kuc-attachment__group__remove-button
          button {
          display: inline-block;
          width: 24px;
          height: 24px;
          margin-right: 4px;
          background: #f1f4f5
            url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY1MkY4OUYyRjBDODExRTNBRjRFQ0I1NjlCRDUzOTA5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJFQUI5RTAwRjBGMjExRTNBRjRFQ0I1NjlCRDUzOTA5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjUyRjg5RjBGMEM4MTFFM0FGNEVDQjU2OUJENTM5MDkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjUyRjg5RjFGMEM4MTFFM0FGNEVDQjU2OUJENTM5MDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz624fh2AAAA7UlEQVR42mL8//8/AyWAiYFCwNLY2OgApBWAeAEBtcFA/La+vv4AugsEgXg+EE/AozkdiNcAsSaGC4B4PRCnAvFsIGYF4mw0NSlAPAOIJwLxPGwGgMAcIGYE4llA/A+Ic6HiGUA8HYgnAXEB1jBAYoNcwAzV8ByIn0DZU4A4H2cgovFBTv0KxIug/AYgbqRtNKLxYX6uhnphIRCLIIUJXgNSkfzcBhXjgor9wxUOLEhRBYqBaWi2gcLkDzSAQWm+GIj/ohsQCFUwEUdUzYHGDsiwR0Dch27AeyBOJJCUZwLxRyD+gi7BOOC5ESDAABzANqUrnrOAAAAAAElFTkSuQmCC")
            no-repeat 5px center;
          border: 1px solid transparent;
          font-size: 0;
          line-height: 1.5;
          -webkit-appearance: button;
          cursor: pointer;
          text-transform: none;
        }
        .kuc-attachment__group__file-size {
          display: inline-block;
          position: absolute;
          top: 0;
          right: 0;
          color: #888888;
          padding: 3px 3px 0 0;
          max-width: 64px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          word-wrap: normal;
          font-size: 14px;
        }
        .kuc-attachment__group__files__droppable {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          margin: auto 0;
        }
        .kuc-attachment__group__files__droppable[hidden] {
          display: none;
        }
        .kuc-attachment__group__files__droppable-text {
          background-color: #e2f2fe;
          border: dashed 2px #3498db;
          display: table-cell;
          vertical-align: middle;
          text-align: center;
          color: #3498db;
          font-size: 14px;
        }
      </style>
    `;
  }
}
if (!window.customElements.get("kuc-attachment")) {
  window.customElements.define("kuc-attachment", Attachment);
}
