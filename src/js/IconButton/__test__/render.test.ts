import IconButton from '../index';

describe('Unit test IconButton render', () => {

  test('Render successfully without props', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    expect(['kuc-icon-btn', 'normal', 'gray', 'circle'].every(c => container.classList.contains(c))).toBe(true);
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
    expect(['kuc-icon-btn', 'normal', 'gray', 'circle'].every(c => container.classList.contains(c))).toBe(true);
    expect(container).not.toBeDisabled();
    expect(container).toBeVisible();
    expect(container.children[0].children[0].getAttribute('d')).toBe('M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
  });

});