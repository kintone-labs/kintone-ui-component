export const BASE_DATETIME_LISTBOX_CSS = `
kuc-base-datetime-listbox,
kuc-base-datetime-listbox *,
:lang(en) kuc-base-datetime-listbox,
:lang(en) kuc-base-datetime-listbox * {
  font-family: "HelveticaNeueW02-45Ligh", Arial,
    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
}
:lang(ja) kuc-base-datetime-listbox,
:lang(ja) kuc-base-datetime-listbox * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
:lang(zh) kuc-base-datetime-listbox,
:lang(zh) kuc-base-datetime-listbox * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
.kuc-base-datetime-listbox__listbox {
  position: absolute;
  z-index: 2000;
  min-width: 280px;
  margin: 0;
  padding: 8px 0;
  border: 1px solid #e3e7e8;
  background-color: #ffffff;
  list-style: none;
  line-height: 1;
  overflow-y: auto;
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
}
.kuc-base-datetime-listbox__listbox__item {
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 16px 8px 25px;
  color: #333333;
  cursor: pointer;
  -webkit-tap-highlight-color: initial;
  text-align: left;
  font-size: 14px;
  user-select: none;
}
.kuc-base-datetime-listbox__listbox__item[aria-selected="true"] {
  color: #3498db;
}
.kuc-base-datetime-listbox__listbox--highlight {
  background-color: #e2f2fe;
  cursor: pointer;
}
.kuc-base-datetime-listbox__listbox__item__icon {
  position: absolute;
  left: 8px;
  top: 10px;
  background-color: transparent;
}
.kuc-base-datetime-listbox__listbox__item:focus {
  outline: none;
}
`;
