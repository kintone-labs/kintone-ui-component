import '@testing-library/jest-dom/extend-expect';
import NotifyPopup from '../index';

describe('unit test NotifyPopup render', () => {
  test('Render successfully without option', () => {
    const container = notifyPopup.render();
    expect(container.classList.length).toBe(2);
    expect(['kuc-notify', 'bg-danger'].every(c => container.classList.contains(c))).toBe(true);
    expect(container.getElementsByClassName('kuc-close-button')).toBeTruthy;
    expect(window.getComputedStyle(container).backgroundColor).toBe('rgb(231, 76, 60)');
    expect(container).toBeVisible();
  });

  test('Render successfully with option', () => {
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
  
  test('Render successfully with option', () => {
    const notifyPopup = new NotifyPopup({
      text: 'testString',
      type: 'info',
      isVisible: false
    });
    const container = notifyPopup.render();
    expect(container.classList.length).toBe(2);
    expect(['kuc-notify', 'bg-info'].every(c => container.classList.contains(c))).toBe(true);
    expect(container.textContent).toBe('testString');
    expect(window.getComputedStyle(container).backgroundColor).toBe('rgb(56, 151, 217)');
    expect(container).not.toBeVisible();
  });

  test('Render successfully with wrong option', () => {
    const notifyPopup = new NotifyPopup({
      text: 123 ,
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