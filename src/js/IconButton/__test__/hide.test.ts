import IconButton from '../index';

describe('Unit test IconButton hide', () => {

  test('Function hide run successfully', () => {
    const iconButton = new IconButton({isVisible: true});
    const container = iconButton.render();
    iconButton.hide();
    expect(container).not.toBeVisible();
  });

});
