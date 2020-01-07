import '@testing-library/jest-dom/extend-expect';
import NotifyPopup from '../index';

describe('Unit test NotifyPopup show', () => {
  test('Function show run successfully', () => {
    const notifypopup = new NotifyPopup({isVisible: false});
    const container = notifypopup.render();
    notifypopup.show();
    expect(container).toBeVisible();
  });
});