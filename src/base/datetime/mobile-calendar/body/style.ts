export const BASE_MOBILE_CALENDAR_BODY_CSS = `
kuc-base-mobile-datetime-calendar-body,
kuc-base-mobile-datetime-calendar-body * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}

:lang(zh) kuc-base-mobile-datetime-calendar-body,
:lang(zh) kuc-base-mobile-datetime-calendar-body * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
.kuc-base-mobile-datetime-calendar-body__table,
.kuc-base-mobile-datetime-calendar-body__table tr {
    border-collapse: separate;
    border-spacing: 0;
}
.kuc-base-mobile-datetime-calendar-body__table__date--selected {
    border-spacing: 1px;
    padding: 0px;
}
.kuc-base-mobile-datetime-calendar-body__table__date {
    max-width: 40px;
    border-spacing: 1px;
    cursor: pointer;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    border: 1px solid #ffffff;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    color: #333333;
    font-size: 14px;
    font-weight: 400;
}
.kuc-base-mobile-datetime-calendar-body__table__date
    .kuc-base-mobile-datetime-calendar-body__table__date__button {
    border-spacing: 1px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    vertical-align: middle;
    color: #333333;
}
.kuc-base-mobile-datetime-calendar-body__table__date,
.kuc-base-mobile-datetime-calendar-body__table__date--selected,
.kuc-base-mobile-datetime-calendar-body__table__header {
    box-sizing: border-box;
    height: 40px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-weight: 400;
    font-size: 12px;
    color: #333333;
    padding: 0;
}
.kuc-base-mobile-datetime-calendar-body__table__date {
    font-size: 14px;
}
th.kuc-base-mobile-datetime-calendar-body__table__header {
    font-weight: 700;
}
.kuc-base-mobile-datetime-calendar-body__table__date--selected
    .kuc-base-mobile-datetime-calendar-body__table__date__button,
.kuc-base-mobile-datetime-calendar-body__table__date
    .kuc-base-mobile-datetime-calendar-body__table__date__button,
.kuc-base-mobile-datetime-calendar-body__table__header {
    box-sizing: border-box;
    border: 1px solid #ffffff;
}
.kuc-base-mobile-datetime-calendar-body__table__date--selected
    .kuc-base-mobile-datetime-calendar-body__table__date__button,
.kuc-base-mobile-datetime-calendar-body__table__date
    .kuc-base-mobile-datetime-calendar-body__table__date__button {
    background: none;
    cursor: pointer;
    max-width: 40px;
}
.kuc-base-mobile-datetime-calendar-body__table__date--selected {
    border: 1px solid #206694;
    box-sizing: border-box;
    text-align: center;
    font-size: 14px;
}
.kuc-base-mobile-datetime-calendar-body__table__date--selected
    .kuc-base-mobile-datetime-calendar-body__table__date__button {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-body__table__date
    .kuc-base-mobile-datetime-calendar-body__table__date__button:focus-visible {
    outline: none;
}
.kuc-base-mobile-datetime-calendar-body__table__date--today {
    color: #333333;
    background: #d8d8d8;
}
.kuc-base-mobile-datetime-calendar-body__table__date--other-month {
    color: #a5a5a5;
}
.kuc-base-mobile-datetime-calendar-body__table__date--selected:focus {
    outline: none;
}
`;
