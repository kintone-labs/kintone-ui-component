import IconButton from '../index';

describe('Unit test IconButton setShape', () => {

  test('Function setShape square run successfully', () => {
    const iconButton = new IconButton({shape: 'circle'});
    const container = iconButton.render();
    iconButton.setShape('square');
    expect(container.className).toContain('square');
  });

  test('Function setType circle run successfully', () => {
    const iconButton = new IconButton({shape: 'square'});
    const container = iconButton.render();
    iconButton.setShape('circle');
    expect(container.className).toContain('circle');
  });

  test('Function setShape run successfully with empty', () => {
    const iconButton = new IconButton({shape: 'square'});
    const container = iconButton.render();
    // @ts-ignore
    iconButton.setShape('');
    expect(container.className).toContain('circle');
  });

  test('Function setText run successfully with null', () => {
    const iconButton = new IconButton({shape: 'square'});
    const container = iconButton.render();
    // @ts-ignore
    iconButton.setShape(null);
    expect(container.className).toContain('circle');
  });

});