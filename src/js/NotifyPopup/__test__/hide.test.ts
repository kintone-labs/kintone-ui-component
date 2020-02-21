import NotifyPopup from '../index';

describe('Unit test NotifyPopup hide', () => {
  test('Function hide run successfully', () => {
    const notifypopup = new NotifyPopup({isVisible: true});
    const container = notifypopup.render();
    notifypopup.hide();
    expect(container).not.toBeVisible();
  });
});