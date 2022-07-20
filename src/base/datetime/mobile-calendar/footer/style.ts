export const BASE_MOBILE_CALENDAR_FOOTER_CSS = `
kuc-base-mobile-datetime-calendar-footer,
kuc-base-mobile-datetime-calendar-footer * {
    font-family: "メイリオ", Meiryo, "Hiragino Kaku Gothic ProN",
    "ヒラギノ角ゴ ProN W3", "ＭＳ Ｐゴシック", "Lucida Grande",
    "Lucida Sans Unicode", Arial, Verdana, sans-serif;
}

:lang(zh) kuc-base-mobile-datetime-calendar-footer,
:lang(zh) kuc-base-mobile-datetime-calendar-footer * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
    Hei, "Heiti SC", "Lucida Grande", "Lucida Sans Unicode", Arial,
    Verdana, sans-serif;
}
.kuc-base-mobile-datetime-calendar-footer__group {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0;
    white-space: nowrap;
}
.kuc-base-mobile-datetime-calendar-footer__group__button {
    background: transparent;
    border: 1px solid transparent;
    color: #206694;
    height: 40px;
    cursor: pointer;
    font-size: 14px;
    outline: none;
    padding: 0;
    margin: 0;
    font-weight: 700;
}
.kuc-base-mobile-datetime-calendar-footer__group__center {
    width: 100%;
}
`;
