export const CALENDAR_FOOTER_CSS = `
kuc-base-datetime-calendar-footer,
kuc-base-datetime-calendar-footer *,
:lang(en) kuc-base-datetime-calendar-footer,
:lang(en) kuc-base-datetime-calendar-footer * {
  font-family: "HelveticaNeueW02-45Ligh", Arial,
    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
}
:lang(ja) kuc-base-datetime-calendar-footer,
:lang(ja) kuc-base-datetime-calendar-footer * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
:lang(zh) kuc-base-datetime-calendar-footer,
:lang(zh) kuc-base-datetime-calendar-footer * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
.kuc-base-datetime-calendar-footer__group {
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 0;
  height: 27px;
  white-space: nowrap;
  width: 272px;
}
.kuc-base-datetime-calendar-footer__group__button {
  background: transparent;
  border: 1px solid transparent;
  color: #3498db;
  cursor: pointer;
  font-size: 13px;
  outline: none;
}
.kuc-base-datetime-calendar-footer__group__button:hover {
  color: #217dbb;
}
.kuc-base-datetime-calendar-footer__group__button:focus {
  border: 1px solid #3498db;
  outline: none;
}
.kuc-base-datetime-calendar-footer__group__center {
  width: 100%;
}
`;
