import IconButton from '../index';
import '@testing-library/jest-dom/extend-expect';

describe('Unit test IconButton render', () => {

  test('Render successfully without props', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    // largeとgrayの間のspaceが2つ空いているのでtobeでは行わなかった。 どちらの方がstrictになるのかに関しては検討
    expect(['kuc-icon-btn', 'large', 'gray', 'circle'].every(c => container.classList.contains(c))).toBe(true);
    expect(container).not.toBeDisabled();
    expect(container).toBeVisible();
    expect(container.children[0].children[0].getAttribute('d')).toBe('M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
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
    expect(['kuc-icon-btn', 'small', 'green', 'normal'].every(c => container.classList.contains(c))).toBe(true);
    expect(container).toBeDisabled();
    expect(container).not.toBeVisible();
    expect(container.children[0].children[0].getAttribute('d')).toBe('M19,13H5V11H19V13Z');
  });

  test('Render successfully with wrong props', () => {
    // @ts-ignore
    const button = new IconButton({
      color: 'gold',
      type: 'hoge',
      size: 'medium',
      shape: 'triangle',
      isDisabled: 'abc',
      isVisible: 'abc'
    });
    const container = button.render();
    // faildedする。sizeにはnormalが入るべきだが、largeが入っている。 index.ts 70 line
    expect(['kuc-icon-btn', 'gray', 'circle', 'normal'].every(c => container.classList.contains(c))).toBe(true);
    // disabled="abc"になる。要修正。
    expect(container).not.toBeDisabled();
    expect(container).toBeVisible();
    expect(container.children[0].children[0].getAttribute('d')).toBe('M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
  });
});
