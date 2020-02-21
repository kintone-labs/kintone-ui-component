/* eslint-disable @typescript-eslint/no-empty-function */
import TimePicker from '../components/TimePicker';
import {fireEvent} from '@testing-library/dom';

describe('Unit test Calendar render', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('onClick time item of TimePicker', () => {
    const mockFn = jest.fn((date: Date) => {
      expect(date.getHours()).toBe(0);
      expect(date.getMinutes()).toBe(30);
    });
    const timePicker = new TimePicker({
      isVisible: true,
      isDisabled: false,
      onTimeClick: mockFn
    });
    timePicker.render();
    const span = timePicker.render().getElementsByClassName('kuc-time-list-item')[1];
    fireEvent.click(span);
    expect(mockFn).toBeCalledTimes(1);
  });

  test('render TimePicker', () => {
    const timePicker = new TimePicker({isVisible: true, isDisabled: true});
    const container = timePicker.render();
    expect(container.style.display).toBe('block');
    expect(container.className).toBe('time-picker-container');
    const listTimeEl = container.getElementsByClassName('kuc-time-list-item');
    expect(listTimeEl.length).toBe(48);
    expect(listTimeEl[0].textContent).toBe('00:00');
    expect(listTimeEl[47].textContent).toBe('23:30');
  });
});