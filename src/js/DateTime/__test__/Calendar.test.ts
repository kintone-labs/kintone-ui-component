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
    const calendar = new Calendar({isVisible: true, isDisabled: false, date: new Date('02/05/2020'), locale: Locale.zh});
    calendar.render();
    const span = calendar.render().getElementsByClassName('today calendar-button-control')[0];
    fireEvent.click(span, {target: {onDateClick: new Date()}});

    const expectToday = (new Date()).getDate();
    const today = calendar.render().getElementsByClassName('day today selected')[0];
    expect(today.textContent).toBe(`${expectToday}`);
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
    const container = calendar.render();
    calendar._onChangeCreateYearDropdown('02/02/2019');
    calendar._renderDaysLabels();
    // console.log(container.getElementsByClassName('day')[0]);
    
    // const newFirstDay = container.getElementsByClassName('day')[0];
    // expect(calendar._displayDate).toBe('29');
  });

  test('should run succuessfully when change year dropdown', () => {
    const calendar = new Calendar({isVisible: true, isDisabled: false, date: new Date('02/05/2020'), locale: Locale.zh});
    calendar.render();
    const span = calendar.render().getElementsByClassName('today calendar-button-control')[0];
    fireEvent.click(span, {target: {onDateClick: new Date()}});

    const expectToday = (new Date()).getDate();
    const today = calendar.render().getElementsByClassName('day today selected')[0];
    expect(today.textContent).toBe(`${expectToday}`);
  });
});