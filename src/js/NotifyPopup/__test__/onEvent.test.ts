import NotifyPopup from '../index';
import {fireEvent} from '@testing-library/react';

describe('Unit test NotifyPopup onEvent', () => {
  test('Function onClick event run successfully', () => {
    const notifypopup = new NotifyPopup({});
    const container = notifypopup.render();
    notifypopup.on('click', (e: any) => {
      if (e.target) {
        notifypopup.setText(e.target.value);
      }
    });
    fireEvent.click(container, {target: {value: 'on click'}});
    expect(container.textContent).toBe('on click');
  });

  describe('Unit test Button setText', () => {
    test('Function onClose event run successfully', () => {
      const notifypopup = new NotifyPopup({});
      const container = notifypopup.render();
      notifypopup.on('close', (e: any) => {
        if (e.target) {
          notifypopup.setText(e.target.value);
        }
      });
      fireEvent.click(container, {target: {value: 'on close'}});
      expect(container.textContent).toBe('on close');
    });

  test('Function onChange event will not run', () => {
    const notifypopup = new NotifyPopup({text: 'NotifyPopup'});
    const container = notifypopup.render();
    // @ts-ignore
    notifypopup.on('change', (e: any) => {
      if (e.target) {
        notifypopup.setText(e.target.value);
      }
    });
    fireEvent.click(container, {target: {value: 'on change'}});
    expect(container.textContent).toBe('NotifyPopup');
  });
});