export const MOBILE_DATETIME_PICKER_CSS = `
kuc-mobile-datetime-picker,
kuc-mobile-datetime-picker * {
color: #333333;
font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}
:lang(zh) kuc-mobile-datetime-picker,
:lang(zh) kuc-mobile-datetime-picker * {
font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
kuc-mobile-datetime-picker {
font-size: 13px;
color: #333333;
display: inline-table;
vertical-align: top;
width: 100%;
}
kuc-mobile-datetime-picker[hidden] {
display: none;
}
.kuc-mobile-datetime-picker__group {
border: 0;
padding: 0;
}
.kuc-mobile-datetime-picker__group__label {
display: inline-block;
font-weight: bold;
line-height: 1.5;
padding: 0px;
white-space: nowrap;
margin: 0 0 4px 0;
}
.kuc-mobile-datetime-picker__group__label[hidden] {
display: none;
}
.kuc-mobile-datetime-picker__group__input {
display: flex;
align-items: center;
margin-right: 0.5em;
margin-left: 0.5em;
}
.kuc-mobile-datetime-picker__group__input--date {
width: 130px;
margin-right: 10px;
}
.kuc-mobile-datetime-picker__group__input--time {
max-width: 10px;
}
`;
