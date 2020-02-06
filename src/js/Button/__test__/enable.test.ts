import Button from '../index';

describe('Unit test Button enable', () => {
  test('Function enable run successfully', () => {
    const button = new Button({isDisabled: false});
    const container = button.render();
    button.enable();
    expect(container).not.toBeDisabled();
  });
});
