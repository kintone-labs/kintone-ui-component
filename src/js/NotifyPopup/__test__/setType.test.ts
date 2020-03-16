import NotifyPopup from '../index';

describe('Unit test NortifyPopup setType', () => {
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

  test('Function setType error run successfully', () => {
    const notifypopup = new NotifyPopup({type: 'success'});
    const container = notifypopup.render();
    notifypopup.setType('error');
    expect(container.classList.length).toBe(2);
    expect(['kuc-notify', 'bg-danger'].every(c => container.classList.contains(c))).toBe(true);
  });

  test('Function setType success run successfully', () => {
    const notifypopup = new NotifyPopup({type: 'error'});
    const container = notifypopup.render();
    notifypopup.setType('success');
    expect(container.classList.length).toBe(2);
    expect(['kuc-notify', 'bg-success'].every(c => container.classList.contains(c))).toBe(true);
  });

  test('Function setType info run successfully', () => {
    const notifypopup = new NotifyPopup({type: 'success'});
    const container = notifypopup.render();
    notifypopup.setType('info');
    expect(container.classList.length).toBe(2);
    expect(['kuc-notify', 'bg-info'].every(c => container.classList.contains(c))).toBe(true);
  });

  test('Function setType empty run successfully', () => {
    const notifypopup = new NotifyPopup({type: 'success'});
    const container = notifypopup.render();
    // @ts-ignore
    notifypopup.setType('');
    expect(container.classList.length).toBe(2);
    expect(['kuc-notify', 'bg-danger'].every(c => container.classList.contains(c))).toBe(true);
  });

  test('Function setType null run successfully', () => {
    const notifypopup = new NotifyPopup({type: 'success'});
    const container = notifypopup.render();
    // @ts-ignore
    notifypopup.setType(null);
    expect(container.classList.length).toBe(2);
    expect(['kuc-notify', 'bg-danger'].every(c => container.classList.contains(c))).toBe(true);
  });
});