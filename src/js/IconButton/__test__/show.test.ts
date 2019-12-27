import IconButton from '../index';

describe('Unit test IconButton show', () => {
  test('Function show run successfully', () => {
    const iconButton = new IconButton({isVisible: false});
    const container = iconButton.render();
    iconButton.show();
    expect(container).toBeVisible();
  });
});
