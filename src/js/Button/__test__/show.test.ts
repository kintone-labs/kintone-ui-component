import Button from '../index';

describe('Unit test Button show', () => {
  test('Function show run successfully', () => {
    const button = new Button({isVisible: false});
    const container = button.render();
    button.show();
    expect(container).toBeVisible();
  });
});
