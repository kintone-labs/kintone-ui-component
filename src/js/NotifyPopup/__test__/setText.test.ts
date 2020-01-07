import NotifyPopup from '../index';

describe('Unit test Button setText', () => {
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

  test('Function setText run successfully with number', () => {
    const notifypopup = new NotifyPopup({});
    const container = notifypopup.render();
    // @ts-ignore
    notifypopup.setText(10);
    expect(container.textContent).toBe('10');
  });

  test('Function setText run successfully with null', () => {
    const notifypopup = new NotifyPopup({});
    const container = notifypopup.render();
    // @ts-ignore
    notifypopup.setText(null);
    expect(container.textContent).toBe('');
  });
});