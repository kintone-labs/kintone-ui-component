import { html, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";
import {
  KucBase,
  dispatchCustomEvent,
  generateGUID,
  createStyleOnHeader,
} from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import { validateProps } from "../base/validator";
import { en, ja, zh } from "../base/locale";
import { ATTACHMENT_CSS } from "./style";
import { AttachmentProps, FileItem } from "./type";

let exportAttachment;
(() => {
  exportAttachment = window.customElements.get("kuc-attachment");
  if (exportAttachment) {
    return;
  }
  class KucAttachment extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: Boolean }) disabled = false;
    @property({ type: String }) error = "";
    @property({
      type: Array<FileItem>,
    })
    files: FileItem[] = [];
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
    private _ONE_KB = 1024;
    private _ONE_MB = this._ONE_KB * 1024;
    private _ONE_GB = this._ONE_MB * 1024;

    private _dragEnterCounter = 0;
    private _locale = this._getLocale();

    @query(".kuc-attachment__group__files")
    private _groupFilesEl!: HTMLDivElement;
    @query(".kuc-attachment__group__files__droppable-text")
    private _dragEl!: HTMLDivElement;
    @query(".kuc-attachment__group__files__input")
    private _inputEl!: HTMLInputElement;

    constructor(props?: AttachmentProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    update(changedProperties: PropertyValues) {
      if (changedProperties.has("language")) {
        this._locale = this._getLocale();
      }
      super.update(changedProperties);
    }

    render() {
      return html`
      <div class="kuc-attachment__group" 
        aria-describedby="${this._GUID}-error"
        aria-required="${this.requiredIcon}">
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
          @dragenter="${this._handleDragEnter}"
          @dragover="${this._handleDragOver}"
          @dragleave="${this._handleDragLeave}"
        >
          <div
            class="kuc-attachment__group__files__droppable"
            @drop="${this._handleDragDrop}"
            ?hidden="${!this._isDraging}"
          >
          <div class="kuc-attachment__group__files__droppable-text">${
            this._locale.ATTACHMENT_DRAG_DROP_ZONE
          }</div>
          </div>
          <div
            class="kuc-attachment__group__files__display-field"
            ?hidden="${this._isDraging}"
            role="list"
          >
          ${this.files.map((item, number) =>
            this._getAttachmentItemTemplete(item, number)
          )}
            <a tabindex="1" class="kuc-attachment__group__files__upload-button"
            ?hidden="${this.disabled}"
            role="button">
              <span class="kuc-attachment__group__files__upload-button-text">${
                this._locale.ATTACHMENT_BROWSE
              }</span>
              <div class="kuc-attachment__group__files__input-container">
                <input class="kuc-attachment__group__files__input" type="file" multiple 
                @change="${this._handleChangeFiles}"></input>
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
        <div
          class="kuc-attachment__group__file-item"
          role="listitem"
          aria-labelledby="${this._GUID}-${index}"
        >
          <div
            title="${item.name || ""}"
            class="kuc-attachment__group__file-name"
            id="${this._GUID}-${index}"
          >
            ${item.name || ""}
          </div>
          <div
            class="kuc-attachment__group__remove-button"
            ?hidden="${this.disabled}"
          >
            <button
              role="button"
              aria-label="Cancel File"
              data-file-index="${index}"
              @click="${this._handleClickFileRemove}"
            ></button>
          </div>
          <span class="kuc-attachment__group__file-size">
            ${this._getFileSize(item.size)}
          </span>
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
        const changedFiles = this.files.splice(index, 1);
        const detail = {
          oldFiles: tempFiles,
          files: this.files,
          type: "remove",
          changedFiles: changedFiles,
        };
        dispatchCustomEvent(this, "haha", detail);
        this.requestUpdate();
      }
    }

    private _handleDragEnter(event: DragEvent) {
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

    private _handleDragOver(event: DragEvent) {
      event.stopPropagation();
      if (this._isFileOrDirectoryDrag(event)) {
        event.preventDefault();
      }
    }

    private _handleDragDrop(event: DragEvent) {
      event.preventDefault();
      this._handleDragLeave();
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
            typeof event.dataTransfer.items[i].webkitGetAsEntry ===
              "function" &&
            event.dataTransfer.items[i].webkitGetAsEntry()!.isDirectory
          ) {
            return false;
          }
        }
      }
      return true;
    }

    private _handleDragLeave() {
      this._dragEnterCounter--;

      if (this._dragEnterCounter === 0) {
        this._groupFilesEl.style.height = "auto";
        this._isDraging = false;
      }
    }

    private _handleChangeFiles(event: Event) {
      event.preventDefault();
      event.stopPropagation();
      this._addFiles(event);
    }

    private _addFiles(event: any) {
      if (this.files) {
        let addedFiles = event.dataTransfer
          ? event.dataTransfer.files
          : event.target.files;
        addedFiles = Object.keys(addedFiles).map((e) => {
          return addedFiles[e];
        });
        const tempFileList = [...this.files];
        addedFiles.forEach((addedFile: FileItem) => this.files.push(addedFile));
        const detail = {
          oldFiles: tempFileList,
          files: this.files,
          type: "add",
          changedFiles: addedFiles,
        };
        dispatchCustomEvent(this, "change", detail);
        this.requestUpdate();
      }
      this._inputEl.value = "";
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
  }
  window.customElements.define("kuc-attachment", KucAttachment);
  createStyleOnHeader(ATTACHMENT_CSS);
  exportAttachment = KucAttachment;
})();
const Attachment = exportAttachment as any;
export { Attachment };
