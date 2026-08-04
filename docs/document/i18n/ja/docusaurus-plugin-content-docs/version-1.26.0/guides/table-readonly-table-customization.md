---
id: table-readonly-table-customization
title: Table and ReadOnlyTable customization
sidebar_label: Table and ReadOnlyTable customization
---

## 概要
今回は Table と ReadOnlyTable コンポーネントの使い方の違い、活用とカスタマイズ方法について説明します。<br/>
以下のシナリオを想定しています。
1. 基本的な使い方 (*Table, ReadOnlyTable*)
2. 一つのセルに複数のコンポーネント表示 (*Table*)
3. 依存列 (*Table*)
4. 入れ子テーブル (*Table*)

## 使用するコンポーネント
- [Dropdown](../components/desktop/dropdown.md)
- [Table](../components/desktop/table.md)
- [Text](../components/desktop/text.md)
- [ReadOnlyTable](../components/desktop/readonly-table.md)
- [RadioButton](../components/desktop/radio-button.md)

## Table と ReadOnlyTable の使い方の違い
基本的に Table と ReadOnlyTable コンポーネントは同じような構造になっています。

ReadOnlyTable コンポーネントは、読み取り専用のテーブルを表示することができます。ユーザーが操作できないプレーンなテキストや HTMLElement を表示することができます。

一方で、Table コンポーネントは、データを変更したり行の追加/削除をしたりとテーブルのセルに表示されるコンポーネントを操作することができます。

最大の違いは、Table の `columns` プロパティが `render` プロパティ（`columns.render`）を持っていることです。このプロパティは、ユーザーが操作できるセルに表示する要素を設定することができます。さらに、`actionButton` プロパティ（`table.actionButton`）を使って行の追加/削除ボタンの表示/非表示を切り替えることができます。

## change イベント の理解
Table の `change` イベントの流れを理解すると、カスタマイズがしやすくなります。
:::info
テーブルのセルは、セルの中のコンポーネントの `change` イベントをリッスンして、新しい値をそれに対応する `field` の値に登録します。
:::

### アプリの作成
以下のフィールドを含むアプリを作成します。
- スペースフィールド（要素ID：space）

### JavaScript/CSS カスタマイズ
kintone UI Component の UMD ファイルをアプリに読み込んだ上で、以下のような実装をした JavaScript ファイルをアップロードします。<br/>
ファイルのアップロード方法などは、 [Quick Start](../getting-started/quick-start.md) をご覧ください。


### 基本的な Table の準備
Text コンポーネントで username を表示するような次の設定があるとします。

```javascript
const renderName = cellData => {
  const text = new Kuc.Text({ value: cellData });
  return text;
};

const columns = [{ title: 'Username', field: 'username', render: renderName }];
const data = [{ username: 'user1' }, { username: 'user2' }];

const table = new Kuc.Table({ columns, data });
const space = kintone.app.record.getSpaceElement('space');
space.appendChild(table);
```

### UI 上に表示
![render](/img/table-edit-text.gif)

最初のセルの入力値を編集した場合、Text コンポーネントは `detail.value = 'user1 edited'` を含む `change` イベントをトリガーします。
そしてテーブルは値を受け取り、`username` field に登録し直します。
テーブルのデータは以下のようになります。

```javascript
[{ username: 'user1 edited' }, { username: 'user2' }];
```

### event detail のカスタマイズ
テーブルが受け取る値をカスタマイズしたい場合、テーブルがその値を受け取る前に `change` イベント内で編集する必要があります。
上記のサンプルコードを使って、`renderName` 関数に以下の内容を追加します。

```javascript
...
const renderName = cellData => {
  const text = new Text({ value: cellData });

  // Modify the value before it bubble to table cell
  text.addEventListener('change', event => {
    event.detail.value = 'modified value'; // add any value you want set to username;
  });
  return text;
};
...
```

最初のセルの入力値を編集した場合、テーブルが受け取る値は必ず `'modified value'` になります。

## カスタマイズ例
### 基本的な使い方

#### ReadOnlyTable
![readonly-table](/img/readonly-table.png)

読み取り専用のテーブルを表示します。

<details className="toggle-panel">
  <summary>Show code</summary>

  ```js
  const columns = [
    {
      title: 'Name',
      field: 'name'
    },
    {
      title: 'Gender',
      field: 'gender'
    },
    {
      title: 'Address',
      field: 'address'
    }
  ];

  const data = [
    {
      name: 'John Brown',
      gender: 'male',
      address: 'osaka-japan'
    },
    {
      name: 'Jim Green',
      gender: 'female',
      address: 'tokyo-japan'
    },
    {
      name: 'Joe Black',
      gender: 'male',
      address: 'hochiminh-vietnam'
    }
  ];

  const readOnlyTable = new Kuc.ReadOnlyTable({ columns, data });
  const space = kintone.app.record.getSpaceElement('space');
  space.appendChild(readOnlyTable);
  ```
</details>

#### Table
![table](/img/table.png)

表示されているコンポーネントを操作できるテーブルを表示します。<br/>
`columns.render` 関数を使って、セルに表示されるコンポーネントを設定します。以下のサンプルコードの `renderGender` と `renderAddress` 関数を確認してください。

<details className="toggle-panel">
  <summary>Show code</summary>

  ```js
  // render gender column with dropdown
  const renderGender = cellData => {
    const radioButton = new Kuc.RadioButton({
      items: [
        {
          label: 'Male',
          value: 'male'
        },
        {
          label: 'Female',
          value: 'female'
        }
      ],
      itemLayout: 'vertical',
      value: cellData
    });

    return radioButton;
  };

  // render address column with dropdown
  const renderAddress = cellData => {
    const country = cellData.split('-')[1];
    const dropdownCountry = new Kuc.Dropdown({
      items: [
        {
          label: 'Viet Nam',
          value: 'vietnam'
        },
        {
          label: 'Japan',
          value: 'japan'
        }
      ],
      value: country
    });

    return dropdownCountry;
  };

  const columns = [
    {
      title: 'Name',
      field: 'name'
    },
    {
      title: 'Gender',
      field: 'gender',
      render: renderGender
    },
    {
      title: 'Address',
      field: 'address',
      render: renderAddress
    }
  ];

  const data = [
    {
      name: 'John Brown',
      gender: 'male',
      address: 'osaka-japan'
    },
    {
      name: 'Jim Green',
      gender: 'female',
      address: 'tokyo-japan'
    },
    {
      name: 'Joe Black',
      gender: 'male',
      address: 'hochiminh-vietnam'
    }
  ];

  const table = new Kuc.Table({ columns, data });
  const space = kintone.app.record.getSpaceElement('space');
  space.appendChild(table);
  ```
</details>

### 一つのセルに複数のコンポーネント表示（Table）
![multi-components](/img/two-component-in-cell.png)

`columns.render` 関数を使って、一つのセルに複数のコンポーネントを表示します。<br/>
以下のサンプルコードでは、同じセル内に 2つの Dropdown（city と country）を表示します。

<details className="toggle-panel">
  <summary>Show code</summary>

  ```js
  const renderAddress = (cellData, rowData) => {
    // the format of cellData: 'city-country'
    const city = cellData.split('-')[0];
    const country = cellData.split('-')[1];

    const dropdownCity = new Kuc.Dropdown({
      items: [
        {
          label: 'Tokyo',
          value: 'tokyo'
        },
        {
          label: 'Osaka',
          value: 'osaka'
        },
        {
          label: 'Ho Chi Minh',
          value: 'hochiminh'
        }
      ],
      value: city
    });
    dropdownCity.addEventListener('change', event => {
      const _country = rowData.address.split('-')[1];
      event.detail.value = `${event.detail.value}-${_country}`;
    });

    const dropdownCountry = new Kuc.Dropdown({
      items: [
        {
          label: 'Viet Nam',
          value: 'vietnam'
        },
        {
          label: 'Japan',
          value: 'japan'
        }
      ],
      value: country
    });
    dropdownCountry.addEventListener('change', event => {
      const _city = rowData.address.split('-')[0];
      event.detail.value = `${_city}-${event.detail.value}`;
    });

    const container = document.createElement('div');
    container.style.display = 'flex';
    container.appendChild(dropdownCountry);
    container.appendChild(dropdownCity);

    return container;
  };

  const data = [
    {
      name: 'John Brown',
      gender: 'male',
      address: 'osaka-japan'
    },
    {
      name: 'Jim Green',
      gender: 'female',
      address: 'tokyo-japan'
    },
    {
      name: 'Joe Black',
      gender: 'male',
      address: 'hochiminh-vietnam'
    }
  ];

  const columns = [
    {
      title: 'Name',
      field: 'name'
    },
    {
      title: 'Address',
      field: 'address',
      render: renderAddress
    }
  ];

  const table = new Kuc.Table({ columns, data });
  const space = kintone.app.record.getSpaceElement('space');
  space.appendChild(table);
  ```
</details>


### 依存列（Table）
![dependent-columns](/img/dependent-columns.gif)

依存列を作ります。<br/>
country Dropdown の値が変更されたら city Dropdown の値が変更されます。

<details className="toggle-panel">
  <summary>Show code</summary>

  ```js
  // Each country will have corresponding cities
  const relatedData = {
    japan: [
      { label: 'Tokyo', value: 'tokyo' },
      { label: 'Osaka', value: 'osaka' }
    ],
    vietnam: [
      { label: 'Ha Noi', value: 'hanoi' },
      { label: 'Ho Chi Minh', value: 'hochiminh' }
    ]
  };

  const renderCity = (cellData, rowData) => {
    const dropdownCity = new Kuc.Dropdown({
      items: [
        {
          label: 'Tokyo',
          value: 'tokyo'
        },
        {
          label: 'Ho Chi Minh',
          value: 'hochiminh'
        }
      ],
      value: cellData
    });

    // Logic update city when country column changed
    lastRenderedCountryComponent.addEventListener('change', event => {
      dropdownCity.items = relatedData[event.detail.value];
      rowData.city = '';
    });

    return dropdownCity;
  };

  let lastRenderedCountryComponent;
  const renderCountry = cellData => {
    const dropdownCountry = new Kuc.Dropdown({
      items: [
        {
          label: 'Viet Nam',
          value: 'vietnam'
        },
        {
          label: 'Japan',
          value: 'japan'
        }
      ],
      value: cellData
    });
    lastRenderedCountryComponent = dropdownCountry;
    return dropdownCountry;
  };

  const columns = [
    {
      title: 'Country',
      field: 'country',
      render: renderCountry
    },
    {
      title: 'City',
      field: 'city',
      render: renderCity
    }
  ];

  const data = [
    {
      country: 'japan',
      city: 'tokyo'
    },
    {
      country: 'vietnam',
      city: 'hochiminh'
    }
  ];

  const table = new Kuc.Table({ columns, data });
  const space = kintone.app.record.getSpaceElement('space');
  space.appendChild(table);
  ```
</details>

### 入れ子テーブル（Table）
![table-in-table](/img/table-in-table.png)

入れ子テーブルを作って各行にさらに詳細な情報を表示します。

<details className="toggle-panel">
  <summary>Show code</summary>

  ```js
  const renderCity = cellData => {
    const dropdown = new Kuc.Dropdown({
      items: [
        { label: 'Tokyo', value: 'tokyo' },
        { label: 'Ho Chi Minh', value: 'hochiminh' }
      ],
      value: cellData
    });

    return dropdown;
  };

  const renderCountry = cellData => {
    const renderSubTable = cellDataSubTable => {
      const dropdown = new Kuc.Dropdown({
        items: [
          { label: 'Japan', value: 'japan' },
          { label: 'Viet Nam', value: 'vietnam' }
        ],
        value: cellDataSubTable
      });
      return dropdown;
    };

    const columnsSubTable = [
      {
        title: 'Sub Table',
        field: 'dropdown',
        render: renderSubTable
      }
    ];

    const dataSubTable = [];
    for (let i = 0; i < cellData.split(',').length; i++) {
      dataSubTable.push({ dropdown: cellData.split(',')[i] });
    }
    const subTable = new Kuc.Table({
      columns: columnsSubTable,
      data: dataSubTable
    });

    subTable.addEventListener('change', subTableEvent => {
      const _dataSubTable = subTableEvent.detail.data;
      let countries = '';
      for (let i = 0; i < _dataSubTable.length; i++) {
        countries += _dataSubTable[i].dropdown;
        if (i !== _dataSubTable.length - 1) {
          countries += ',';
        }
      }
      subTableEvent.detail.value = countries;
    });
    return subTable;
  };

  const columns = [
    {
      title: 'Country',
      field: 'country',
      render: renderCountry
    },
    {
      title: 'City',
      field: 'city',
      render: renderCity
    }
  ];

  const data = [
    {
      city: 'tokyo',
      country: 'japan'
    },
    {
      city: 'hochiminh',
      country: 'vietnam'
    }
  ];

  const table = new Kuc.Table({ columns, data });
  const space = kintone.app.record.getSpaceElement('space');
  space.appendChild(table);
  ```
</details>

:::info
本記事は、 2023 年 2 月時点の kintone と Google Chrome で確認したものになります。<br/>
また、カスタマイズに使用した kintone UI Component のバージョンは、v1.9.0 です。
:::
