import IconButton from '../index';
import '@testing-library/jest-dom/extend-expect';

describe('Unit test IconButton hide', () => {
  test('Function hide run successfully', () => {
    const iconButton = new IconButton({isVisible: true});
    const container = iconButton.render();
    iconButton.hide();
    expect(container).not.toBeVisible();
  });
});
