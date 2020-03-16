import NotifyPopup from '../index';

describe('Unit test NotifyPopup hide', () => {
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
    const notifypopup = new NotifyPopup({isVisible: true});
    const container = notifypopup.render();
    notifypopup.hide();
    expect(container).not.toBeVisible();
  });
});