export const BASE_MOBILE_TIME_CSS = `
    kuc-base-mobile-time,
    kuc-base-mobile-time * {
        font-size: 13px;
        font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
        "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
        "Lucida Sans Unicode", Arial, Verdana, sans-serif;
    }
    :lang(zh) kuc-base-mobile-time,
    :lang(zh) kuc-base-mobile-time * {
        font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
        Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
        Verdana, sans-serif;
    }
    kuc-base-mobile-time {
        width: 100%;
        display: inline-block;
        vertical-align: top;
    }
    kuc-base-mobile-time[hidden] {
        display: none;
    }
    .kuc-base-mobile-time__group {
        padding: 0;
        margin: 0;
        height: 31.28px;
        border: 1px solid #b3b3b3;
        border-radius: 5.2px;
        box-sizing: border-box;
        background-color: #ffffff;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        box-shadow: 0px 1px 0px #ffffff, inset 0px 2px 3px #dadada;
    }
    .kuc-base-mobile-time__group--required {
        border-color: #cf4a38;
    }
    .kuc-base-mobile-time__group__hours {
        padding: 5.148px 7.722px;
    }
    .kuc-base-mobile-time__group__minutes {
        padding: 5.148px 7.722px;
        -webkit-flex-grow: 1;
        flex-grow: 1;
    }
    .kuc-base-mobile-time__group__hours,
    .kuc-base-mobile-time__group__minutes {
        font-size: 99%;
        height: 100%;
        color: #000000;
        border: none;
        border-radius: 5.148px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background-color: transparent;
    }
    .kuc-base-mobile-time__group__colon {
        color: #000000;
    }
    .kuc-base-mobile-time__group__hours:disabled
        + .kuc-base-mobile-time__group__colon {
        color: #999999;
        -webkit-text-fill-color: #999999;
        opacity: 1;
    }
    .kuc-base-mobile-time__group--disabled {
        color: #999999;
        -webkit-text-fill-color: #999999;
        background-color: #d5d7d9;
        opacity: 1;
    }
    .kuc-base-mobile-time__group__hours:disabled,
    .kuc-base-mobile-time__group__minutes:disabled {
        color: #999999;
        -webkit-text-fill-color: #999999;
        opacity: 1;
    }
    .kuc-base-mobile-time__group__hours:focus {
        outline: none;
    }
    .kuc-base-mobile-time__group__minutes:focus {
        outline: none;
    }
`;
