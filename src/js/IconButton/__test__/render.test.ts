import IconButton from '../index';

describe('Unit test IconButton render', () => {

  test('Render successfully without props', () => {
    const iconButton = new IconButton();
    const container = iconButton.render();
    expect(['kuc-icon-btn', 'normal', 'gray', 'circle'].every(c => container.classList.contains(c))).toBe(true);
    expect(container.classList.length).toBe(4);
    expect(container).not.toBeDisabled();
    expect(container).toBeVisible();
    expect(container.children[0].children[0].getAttribute('d')).toBe('M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
  });

  test('Render successfully with full props', () => {
    const iconButton = new IconButton({
      color: 'green',
      type: 'remove',
      size: 'small',
      shape: 'square',
      isDisabled: true,
      isVisible: false
    });
    const container = iconButton.render();
    expect(['kuc-icon-btn', 'small', 'green', 'square'].every(c => container.classList.contains(c))).toBe(true);
    expect(container.classList.length).toBe(4);
    expect(container).toBeDisabled();
    expect(container).not.toBeVisible();
    expect(container.children[0].children[0].getAttribute('d')).toBe('M19,13H5V11H19V13Z');
  });

  test('Render successfully with wrong props', () => {
    // @ts-ignore
    const iconButton = new IconButton({
      color: 'gold',
      type: 'hoge',
      size: 'medium',
      shape: 'triangle',
      isDisabled: 'abc',
      isVisible: 'abc'
    });
    const container = iconButton.render();
    expect(['kuc-icon-btn', 'normal', 'gray', 'circle'].every(c => container.classList.contains(c))).toBe(true);
    expect(container.classList.length).toBe(4);
    expect(container).not.toBeDisabled();
    expect(container).toBeVisible();
    expect(container.children[0].children[0].getAttribute('d')).toBe('M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
  });

  test('Render successfully with red color', () => {
    const iconButton = new IconButton({
      color: 'red'
    });
    const container = iconButton.render();
    expect(container.className).toContain('red');
    expect(window.getComputedStyle(container).backgroundColor).toBe('rgb(228, 66, 52)');
  });

  test('Render successfully with green color', () => {
    const iconButton = new IconButton({
      color: 'green'
    });
    const container = iconButton.render();
    expect(container.className).toContain('green');
    expect(window.getComputedStyle(container).backgroundColor).toBe('rgb(134, 187, 97)');
  });

  test('Render successfully with blue color', () => {
    const iconButton = new IconButton({
      color: 'blue'
    });
    const container = iconButton.render();
    expect(container.className).toContain('blue');
    expect(window.getComputedStyle(container).backgroundColor).toBe('rgb(45, 141, 214)');
  });

  test('Render successfully with gray color', () => {
    const iconButton = new IconButton({
      color: 'gray'
    });
    const container = iconButton.render();
    expect(container.className).toContain('gray');
    expect(window.getComputedStyle(container).backgroundColor).toBe('rgb(238, 238, 238)');
  });

  test('Render successfully with transparent', () => {
    const iconButton = new IconButton({
      color: 'transparent'
    });
    const container = iconButton.render();
    expect(container.className).toContain('transparent');
    expect(window.getComputedStyle(container).backgroundColor).toBe('transparent');
  });

  test('Render successfully with circle shape', () => {
    const iconButton = new IconButton({
      shape: 'circle'
    });
    const container = iconButton.render();
    expect(container.className).toContain('circle');
  });

  test('Render successfully with square shape', () => {
    const iconButton = new IconButton({
      shape: 'square'
    });
    const container = iconButton.render();
    expect(container.className).toContain('square');
  });

  test('Render successfully with normal size', () => {
    const iconButton = new IconButton({
      size: 'normal'
    });
    const container = iconButton.render();
    expect(container.className).toContain('normal');
  });

  test('Render successfully with small size', () => {
    const iconButton = new IconButton({
      size: 'small'
    });
    const container = iconButton.render();
    expect(container.className).toContain('small');
  });

  test('Render successfully with insert type', () => {
    const iconButton = new IconButton({
      type: 'insert'
    });
    const container = iconButton.render();
    expect(container.children[0].children[0].getAttribute('d'))
      .toBe('M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
  });

  test('Render successfully with remove type', () => {
    const iconButton = new IconButton({
      type: 'remove'
    });
    const container = iconButton.render();
    expect(container.children[0].children[0].getAttribute('d'))
      .toBe('M19,13H5V11H19V13Z');
  });

  test('Render successfully with close type', () => {
    const iconButton = new IconButton({
      type: 'close'
    });
    const container = iconButton.render();
    expect(container.children[0].children[0].getAttribute('d'))
      .toBe('M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z');
  });

  test('Render successfully with file type', () => {
    const iconButton = new IconButton({
      type: 'file'
    });
    const container = iconButton.render();
    expect(container.children[0].children[0].getAttribute('d'))
      .toBe('M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2H6Z');
  });

  test('Render successfully with right type', () => {
    const iconButton = new IconButton({
      type: 'right'
    });
    const container = iconButton.render();
    expect(container.children[0].children[0].getAttribute('d'))
      .toBe('M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z');
  });

  test('Render successfully with left type', () => {
    const iconButton = new IconButton({
      type: 'left'
    });
    const container = iconButton.render();
    expect(container.children[0].children[0].getAttribute('d'))
      .toBe('M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z');
  });
});