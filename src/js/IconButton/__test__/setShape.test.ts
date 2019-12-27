import IconButton from '../index';

describe('Unit test IconButton setShape', () => {

  test('Function setShape normal run successfully', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    iconButton.setShape('normal');
    expect(container.className).toContain('normal');
  });

  test('Function setType circle run successfully', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    iconButton.setShape('circle');
    expect(container.className).toContain('circle');
  });

  test('Function setShape run successfully with empty', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    // @ts-ignore
    iconButton.setShape('');
    expect(container.className).toContain('circle');
  });

  test('Function setText run successfully with null', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    // @ts-ignore
    iconButton.setShape(null);
    expect(container.className).toContain('circle');
  });

});