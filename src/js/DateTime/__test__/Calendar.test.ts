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
    const calendar = new Calendar({isVisible: true, isDisabled: false, date: new Date(), locale: Locale.zh});
    calendar.render();
    expect(calendar.render().className).toBe('date-picker-container');
    expect(calendar.render().style.display).toBe('block');
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
    const calendar = new Calendar({isVisible: true, isDisabled: false, date: new Date(), locale: Locale.zh});
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
    fireEvent.click(span, {target: {onDateClick: new Date()}});
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
    fireEvent.blur(calendar.render(), {target: calendar.render()});
    expect(mockFn).toBeCalledTimes(1);
  });
  test('onChangeCreateYearDropdown & renderDaysLabels Calendar', () => {
    const calendar = new Calendar({isVisible: true, isDisabled: false, date: new Date(), locale: Locale.zh});
    calendar.render();
    calendar._onChangeCreateYearDropdown('30/12/2019');
    calendar._renderDaysLabels();
    expect(true).toBeTruthy();
  });
});