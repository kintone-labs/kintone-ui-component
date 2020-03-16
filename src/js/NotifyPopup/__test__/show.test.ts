import NotifyPopup from '../index';

describe('Unit test NotifyPopup show', () => {
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
    const notifypopup = new NotifyPopup({isVisible: false});
    const container = notifypopup.render();
    notifypopup.show();
    expect(container).toBeVisible();
  });
});