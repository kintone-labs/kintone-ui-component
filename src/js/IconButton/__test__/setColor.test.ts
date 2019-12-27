import IconButton from '../index';
import '@testing-library/jest-dom/extend-expect';

describe('Unit test IconButton setColor', () => {
  test('Function setColor run successfully', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    iconButton.setColor('red');
    expect(container.className).toContain('red');
  });

  test('Function setText run successfully with empty', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    // @ts-ignore
    iconButton.setColor('');
    expect(container.className).toContain('gray');
  });

  test('Function setText run successfully with colorCode', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    // @ts-ignore
    iconButton.setColor('#f1c40f');
    expect(container.className).toContain('gray');
  });

  test('Function setText run successfully with null', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    // @ts-ignore
    iconButton.setColor(null);
    expect(container.className).toContain('gray');
  });
});