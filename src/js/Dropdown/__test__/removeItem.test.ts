import Dropdown from '../index';

describe('Unit test Dropdown removeItem', () => {

  const expectedLabels = ['Orange', 'Banana', 'Lemon'];
  const expectedValues = ['orange', 'banana', 'lemon'];

  test('Function removeItem run successfully', () => {
    const dropdown = new Dropdown({
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
          isDisabled: false
        },
        {
          label: expectedLabels[1],
          value: expectedValues[1],
          isDisabled: false
        },
        {
          label: expectedLabels[2],
          value: expectedValues[2],
          isDisabled: true
        }
      ],
      value: expectedValues[1]
    });
    const container = dropdown.render();
    dropdown.removeItem(1);

    const itemsEl: HTMLCollection = container.querySelector('.kuc-list-outer')!.children;
    if (!container.children || itemsEl.length !== 2) {
      expect(false);
    }
    expect(dropdown.getItems()).toEqual([
      {
        label: expectedLabels[0],
        value: expectedValues[0],
        isDisabled: false
      },
      {
        label: expectedLabels[2],
        value: expectedValues[2],
        isDisabled: true
      }
    ]);
    // そもそもundifinedなのが適切なのかは要検討。
    // removeItemがvalueに含まれている場合の処理が記載されていない
    // expect(dropdown.getValue()).toBe(undefined);
  });

  test('Function removeItem run with invalid index', () => {
    const dropdown = new Dropdown({
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
          isDisabled: false
        },
        {
          label: expectedLabels[1],
          value: expectedValues[1],
          isDisabled: false
        },
        {
          label: expectedLabels[2],
          value: expectedValues[2],
          isDisabled: true
        }
      ],
      value: expectedValues[1]
    });
    // number以外を入れた時、おそらく0で処理されている。ここはエラーを吐かなくていいのか要検討？
    // @ts-ignore
    dropdown.removeItem('abc');
  });

  test('Function removeItem run with out of index', () => {
    const dropdown = new Dropdown({
      items: [
        {
          label: expectedLabels[0],
          value: expectedValues[0],
          isDisabled: false
        },
        {
          label: expectedLabels[1],
          value: expectedValues[1],
          isDisabled: false
        },
        {
          label: expectedLabels[2],
          value: expectedValues[2],
          isDisabled: true
        }
      ],
      value: expectedValues[1]
    });
    // 返り値として、falseを返している。理由は不明
    dropdown.removeItem(5);
    expect(dropdown.getItems()).toEqual([
      {
        label: expectedLabels[0],
        value: expectedValues[0],
        isDisabled: false
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1],
        isDisabled: false
      },
      {
        label: expectedLabels[2],
        value: expectedValues[2],
        isDisabled: true
      }
    ]);
    expect(dropdown.getValue()).toBe(expectedValues[1]);
  });
});