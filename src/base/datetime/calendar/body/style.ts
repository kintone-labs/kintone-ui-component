export const CALENDAR_BODY_CSS = `
kuc-base-datetime-calendar-body,
kuc-base-datetime-calendar-body *,
:lang(en) kuc-base-datetime-calendar-body,
:lang(en) kuc-base-datetime-calendar-body * {
  font-family: "HelveticaNeueW02-45Ligh", Arial,
    "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
}
:lang(ja) kuc-base-datetime-calendar-body,
:lang(ja) kuc-base-datetime-calendar-body * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
:lang(zh) kuc-base-datetime-calendar-body,
:lang(zh) kuc-base-datetime-calendar-body * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
.kuc-base-datetime-calendar-body__table,
.kuc-base-datetime-calendar-body__table tr {
  border-collapse: separate;
  border-spacing: 0;
}
.kuc-base-datetime-calendar-body__table__date,
.kuc-base-datetime-calendar-body__table__date--selected {
  border-spacing: 1px;
  padding: 0px;
  border: 1px solid #ffffff;
}
.kuc-base-datetime-calendar-body__table__date
  .kuc-base-datetime-calendar-body__table__date__button,
.kuc-base-datetime-calendar-body__table__date--selected
  .kuc-base-datetime-calendar-body__table__date__button,
.kuc-base-datetime-calendar-body__table__header {
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 400;
  color: #333333;
}
:lang(ja) th.kuc-base-datetime-calendar-body__table__header {
  font-weight: 700;
}
.kuc-base-datetime-calendar-body__table__date--selected
  .kuc-base-datetime-calendar-body__table__date__button,
.kuc-base-datetime-calendar-body__table__date
  .kuc-base-datetime-calendar-body__table__date__button,
.kuc-base-datetime-calendar-body__table__header {
  box-sizing: border-box;
  padding: 8px 0;
  width: 36px;
  height: 31px;
  border: 1px solid #ffffff;
}
.kuc-base-datetime-calendar-body__table__header:nth-child(1),
.kuc-base-datetime-calendar-body__table__header:nth-child(7) {
  color: #d4d7d7;
}
.kuc-base-datetime-calendar-body__table__date--selected
  .kuc-base-datetime-calendar-body__table__date__button,
.kuc-base-datetime-calendar-body__table__date
  .kuc-base-datetime-calendar-body__table__date__button {
  background: none;
  cursor: pointer;
}
.kuc-base-datetime-calendar-body__table__date
  .kuc-base-datetime-calendar-body__table__date__button:hover {
  color: #000000;
}
.kuc-base-datetime-calendar-body__table__date--selected {
  border: 1px solid #3498db;
  box-sizing: border-box;
}
.kuc-base-datetime-calendar-body__table__date--selected
  .kuc-base-datetime-calendar-body__table__date__button {
  outline: none;
}
.kuc-base-datetime-calendar-body__table__date
  .kuc-base-datetime-calendar-body__table__date__button:focus-visible {
  outline: none;
}
.kuc-base-datetime-calendar-body__table__date--selected
  .kuc-base-datetime-calendar-body__table__date__button--today,
.kuc-base-datetime-calendar-body__table__date
  .kuc-base-datetime-calendar-body__table__date__button--today {
  color: #ffffff;
  background: #888888;
  border: none;
}
.kuc-base-datetime-calendar-body__table__date__button--today:hover {
  color: #333333;
}
.kuc-base-datetime-calendar-body__table__date
  .kuc-base-datetime-calendar-body__table__date__button--other-month,
.kuc-base-datetime-calendar-body__table__date
  .kuc-base-datetime-calendar-body__table__date__button--other-month:hover {
  color: #d4d7d7;
}
`;
