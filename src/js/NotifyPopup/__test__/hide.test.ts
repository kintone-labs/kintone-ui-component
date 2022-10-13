import NotifyPopup from '../index';

describe('Unit test NotifyPopup hide', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
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