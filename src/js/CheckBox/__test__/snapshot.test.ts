import CheckBox from '../index';
const fs = require('fs');

describe('Snapshot test CheckBox render', () => {
  test('Render successfully without props', () => {
    const checkBox = new CheckBox({});
    const container = checkBox.render();
    fs.writeFileSync('./src/js/CheckBox/__test__/snapshot/without_props.html', container.outerHTML);
  });

  test('Render successfully with full props', () => {
    // デフォルト値と異なる値をセットする。
    const checkBox = new CheckBox({
      items: [
        {
          label: 'Orange',
          value: 'orange',
          isDisabled: false
        },
        {
          label: 'Banana',
          value: 'banana',
          isDisabled: true
        },
        {
          label: 'Lemon',
          value: 'lemon',
          isDisabled: true
        },
      ],
      value: ['orange', 'banana'],
      isDisabled: true,
      isVisible: false
    });
    const container = checkBox.render();
    fs.writeFileSync('./src/js/CheckBox/__test__/snapshot/with_full_props.html', container.outerHTML);
  });

  test('Render successfully with wrong props', () => {
    // 不正な値を設定した場合はデフォルト値がセットされることを確認する
    // ただしcheckboxの場合、itemとvalueは入力チェックを行うため値をセットしない
    // @ts-ignore
    const checkBox = new CheckBox({
      isDisabled: 'abc',
      isVisible: 'abc'
    });
    const container = checkBox.render();
    fs.writeFileSync('./src/js/CheckBox/__test__/snapshot/with_wrong_props.html', container.outerHTML);
  });
});
