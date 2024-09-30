import { html, PropertyValues, svg } from "lit";
import { property, query, queryAll, state } from "lit/decorators.js";

import {
  ATTACHMENT_INVALID_SIZE_ERROR,
  ONE_GB,
  ONE_KB,
  ONE_MB,
} from "../base/attachment/resource/constant";
import { en, es, ja, zh, zh_TW } from "../base/attachment/resource/locale";
import { ERROR_MESSAGE } from "../base/constant";
import { languagePropConverter, visiblePropConverter } from "../base/converter";
import "../base/error";
import "../base/label";
import {
  createStyleOnHeader,
  dispatchCustomEvent,
  generateGUID,
  KucBase,
} from "../base/kuc-base";
import {
  validateArrayType,
  validatePositiveInteger,
  validateProps,
} from "../base/validator";

import { ATTACHMENT_CSS } from "./style";
import { AttachmentChangeEventDetail, AttachmentProps, FileItem } from "./type";

let exportAttachment;
(() => {
  exportAttachment = window.customElements.get("kuc-attachment");
  if (exportAttachment) {
    return;
  }
  class KucAttachment extends KucBase {
    @property({ type: String, reflect: true, attribute: "class" }) className =
      "";
    @property({ type: String }) error = "";
    @property({ type: String, reflect: true, attribute: "id" })
    id = "";
    @property({ type: String }) label = "";
    @property({
      type: String,
      attribute: "lang",
      reflect: true,
      converter: languagePropConverter,
    })
    language = "auto";
    @property({ type: String }) message = "";
    @property({ type: Boolean }) disabled = false;
    @property({ type: Boolean }) requiredIcon = false;
    @property({
      type: Boolean,
      attribute: "hidden",
      reflect: true,
      converter: visiblePropConverter,
    })
    visible = true;
    @property({ type: Array }) files: FileItem[] = [];

    private _GUID: string;
    @state()
    private _isDraging = false;

    private _dragEnterCounter = 0;
    private _locale = this._getLocale();

    @query(".kuc-attachment__group__files")
    private _groupFilesEl!: HTMLDivElement;
    @query(".kuc-attachment__group__files__droppable__text")
    private _dragTextEl!: HTMLDivElement;
    @query(
      ".kuc-attachment__group__files__browse-button__input-container__input",
    )
    private _inputEl!: HTMLInputElement;

    @query(".kuc-attachment__group__label")
    private _labelEl!: HTMLDivElement;
    @queryAll(".kuc-attachment__group__files__display-area__item__name")
    private _fileItemsEl!: HTMLDivElement[];

    @queryAll(
      ".kuc-attachment__group__files__display-area__item__remove-button__container__button",
    )
    private _fileRemoveButtons!: HTMLButtonElement[];

    constructor(props?: AttachmentProps) {
      super();
      this._GUID = generateGUID();
      const validProps = validateProps(props);
      Object.assign(this, validProps);
    }
    shouldUpdate(changedProperties: PropertyValues): boolean {
      if (
        changedProperties.has("files") &&
        !validateArrayType<FileItem>(this.files)
      ) {
        this.throwErrorAfterUpdateComplete(ERROR_MESSAGE.FILES.IS_NOT_ARRAY);
        return false;
      }
      return true;
    }
    willUpdate(changedProperties: PropertyValues) {
      if (changedProperties.has("language")) {
        this._locale = this._getLocale();
      }
      return true;
    }

    render() {
      return html`
      <div class="kuc-attachment__group">
        <label
          class="kuc-attachment__group__label"
          ?hidden="${!this.label}"
          for="${this._GUID}-input"
          @click="${this._handleClickLabel}"
        >
          <kuc-base-label
            .text="${this.label}"
            .requiredIcon="${this.requiredIcon}"
          ></kuc-base-label>
        </label>
        <div
          class="kuc-attachment__group__files ${
            this.disabled ? " kuc-attachment__group__files--disabled" : ""
          }"
          @dragenter="${this._handleDragEnter}"
          @dragover="${this._handleDragOver}"
          @dragleave="${this._handleDragLeave}"
          @drop="${this._handleDragDrop}"
        >
          <div
            class="kuc-attachment__group__files__droppable"
            ?hidden="${!this._isDraging}"
          >
          <div class="kuc-attachment__group__files__droppable__text">${
            this._locale.ATTACHMENT_DRAG_DROP_ZONE
          }</div>
          </div>
          <ul
            class="kuc-attachment__group__files__display-area${this._isDraging ? " kuc-attachment__group__files__not-droppable--dragenter" : ""}"
          >
          ${this.files.map((item, number) =>
            this._getAttachmentItemTemplate(item, number),
          )}
          </ul>
          <div class="kuc-attachment__group__files__browse-button${this._isDraging ? " kuc-attachment__group__files__not-droppable--dragenter" : ""}"
          ?hidden="${this.disabled}">
            <span class="kuc-attachment__group__files__browse-button__text">${
              this._locale.ATTACHMENT_BROWSE
            }</span>
            <div class="kuc-attachment__group__files__browse-button__input-container">
              <input class="kuc-attachment__group__files__browse-button__input-container__input" type="file" multiple 
              .id="${this._GUID}-input"
              aria-required="${this.requiredIcon}"
              aria-invalid="${this.error}"
              aria-describedby="${this._GUID}-error"
              @change="${this._handleChangeFiles}"></input>
            </div>
          </div>
          <p class="kuc-attachment__group__files__browse-message${
            this.disabled
              ? " kuc-attachment__group__files__browse-message--disabled"
              : ""
          }"
            ?hidden="${!this.message}"
          >
            ${this.message}
          </p>
        </div>
        <kuc-base-error
          class="kuc-attachment__error"
          ?hidden="${!this.error}"
          .text="${this.error}"
          .guid="${this._GUID}"
        ></kuc-base-error>
      </div>
    `;
    }

    private _getAttachmentItemTemplate(item: FileItem, index: number) {
      return html`
        <li class="kuc-attachment__group__files__display-area__item">
          <div
            title="${item.name || ""}"
            class="kuc-attachment__group__files__display-area__item__name"
          >
            ${item.name || ""}
          </div>
          <div
            class="kuc-attachment__group__files__display-area__item__remove-button__container"
            ?hidden="${this.disabled}"
          >
            <button
              class="kuc-attachment__group__files__display-area__item__remove-button__container__button"
              aria-label="Cancel File"
              data-file-index="${index}"
              @click="${this._handleClickFileRemove}"
              tabindex="0"
            >
              ${this._getRemoveButtonIcon()}
            </button>
          </div>
          <span class="kuc-attachment__group__files__display-area__item__size">
            ${this._getFileSize(item.size)}
          </span>
        </li>
      `;
    }
    async updated(_changedProperties: PropertyValues) {
      await this.updateComplete;
      this._updateFileNameMaxWidth();
    }

    private _updateFileNameMaxWidth() {
      const FILES_PADDING_AND_BORDER_WIDTH = 5;
      const FILE_ITEM_BORDER_WIDTH = 2;
      const labelElWidth = this._labelEl.getBoundingClientRect().width;
      this._fileItemsEl.forEach((fileItem) => {
        fileItem.style.maxWidth = `calc(var(--kuc-attachment-width, ${
          labelElWidth < 191 ? 191 : labelElWidth
        }px) - ${
          (FILES_PADDING_AND_BORDER_WIDTH + FILE_ITEM_BORDER_WIDTH) * 2
        }px)`;
      });
    }

    private _getRemoveButtonIcon() {
      return svg`<svg
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
      const langs = ["en", "ja", "zh", "zh-TW", "es"];
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
        case "zh-TW":
          return zh_TW;
        case "ja":
          return ja;
        case "es":
          return es;
        default:
          return en;
      }
    }

    private _handleClickFileRemove(event: PointerEvent) {
      const removeButtonEl = event.currentTarget as HTMLButtonElement;
      const index = parseInt(
        removeButtonEl.getAttribute("data-file-index")!,
        10,
      );

      if (this.files) {
        index === this.files.length - 1 && this._inputEl.focus();
        const tempFiles = [...this.files];
        this.files.splice(index, 1);
        const detail: AttachmentChangeEventDetail = {
          oldFiles: tempFiles,
          files: this.files,
          type: "remove-file",
          fileIndex: [index],
        };
        dispatchCustomEvent(this, "change", detail);
        this.requestUpdate();
        if (index <= this.files.length - 1) {
          this._fileRemoveButtons[index].focus();
        }
      }
    }

    private _handleClickLabel(event: Event) {
      event.preventDefault();
    }

    private _handleDragEnter(event: DragEvent) {
      if (this.disabled) return;
      this._dragEnterCounter++;
      if (this._dragEnterCounter === 1 && this._isFileOrDirectoryDrag(event)) {
        event.preventDefault();
        const DRAG_TEXT_BORDER_WIDTH = 2;
        const FILES_BORDER_WIDTH = 1;
        this._groupFilesEl.style.height =
          this._groupFilesEl.getBoundingClientRect().height + "px";
        this._dragTextEl.style.width =
          this._groupFilesEl.getBoundingClientRect().width -
          FILES_BORDER_WIDTH * 2 +
          "px";
        this._dragTextEl.style.height =
          this._groupFilesEl.getBoundingClientRect().height -
          (FILES_BORDER_WIDTH + DRAG_TEXT_BORDER_WIDTH) * 2 +
          "px";
        this._isDraging = true;
      }
    }

    private _handleDragOver(event: DragEvent) {
      if (this.disabled) return;
      event.stopPropagation();
      if (this._isFileOrDirectoryDrag(event)) {
        event.preventDefault();
      }
    }

    private _handleDragDrop(event: DragEvent) {
      if (this.disabled || !this._isDraging) return;
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
            event.dataTransfer.items[i].webkitGetAsEntry()?.isDirectory
          ) {
            return false;
          }
        }
      }
      return true;
    }

    private _handleDragLeave() {
      if (this.disabled) return;
      this._dragEnterCounter--;

      if (this._dragEnterCounter === 0) {
        this._groupFilesEl.style.height = "var(--kuc-attachment-height, auto)";
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
        const fileIndex = addedFiles.map((_item: any, index: number) => {
          return tempFileList.length + index;
        }) as number[];
        addedFiles.forEach((addedFile: FileItem) => this.files.push(addedFile));
        const detail: AttachmentChangeEventDetail = {
          oldFiles: tempFileList,
          files: this.files,
          type: "add-file",
          fileIndex: fileIndex,
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
        : ATTACHMENT_INVALID_SIZE_ERROR;
    }

    private _formatFileSize(size: number) {
      if (size >= ONE_GB) {
        return Math.round(size / ONE_GB) + " GB";
      } else if (size >= ONE_MB) {
        return Math.round(size / ONE_MB) + " MB";
      } else if (size >= ONE_KB) {
        return Math.round(size / ONE_KB) + " KB";
      }
      return Math.round(size) + " bytes";
    }

    private _isFileOrDirectoryDrag = (event: DragEvent) => {
      if (!event.dataTransfer) {
        return false;
      }
      if (event.dataTransfer.items !== undefined) {
        for (let i = 0; i < event.dataTransfer.items.length; i++) {
          if (event.dataTransfer.items[i].kind.toLowerCase() === "file") {
            return true;
          }
        }
      }
      if (event.dataTransfer.types !== undefined) {
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
