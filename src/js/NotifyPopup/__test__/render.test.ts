import NotifyPopup from '../index';

/* eslint no-unused-expressions: "off" */
describe('unit test NotifyPopup render', () => {
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

  test('Render successfully without option', () => {
    const notifyPopup = new NotifyPopup();
    const container = notifyPopup.render();
    expect(container.classList.length).toBe(2);
    expect(['kuc-notify', 'bg-danger'].every(c => container.classList.contains(c))).toBe(true);
    expect(container.getElementsByClassName('kuc-close-button')).toBeTruthy;
    expect(window.getComputedStyle(container).backgroundColor).toBe('rgb(231, 76, 60)');
    expect(container).toBeVisible();
  });

  test('Render successfully with full option_success', () => {
    const notifyPopup = new NotifyPopup({
      text: 'testString',
      type: 'success',
      isVisible: false
    });
    const container = notifyPopup.render();
    expect(container.classList.length).toBe(2);
    expect(['kuc-notify', 'bg-success'].every(c => container.classList.contains(c))).toBe(true);
    expect(container.textContent).toBe('testString');
    expect(window.getComputedStyle(container).backgroundColor).toBe('rgb(145, 195, 108)');
    expect(container).not.toBeVisible();
  });

  test('Render successfully with full option_info', () => {
    const notifyPopup = new NotifyPopup({
      text: 'testString',
      type: 'info',
      isVisible: true
    });
    const container = notifyPopup.render();
    expect(container.classList.length).toBe(2);
    expect(['kuc-notify', 'bg-info'].every(c => container.classList.contains(c))).toBe(true);
    expect(container.textContent).toBe('testString');
    expect(window.getComputedStyle(container).backgroundColor).toBe('rgb(56, 151, 217)');
    expect(container).toBeVisible();
  });

  test('Render successfully with wrong option', () => {
    // @ts-ignore
    const notifyPopup = new NotifyPopup({
      text: 123,
      type: 'abc',
      isVisible: 'abc'
    });
    const container = notifyPopup.render();
    expect(container.classList.length).toBe(2);
    expect(['kuc-notify', 'bg-danger'].every(c => container.classList.contains(c))).toBe(true);
    expect(container.textContent).toBe('');
    expect(window.getComputedStyle(container).backgroundColor).toBe('rgb(231, 76, 60)');
    expect(container).toBeVisible();
  });
});