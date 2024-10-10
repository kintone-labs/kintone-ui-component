export const TIME_PICKER_CSS = `
kuc-time-picker,
kuc-time-picker *,
kuc-time-picker:lang(en),
kuc-time-picker:lang(en) * {
  font-family: sans-serif;
}
kuc-time-picker:lang(ja),
kuc-time-picker:lang(ja) * {
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
    sans-serif;
}
kuc-time-picker:lang(zh),
kuc-time-picker:lang(zh) * {
  font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", sans-serif;
}
kuc-time-picker:lang(zh-TW),
kuc-time-picker:lang(zh-TW) * {
  font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
    Hei,"Heiti SC"
}
kuc-time-picker:lang(es),
kuc-time-picker:lang(es) * {
  font-family: sans-serif;
}
kuc-time-picker {
  font-size: 14px;
  color: var(--kuc-time-picker-input-color, #333333);
  display: inline-table;
  max-width: var(--kuc-time-picker-input-width, 85px);
  width: var(--kuc-time-picker-input-width, 85px);
  vertical-align: top;
  line-height: 1.5;
}
.kuc-time-picker__group__input {
  position: relative;
}
kuc-time-picker[hidden] {
  display: none;
}
.kuc-time-picker__group {
  display: flex;
  flex-direction: column;
  border: none;
  padding: 0px;
  height: auto;
  margin: 0px;
}

.kuc-time-picker__group kuc-base-time {
  display: inline-flex;
  flex-direction: column;
}

.kuc-time-picker__group .kuc-base-time__group {
  max-width: var(--kuc-time-picker-input-width, 85px);
  width: var(--kuc-time-picker-input-width, 85px);
  font-size: var(--kuc-time-picker-input-font-size, 14px);
  height: var(--kuc-time-picker-input-height, 40px);
  color: var(--kuc-time-picker-input-color, #333333);
}
.kuc-time-picker__group .kuc-base-time__group input[type=text].kuc-base-time__group__hours,
.kuc-time-picker__group .kuc-base-time__group input[type=text].kuc-base-time__group__minutes,
.kuc-time-picker__group .kuc-base-time__group input.kuc-base-time__group__suffix,
.kuc-time-picker__group .kuc-base-time__group--focus {
  color: var(--kuc-time-picker-input-color, #333333);
}
.kuc-time-picker__group__label {
  padding: 4px 0px 8px 0px;
  display: inline-block;
  white-space: nowrap;
}
.kuc-time-picker__group__label[hidden] {
  display: none;
}
`;
