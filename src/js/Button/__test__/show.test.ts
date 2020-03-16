import Button from '../index';

describe('Unit test Button show', () => {
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
  test('Function show run successfully', () => {
    const button = new Button({isVisible: false});
    const container = button.render();
    button.show();
    expect(container).toBeVisible();
  });
});
