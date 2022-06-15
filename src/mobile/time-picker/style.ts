export const MOBILE_TIME_PICKER_CSS = `
    kuc-mobile-time-picker,
    kuc-mobile-time-picker * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
        "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
        "Lucida Sans Unicode", Arial, Verdana, sans-serif;
    }
    :lang(zh) kuc-mobile-time-picker,
    :lang(zh) kuc-mobile-time-picker * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
        Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
        Verdana, sans-serif;
    }
    kuc-mobile-time-picker {
    font-size: 13px;
    display: inline-block;
    vertical-align: top;
    width: 100%;
    }
    kuc-mobile-time-picker[hidden] {
    display: none;
    }
    .kuc-mobile-time-picker__group__label {
    display: inline-block;
    font-weight: bold;
    line-height: 1.5;
    padding: 0px;
    margin: 0 0 4px 0;
    white-space: nowrap;
    }
    .kuc-mobile-time-picker__group__label[hidden] {
    display: none;
    }
    .kuc-base-mobile-time__group__wrapper {
    padding-left: 0.5em;
    max-width: 10px;
    }
`;
