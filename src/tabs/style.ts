export const TABS_CSS = `
  kuc-tabs,
  kuc-tabs *,
  kuc-tabs:lang(en),
  kuc-tabs:lang(en) * {
    font-family: "HelveticaNeueW02-45Ligh", Arial,
      "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
  }
  kuc-tabs:lang(ja),
  kuc-tabs:lang(ja) * {
    font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
      sans-serif;
  }
  kuc-tabs:lang(zh),
  kuc-tabs:lang(zh) * {
    font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
      Hei, "Heiti SC", sans-serif;
  }
  kuc-tabs:lang(zh-TW),
  kuc-tabs:lang(zh-TW) * {
    font-family: "微軟正黑體","Microsoft JhengHei","新宋体",NSimSun,STHeiti,
      Hei,"Heiti SC",sans-serif;
  }
  kuc-tabs {
    display: inline-block;
  }
  kuc-tabs[hidden] {
    display: none;
  }
  .kuc-tabs__group__tab-list {
    display: flex;
    flex: 1;
    padding: 16px 16px 0 16px;
    margin: 0;
    list-style: none;
  }
  .kuc-tabs__group__tab-list__tab {
    min-height: 48px;
  }
  .kuc-tabs__group__tab-list__tab__button {
    min-width: 200px;
    height: 100%;
    margin: 0;
    padding: 0 24px;
    background-color: #d4d7d7;
    color: #333333;
    border-style: none;
    border-top: 1px solid #c7cbcb;
    border-left: 1px solid #c7cbcb;
    box-shadow: 1px 0 3px #c7cbcb inset;
    cursor: pointer;
    line-height: 1.5;
    word-wrap: break-word;
  }
  .kuc-tabs__group__tab-list__tab__button:last-of-type {
    border-right: 1px solid #c7cbcb;
  }
  .kuc-tabs__group__tab-list__tab__button:disabled {
    color: GrayText;
    cursor: default;
  }
  .kuc-tabs__group__tab-list__tab__button:focus {
    outline: none;
    border: 1px solid #3498db;
  }
  .kuc-tabs__group__tab-list__tab__button--click:focus{
    border: none;
    border-top: 1px solid #c7cbcb;
    border-left: 1px solid #c7cbcb;
    border-right: 1px solid #c7cbcb;
  }
  .kuc-tabs__group__tab-list__tab__button[aria-selected="true"] {
    background-color: #ffffff;
    box-shadow: none;
  }
  .kuc-tabs__group__tab-panel {
    display:block;
    padding: 0;
    border-top: 0;
  }
  .kuc-tabs__group__tab-panel[border-visible] {
    box-shadow: 0 0 8px 2px rgb(0 0 0 / 10%);
  }
  .kuc-tabs__group__tab-panel__content[hidden]{
    display:none;
  }
`;
