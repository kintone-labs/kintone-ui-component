import { html, PropertyValues } from "lit";
import { property, query, state } from "lit/decorators.js";
import {
  KucBase,
  dispatchCustomEvent,
  generateGUID,
  createStyleOnHeader,
} from "../base/kuc-base";
import { visiblePropConverter } from "../base/converter";
import { validatePositiveInteger, validateProps } from "../base/validator";
import { en, ja, zh } from "../base/attachment/resource/locale";
import { ATTACHMENT_CSS } from "./style";
import { AttachmentProps, FileItem } from "./type";
import { ATTACHMENT } from "../base/attachment/resource/constant";

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

    private _dragEnterCounter = 0;
    private _locale = this._getLocale();

    @query(".kuc-attachment__group__files")
    private _groupFilesEl!: HTMLDivElement;
    @query(".kuc-attachment__group__files__droppable__text")
    private _dragEl!: HTMLDivElement;
    @query(
      ".kuc-attachment__group__files__browse-button__input-container__input"
    )
    private _inputEl!: HTMLInputElement;

    constructor(props?: AttachmentProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }

    willUpdate(changedProperties: PropertyValues) {
      if (changedProperties.has("language")) {
        this._locale = this._getLocale();
      }
      return true;
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
          <div class="kuc-attachment__group__files__droppable__text">${
            this._locale.ATTACHMENT_DRAG_DROP_ZONE
          }</div>
          </div>
          <div
            class="kuc-attachment__group__files__display-area"
            ?hidden="${this._isDraging}"
            role="list"
          >
          ${this.files.map((item, number) =>
            this._getAttachmentItemTemplete(item, number)
          )}
            <a tabindex="-1" class="kuc-attachment__group__files__browse-button"
            ?hidden="${this.disabled}">
              <span class="kuc-attachment__group__files__browse-button__text">${
                this._locale.ATTACHMENT_BROWSE
              }</span>
              <div class="kuc-attachment__group__files__browse-button__input-container">
                <input class="kuc-attachment__group__files__browse-button__input-container__input" type="file" accept multiple 
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
          class="kuc-attachment__group__files__display-area__item"
          role="listitem"
          aria-labelledby="${this._GUID}-${index}"
        >
          <div
            title="${item.name || ""}"
            class="kuc-attachment__group__files__display-area__item__name"
            id="${this._GUID}-${index}"
          >
            ${item.name || ""}
          </div>
          <div
            class="kuc-attachment__group__files__display-area__item__remove-button__container"
            ?hidden="${this.disabled}"
          >
            <button
              class="kuc-attachment__group__files__display-area__item__remove-button__container__button"
              role="button"
              aria-label="Cancel File"
              data-file-index="${index}"
              @click="${this._handleClickFileRemove}"
            >
              ${this._getRemoveButtonIcon()}
            </button>
          </div>
          <span class="kuc-attachment__group__files__display-area__item__size">
            ${this._getFileSize(item.size)}
          </span>
        </div>
      `;
    }
    private _getRemoveButtonIcon() {
      return html`<svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.93933 7.00001L1.96966 3.03034L1.43933 2.50001L2.49999 1.43935L3.03032 1.96968L6.99999 5.93935L10.9697 1.96968L11.5 1.43935L12.5607 2.50001L12.0303 3.03034L8.06065 7.00001L12.0303 10.9697L12.5607 11.5L11.5 12.5607L10.9697 12.0303L6.99999 8.06067L3.03032 12.0303L2.49999 12.5607L1.43933 11.5L1.96966 10.9697L5.93933 7.00001Z"
          fill="#a8a8a8"
        />
      </svg>`;
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
        parseInt(index, 10) === this.files.length - 1 && this._inputEl.focus();
        const tempFiles = [...this.files];
        const changedFiles = this.files.splice(index, 1);
        const detail = {
          oldFiles: tempFiles,
          files: this.files,
          type: "remove",
          changedFiles: changedFiles,
        };
        dispatchCustomEvent(this, "change", detail);
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
      return validatePositiveInteger(size)
        ? this._formatFileSize(parseInt(size, 10))
        : ATTACHMENT.INVALID_SIZE_ERROR;
    }

    private _formatFileSize(size: number) {
      if (size >= ATTACHMENT.UNIT_LENGTH.ONE_GB) {
        return Math.round(size / ATTACHMENT.UNIT_LENGTH.ONE_GB) + " GB";
      } else if (size >= ATTACHMENT.UNIT_LENGTH.ONE_MB) {
        return Math.round(size / ATTACHMENT.UNIT_LENGTH.ONE_MB) + " MB";
      } else if (size >= ATTACHMENT.UNIT_LENGTH.ONE_KB) {
        return Math.round(size / ATTACHMENT.UNIT_LENGTH.ONE_KB) + " KB";
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
