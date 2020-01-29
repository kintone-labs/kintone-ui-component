import Button from '../index';

describe('Unit test Button hide', () => {
  test('Function hide run successfully', () => {
    const button = new Button({isVisible: true});
    const container = button.render();
    button.hide();
    expect(container).not.toBeVisible();
  });
});
