/* eslint-disable @typescript-eslint/no-empty-function */
import Calendar from '../components/Calendar';
import Locale from '../../../react/DateTime/components/Locale';
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

  test('render Calendar', () => {
    const calendar = new Calendar({isVisible: true, isDisabled: false, date: new Date('02/11/2020'), locale: Locale.zh});
    const containerEl = calendar.render();
    expect(containerEl.className).toBe('date-picker-container');

    const prevEl = containerEl.getElementsByClassName('prev calendar-button-control')[0];
    expect(prevEl).toBeTruthy();

    const nextEl = containerEl.getElementsByClassName('next calendar-button-control')[0];
    expect(nextEl).toBeTruthy();

    const todayEl = containerEl.getElementsByClassName('today calendar-button-control')[0];
    expect(todayEl).toBeTruthy();

    const noneEl = containerEl.getElementsByClassName('none calendar-button-control')[0];
    expect(noneEl).toBeTruthy();
  });
  test('onClick Pre Button Calendar', () => {
    const calendar = new Calendar({isVisible: true, isDisabled: false, date: new Date('02/05/2020'), locale: Locale.zh});
    const pickerContainer = calendar.render();

    const oldFirstDay = pickerContainer.getElementsByClassName('day')[0];
    expect(oldFirstDay.textContent).toBe('26');

    const span = pickerContainer.getElementsByClassName('prev calendar-button-control')[0];
    fireEvent.click(span);
    const newFirstDay = pickerContainer.getElementsByClassName('day')[0];
    expect(newFirstDay.textContent).toBe('29');
  });
  test('onClick Next Button Calendar', () => {
    const calendar = new Calendar({isVisible: true, isDisabled: false, date: new Date('02/05/2020'), locale: Locale.zh});
    const pickerContainer = calendar.render();

    const oldFirstDay = pickerContainer.getElementsByClassName('day')[0];
    expect(oldFirstDay.textContent).toBe('26');

    const span = pickerContainer.getElementsByClassName('next calendar-button-control')[0];
    fireEvent.click(span);
    const newFirstDay = pickerContainer.getElementsByClassName('day')[0];
    expect(newFirstDay.textContent).toBe('1');
  });
  test('onClick Today Button Calendar', () => {
    const mockFn = jest.fn((date: Date | null) => {
      const expectToday = new Date();
      expect(date).toBeTruthy();
      expect(date!.getDate()).toBe(expectToday.getDate());
      expect(date!.getMonth()).toBe(expectToday.getMonth());
      expect(date!.getFullYear()).toBe(expectToday.getFullYear());
    });
    const calendar = new Calendar({
      isVisible: true,
      isDisabled: false,
      date: new Date('02/05/2020'),
      locale: Locale.zh,
      onDateClick: mockFn
    });
    const container = calendar.render();
    const span = container.getElementsByClassName('today calendar-button-control')[0];
    fireEvent.click(span);
    expect(mockFn).toBeCalledTimes(1);
  });
  test('onClick None Button Calendar', () => {
    const mockFn = jest.fn((value: Date | null) => {
      expect(value).toBeFalsy();
    });
    const calendar = new Calendar({isVisible: true,
      isDisabled: false,
      date: new Date(),
      locale: Locale.zh,
      onDateClick: mockFn
    });
    calendar.render();
    const span = calendar.render().getElementsByClassName('none calendar-button-control')[0];
    fireEvent.click(span);
    expect(mockFn).toBeCalledTimes(1);
  });
  test('onBlur Calendar', () => {
    const mockFn = jest.fn((e: FocusEvent) => {
      expect(e).toBeTruthy();
    });

    const calendar = new Calendar({isVisible: true, isDisabled: false, date: new Date(), locale: Locale.zh, onClickOutside: mockFn});
    calendar.render();
    fireEvent.blur(calendar.render());
    expect(mockFn).toBeCalledTimes(1);
  });
  test('should render successfully when clicking Month/Year Dropdown ', () => {
    const calendar = new Calendar({isVisible: true, isDisabled: false, date: new Date('02/12/2020'), locale: Locale.zh});
    const container = calendar.render();
    let firstDayLabel = container.getElementsByClassName('day')[0];
    expect(firstDayLabel.textContent).toEqual('26');

    const yearEl = container.getElementsByClassName('kuc-list-item kuc-list-item-selected')[0].nextElementSibling!;
    fireEvent.click(yearEl);
    firstDayLabel = container.getElementsByClassName('day')[0];
    expect(firstDayLabel.textContent).toEqual('31');

    const monthEl = container.getElementsByClassName('kuc-list-item kuc-list-item-selected')[1].nextElementSibling!;
    fireEvent.click(monthEl);
    firstDayLabel = container.getElementsByClassName('day')[0];
    expect(firstDayLabel.textContent).toEqual('28');
  });
});