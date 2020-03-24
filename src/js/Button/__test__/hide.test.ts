import Button from '../index';

describe('Unit test Button hide', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });
  test('Function hide run successfully', () => {
    const button = new Button({isVisible: true});
    const container = button.render();
    button.hide();
    expect(container).not.toBeVisible();
  });
});
