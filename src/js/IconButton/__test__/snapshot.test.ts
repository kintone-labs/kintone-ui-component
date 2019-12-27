import IconButton from '../index';
const fs = require('fs');

describe('Snapshot test Button render', () => {
  test('Render successfully without props', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    fs.writeFileSync('./src/js/IconButton/__test__/snapshot/without_props.html', container.outerHTML);
  });

  test('Render successfully with full props', () => {
    const iconButton = new IconButton({
      color: 'green',
      type: 'remove',
      size: 'small',
      shape: 'normal',
      isDisabled: true,
      isVisible: false
    });
    const container = iconButton.render();
    fs.writeFileSync('./src/js/IconButton/__test__/snapshot/with_full_props.html', container.outerHTML);
  });

  test('Render successfully with wrong props', () => {
    // 不正な値を設定した場合はデフォルト値がセットされることを確認する
    // @ts-ignore
    const button = new IconButton({
      color: 'gold',
      size: 'medium',
      shape: 'triangle',
      type: 'hoge',
      isDisabled: 'abc',
      isVisible: 'abc'
    });
    const container = button.render();
    fs.writeFileSync('./src/js/IconButton/__test__/snapshot/with_wrong_props.html', container.outerHTML);
  });
});
