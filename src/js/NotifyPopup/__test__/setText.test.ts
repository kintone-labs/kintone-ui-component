import NotifyPopup from '../index';

describe('Unit test NortifyPopup setText', () => {
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

  test('Function setText run successfully', () => {
    const notifypopup = new NotifyPopup({});
    const container = notifypopup.render();
    notifypopup.setText('update');
    expect(container.textContent).toBe('update');
  });

  test('Function setText run successfully with empty text', () => {
    const notifypopup = new NotifyPopup({});
    const container = notifypopup.render();
    notifypopup.setText('');
    expect(container.textContent).toBe('');
  });

  test('Function setText run null with number', () => {
    const notifypopup = new NotifyPopup({});
    const container = notifypopup.render();
    // @ts-ignore
    notifypopup.setText(10);
    expect(container.textContent).toBe('');
  });

  test('Function setText run successfully with null', () => {
    const notifypopup = new NotifyPopup({});
    const container = notifypopup.render();
    // @ts-ignore
    notifypopup.setText(null);
    expect(container.textContent).toBe('');
  });
});