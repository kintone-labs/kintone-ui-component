export const ATTACHMENT_CSS = `
  kuc-attachment,
  kuc-attachment *,
  kuc-attachment:lang(en),
  kuc-attachment:lang(en) * {
    font-family: sans-serif;
  }
  kuc-attachment:lang(ja),
  kuc-attachment:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
        sans-serif;
  }
  kuc-attachment:lang(zh),
  kuc-attachment:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
        Hei, "Heiti SC", sans-serif;
  }
  kuc-attachment:lang(zh-TW),
  kuc-attachment:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
        Hei,"Heiti SC",sans-serif;
  }
  kuc-attachment:lang(es),
  kuc-attachment:lang(es) * {
    font-family: sans-serif;
  }
  kuc-attachment {
    font-size: 14px;
    display: inline-table;
    vertical-align: top;
    width: var(--kuc-attachment-width, 191px);
    min-width: var(--kuc-attachment-width, 191px);
  }
  kuc-attachment[hidden] {
    display: none;
  }
  .kuc-attachment__group {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    position: relative;
    display: block;
  }
  .kuc-attachment__group__label {
    display: inline-block;
    padding: 4px 0 8px 0;
    color: #333333;
    white-space: nowrap;
  }
  .kuc-attachment__group__label[hidden] {
    display: none;
  }
  .kuc-attachment__group__files {
    border: solid 1px #e3e7e8;
    background-color: #eeeeee;
    padding: 16px 4px;
    display: block;
    font-size: 14px;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    width: var(--kuc-attachment-width, auto);
    height: var(--kuc-attachment-height, auto);
  }
  .kuc-attachment__group__files--disabled {
    cursor: not-allowed;
  }
  .kuc-attachment__group__files__browse-button {
    border: 1px solid transparent;
    position: relative;
    display: inline-block;
    margin-right: 16px;
    padding: 8px;
    text-decoration: none;
  }
  .kuc-attachment__group__files__browse-button[hidden]{
    display: none;
  }
  .kuc-attachment__group__files__browse-button:focus-within {
    border: 1px solid #3498db;
  }
  .kuc-attachment__group__files__browse-button:hover
  .kuc-attachment__group__files__browse-button__text {
    color: #217dbb;
  }
  .kuc-attachment__group__files__browse-button__text {
    color: #3498db;
    font-size: 14px;
  }
  .kuc-attachment__group__files__browse-button__input-container {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    display: inline-block;
  }
  .kuc-attachment__group__files__browse-button__input-container__input {
    cursor: pointer;
    font-size: 999px;
    vertical-align: middle;
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }
  .kuc-attachment__group__files__display-area {
    padding-inline-start: 0px;
    list-style-type: disc;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .kuc-attachment__group__files__display-area__item {
    position: relative;
    margin-bottom: 8px;
    height: auto;
    min-height: 24px;
    border: 2px solid #f1f4f5;
    background-color: #f1f4f5;
    list-style: none;
    display: flex;
    align-items: center;
  }
  .kuc-attachment__group__files__display-area__item__name {
    display: inline-block;
    padding: 3px calc(4.6em + 4px) 3px 26px;
    width: 100%;
    max-width: 177px;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: normal;
    font-size: var(--kuc-attachment-item-font-size, 14px);
    line-height: 1.2;
  }
  .kuc-attachment__group__files__display-area__item__remove-button__container {
    display: inline-block;
    position: absolute;
    top: calc(50% - 12px);
    left: 0;
    width: 24px;
    height: 24px;
  }
  .kuc-attachment__group__files__display-area__item__remove-button__container[hidden] {
    display: none;
  }
  .kuc-attachment__group__files__display-area__item__remove-button__container__button {
    background-color: #f2f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    padding: 0px;
    width:100%;
    height:100%;
  }
  .kuc-attachment__group__files__display-area__item__remove-button__container__button:hover {
    background: #d8e1e6;
  }
  .kuc-attachment__group__files__display-area__item__remove-button__container__button:focus-within {
    border: 1px solid #3498db;
  }
  .kuc-attachment__group__files__display-area__item__remove-button__container__button:focus {
    outline: none;
  }
  .kuc-attachment__group__files__display-area__item__size {
    display: inline-block;
    position: absolute;
    right: 0;
    color: #888888;
    padding: 0 3px 0 0;
    max-width: 4.6em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: normal;
    font-size: var(--kuc-attachment-item-font-size, 14px);
    line-height: 1.2;
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
  .kuc-attachment__group__files__droppable__text {
    background-color: #e2f2fe;
    border: dashed 2px #3498db;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    color: #3498db;
    font-size: 14px;
  }
  .kuc-attachment__group__files__browse-message {
    display: inline-block;
    color: var(--kuc-attachment-message-color, #888888);
    font-size: var(--kuc-attachment-message-font-size, 14px);
    margin: 3px 0 0;
    word-break: break-all;
  }
  .kuc-attachment__group__files__browse-message--disabled {
    color: #888888;
  }
  .kuc-attachment__group__files__browse-message[hidden] {
    display: none;
  }
  .kuc-attachment__group__files__not-droppable--dragenter {
    visibility: hidden;
  }
`;
