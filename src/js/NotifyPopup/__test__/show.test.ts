import NotifyPopup from '../index';

describe('Unit test NotifyPopup show', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('Function show run successfully', () => {
    const notifypopup = new NotifyPopup({isVisible: false});
    const container = notifypopup.render();
    document.body.appendChild(container);
    notifypopup.show();
    expect(container).toBeVisible();
  });
});