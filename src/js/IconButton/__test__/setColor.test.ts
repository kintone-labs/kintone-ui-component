import IconButton from '../index';

describe('Unit test IconButton setColor', () => {

  test('Function setColor red run successfully', () => {
    const iconButton = new IconButton({color: 'blue'});
    const container = iconButton.render();
    iconButton.setColor('red');
    expect(window.getComputedStyle(container).backgroundColor).toBe('rgb(228, 66, 52)');
    expect(container.className).toContain('red');
  });

  test('Function setColor green run successfully', () => {
    const iconButton = new IconButton({color: 'red'});
    const container = iconButton.render();
    iconButton.setColor('green');
    expect(window.getComputedStyle(container).backgroundColor).toBe('rgb(134, 187, 97)');
    expect(container.className).toContain('green');
  });

  test('Function setColor blue run successfully', () => {
    const iconButton = new IconButton({color: 'green'});
    const container = iconButton.render();
    iconButton.setColor('blue');
    expect(window.getComputedStyle(container).backgroundColor).toBe('rgb(45, 141, 214)');
    expect(container.className).toContain('blue');
  });

  test('Function setColor gray run successfully', () => {
    const iconButton = new IconButton({color: 'red'});
    const container = iconButton.render();
    iconButton.setColor('gray');
    expect(window.getComputedStyle(container).backgroundColor).toBe('rgb(238, 238, 238)');
    expect(container.className).toContain('gray');
  });

  test('Function setColor transparent run successfully', () => {
    const iconButton = new IconButton({color: 'blue'});
    const container = iconButton.render();
    iconButton.setColor('transparent');
    expect(window.getComputedStyle(container).backgroundColor).toBe('transparent');
    expect(container.className).toContain('transparent');
  });

  test('Function setColor run successfully with empty', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    // @ts-ignore
    iconButton.setColor('');
    expect(container.className).toContain('gray');
  });

  test('Function setColor run successfully with wrong value', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    // @ts-ignore
    iconButton.setColor('#f1c40f');
    expect(container.className).toContain('gray');
  });

  test('Function setColor run successfully with null', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    // @ts-ignore
    iconButton.setColor(null);
    expect(container.className).toContain('gray');
  });

});