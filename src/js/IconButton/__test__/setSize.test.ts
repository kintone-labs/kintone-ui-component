import IconButton from '../index';
import '@testing-library/jest-dom/extend-expect';

describe('Unit test IconButton setSize', () => {

  test('Function setSize normal run successfully', () => {
    const iconButton = new IconButton({size: 'small'});
    const container = iconButton.render();
    iconButton.setSize('normal');
    expect(container.className).toContain('normal');
  });

  test('Function setSize small run successfully', () => {
    const iconButton = new IconButton({size: 'normal'});
    const container = iconButton.render();
    iconButton.setSize('small');
    expect(container.className).toContain('small');
  });

  test('Function setSize run successfully with empty', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    // @ts-ignore
    iconButton.setSize('');
    expect(container.className).toContain('normal');
  });

  test('Function setSize run successfully with null', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    // @ts-ignore
    iconButton.setSize(null);
    expect(container.className).toContain('normal');
  });
});