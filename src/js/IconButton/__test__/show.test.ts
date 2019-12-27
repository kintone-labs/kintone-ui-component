import IconButton from '../index';
import '@testing-library/jest-dom/extend-expect';

describe('Unit test IconButton show', () => {
  test('Function show run successfully', () => {
    const iconButton = new IconButton({isVisible: false});
    const container = iconButton.render();
    iconButton.show();
    expect(container).toBeVisible();
  });
});
