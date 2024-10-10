export const DATE_TIME_PICKER_CSS = `
kuc-datetime-picker,
kuc-datetime-picker *,
kuc-datetime-picker:lang(en),
kuc-datetime-picker:lang(en) * {
  font-family: sans-serif;
}
kuc-datetime-picker:lang(ja),
kuc-datetime-picker:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-datetime-picker:lang(zh),
kuc-datetime-picker:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-datetime-picker:lang(zh-TW),
kuc-datetime-picker:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-datetime-picker:lang(es),
kuc-datetime-picker:lang(es) * {
  font-family: sans-serif;
}
kuc-datetime-picker {
  font-size: 14px;
  display: inline-table;
  vertical-align: top;
  line-height: 1.5;
  max-width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));
  width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));
}
kuc-datetime-picker[hidden] {
  display: none;
}
.kuc-datetime-picker__group {
  border: none;
  padding: 0px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0px;
}
.kuc-datetime-picker__group__label {
  display: inline-block;
  padding: 4px 0px 8px 0px;
  white-space: nowrap;
}
.kuc-datetime-picker__group__label[hidden] {
  display: none;
}
.kuc-datetime-picker__group__inputs {
  display: flex;
  width: calc(var(--kuc-date-time-picker-date-input-width, 100px) + var(--kuc-date-time-picker-time-input-width, 85px));
}
.kuc-datetime-picker__group input[type=text].kuc-base-date__input {
  width: var(--kuc-date-time-picker-date-input-width, 100px);
  height: var(--kuc-date-time-picker-input-height, 40px);
  color: var(--kuc-date-time-picker-input-color, #333333);
  font-size: var(--kuc-date-time-picker-input-font-size, 14px);
}
.kuc-datetime-picker__group .kuc-base-time__group {
  max-width: var(--kuc-date-time-picker-time-input-width, 85px);
  width: var(--kuc-date-time-picker-time-input-width, 85px);
  font-size: var(--kuc-date-time-picker-input-font-size, 14px);
  height: var(--kuc-date-time-picker-input-height, 40px);
  color: var(--kuc-date-time-picker-input-color, #333333);
}
.kuc-datetime-picker__group .kuc-base-time__group input[type=text].kuc-base-time__group__hours,
.kuc-datetime-picker__group .kuc-base-time__group input[type=text].kuc-base-time__group__minutes,
.kuc-datetime-picker__group .kuc-base-time__group input.kuc-base-time__group__suffix,
.kuc-datetime-picker__group .kuc-base-time__group--focus  {
  color: var(--kuc-date-time-picker-input-color, #333333);
}
`;
