import IconButton from '../index';

describe('Unit test IconButton disable', () => {

  test('Function disable run successfully', () => {
    const iconButton = new IconButton({isDisabled: false});
    const container = iconButton.render();
    iconButton.disable();
    expect(container).toBeDisabled();
  });

});
