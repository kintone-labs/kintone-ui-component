export const ATTACHMENT_CSS = `
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
  .kuc-attachment {
    font-size: 14px;
    display: inline-table;
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
  .kuc-attachment__group__files__upload-button[hidden]{
  display: none
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
  .kuc-attachment__group__remove-button[hidden] {
    display: none;
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
`;
