export const TABLE_CSS = `
    kuc-table,
    kuc-table *,
    :lang(en) kuc-table,
    :lang(en) kuc-table * {
        font-family: "HelveticaNeueW02-45Ligh", Arial,
        "Hiragino Kaku Gothic ProN", Meiryo, sans-serif;
    }
    :lang(ja) kuc-table,
    :lang(ja) kuc-table * {
        font-family: "メイリオ", "Hiragino Kaku Gothic ProN", Meiryo,
        sans-serif;
    }
    :lang(zh) kuc-table,
    :lang(zh) kuc-table * {
        font-family: "微软雅黑", "Microsoft YaHei", "新宋体", NSimSun, STHeiti,
        Hei, "Heiti SC", sans-serif;
    }
    kuc-table {
        font-size: 14px;
        color: #333333;
        display: block;
    }
    kuc-table[hidden] {
        display: none;
    }
    kuc-table kuc-* {
        line-height: 1;
    }
    .kuc-table__table {
        border-collapse: collapse;
    }
    .kuc-table__table__header {
        border-width: 0px 1px;
        border-color: #3498db;
        border-style: solid;
        border-right: 0;
    }
    .kuc-table__table__header__cell {
        box-sizing: border-box;
        font-size: 12px;
        font-weight: 400;
        background-color: #3498db;
        color: #ffffff;
        height: 40px;
        padding: 4px 8px;
        text-align: left;
        white-space: nowrap;
    }
    .kuc-table__table__header__cell[hidden] {
        display: none;
    }
    .kuc-table__table__header__cell__label {
        padding: 4px 8px;
        font-weight: 400;
        font-size: 12px;
    }
    .kuc-table__table__body__row__cell-data {
        border-color: #e3e7e8;
        border-style: solid;
        border-width: 1px;
        padding: 8px 8px;
        vertical-align: top;
    }
    .kuc-table__table__body__row__cell-data[hidden] {
        display: none;
    }
    .kuc-table__table__body__row__action {
        display: flex;
        vertical-align: top;
    }
    .kuc-table__table__body__row__action-add {
        margin-left: 12px;
        background: url(https://static.cybozu.com/contents/k/image/argo/app/subtable/add-active.png)
        no-repeat center center;
        border: 1px solid transparent;
    }
    .kuc-table__table__body__row__action-remove {
        margin-left: 4px;
        background: url(https://static.cybozu.com/contents/k/image/argo/app/subtable/delete.png)
        no-repeat center center;
        border: 1px solid transparent;
    }
    .kuc-table__table__body__row__action-remove:hover {
        background-image: url(https://static.cybozu.com/contents/k/image/argo/app/subtable/delete-active.png)
    }
    .kuc-table__table__body__row__action-add,
    .kuc-table__table__body__row__action-remove {
        display: inline-block;
        width: 24px;
        height: 24px;
        cursor: pointer;
    }
    .kuc-table__table caption {
        text-align: left;
        margin-bottom: 6px;
    }
`;
