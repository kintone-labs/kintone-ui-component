export const TIMEPICKER_CSS = `
    kuc-time-picker,
    kuc-time-picker *,
    :lang(en) kuc-time-picker,
    :lang(en) kuc-time-picker * {
        font-family: "HelveticaNeueW02-45Ligh", Arial,
        "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    }
    :lang(ja) kuc-time-picker,
    :lang(ja) kuc-time-picker * {
        font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
        sans-serif;
    }
    :lang(zh) kuc-time-picker,
    :lang(zh) kuc-time-picker * {
        font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
        Hei, "Heiti SC", sans-serif;
    }
    kuc-time-picker {
        font-size: 14px;
        color: #333333;
        display: inline-block;
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
    .kuc-time-picker__group__label {
        padding: 4px 0px 8px 0px;
        display: inline-block;
        white-space: nowrap;
    }
    .kuc-time-picker__group__label[hidden] {
        display: none;
    }
    .kuc-time-picker__group__label__required-icon {
        font-size: 20px;
        vertical-align: -3px;
        color: #e74c3c;
        margin-left: 4px;
        line-height: 1;
    }
    .kuc-time-picker__group__label__required-icon[hidden] {
        display: none;
    }
    .kuc-time-picker__group__error {
        line-height: 1.5;
        padding: 4px 18px;
        box-sizing: border-box;
        background-color: #e74c3c;
        color: #ffffff;
        margin: 8px 0px;
        word-break: break-all;
        white-space: normal;
    }
    .kuc-time-picker__group__error[hidden] {
        display: none;
    }
`;
