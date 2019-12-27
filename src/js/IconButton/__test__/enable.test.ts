import IconButton from '../index';

describe('Unit test IconButton enable', () => {

  test('Function enable run successfully', () => {
    const iconButton = new IconButton({isDisabled: true});
    const container = iconButton.render();
    iconButton.enable();
    expect(container).not.toBeDisabled();
  });

});
