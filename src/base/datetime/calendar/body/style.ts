export const CALENDAR_BODY_CSS = `
kuc-base-datetime-calendar-body,
kuc-base-datetime-calendar-body *,
kuc-base-datetime-calendar-body:lang(en),
kuc-base-datetime-calendar-body:lang(en) * {
  font-family: sans-serif;
}
kuc-base-datetime-calendar-body:lang(ja),
kuc-base-datetime-calendar-body:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-base-datetime-calendar-body:lang(zh),
kuc-base-datetime-calendar-body:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-base-datetime-calendar-body:lang(zh-TW),
kuc-base-datetime-calendar-body:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC",sans-serif;
}
kuc-base-datetime-calendar-body:lang(es),
kuc-base-datetime-calendar-body:lang(es) * {
  font-family: sans-serif;
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
:lang(es) th.kuc-base-datetime-calendar-body__table__header {
  text-transform: revert;
}
.kuc-base-datetime-calendar-body__table__date--selected,
.kuc-base-datetime-calendar-body__table__date,
.kuc-base-datetime-calendar-body__table__header {
  box-sizing: border-box;
  padding: 8px 0;
  width: 36px;
  height: 31px;
  border: 1px solid #ffffff;
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 400;
  color: #333333;
  cursor: pointer;
}
.kuc-base-datetime-calendar-body__table__header:nth-child(1),
.kuc-base-datetime-calendar-body__table__header:nth-child(7) {
  color: #d4d7d7;
}
.kuc-base-datetime-calendar-body__table__date:focus,
.kuc-base-datetime-calendar-body__table__date--selected:focus {
  outline: none;
}
.kuc-base-datetime-calendar-body__table__date
  .kuc-base-datetime-calendar-body__table__date__button:hover {
  color: #000000;
}
.kuc-base-datetime-calendar-body__table__date--selected {
  border-color: #3498db;
}
.kuc-base-datetime-calendar-body__table__date--selected--today,
.kuc-base-datetime-calendar-body__table__date--today {
  color: #ffffff;
  background: #888888;
}
.kuc-base-datetime-calendar-body__table__date--today:hover {
  color: #333333;
}
.kuc-base-datetime-calendar-body__table__date--other-month,
.kuc-base-datetime-calendar-body__table__date--other-month:hover {
  color: #d4d7d7;
}
`;
