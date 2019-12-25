import '@testing-library/jest-dom/extend-expect';
import Button from '../index';

const fs = require('fs');

describe('Snapshot test Button render', () => {
  test('Render successfully without props', () => {
    const button = new Button({});
    const container = button.render();
    fs.writeFileSync('./src/js/Button/__test__/snapshot/without_props.html', container.outerHTML);
  });

  test('Render successfully with full props', () => {
    // デフォルト値と異なる値をセットする。
    const button = new Button({
      text: 'Submit',
      type: 'submit',
      isDisabled: true,
      isVisible: false
    });
    const container = button.render();
    fs.writeFileSync('./src/js/Button/__test__/snapshot/with_full_props.html', container.outerHTML);
  });

  test('Render successfully with wrong props', () => {
    // 不正な値を設定した場合はデフォルト値がセットされることを確認する
    // @ts-ignore
    const button = new Button({
      type: 'button',
      isDisabled: 'abc',
      isVisible: 'abc'
    });
    const container = button.render();
    fs.writeFileSync('./src/js/Button/__test__/snapshot/with_wrong_props.html', container.outerHTML);
  });
});
