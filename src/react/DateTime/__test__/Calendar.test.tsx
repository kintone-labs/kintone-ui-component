/* eslint-disable @typescript-eslint/no-empty-function */
import {render, fireEvent} from '@testing-library/react';
import Calendar from '../components/Calendar';
import React, {createRef} from 'react';
import {zh, en} from '../components/Locale';

describe('Unit test Calendar react', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('render with full props Calendar', () => {
    const calendarRef: React.RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
    const {container} = render(
      <Calendar
        date={new Date('05/02/2020')}
        locale={zh}
        pickerDisplay="none"
        hasSelection
        calRef={calendarRef}
      />
    );

    const pickerContainer = container.firstElementChild;
    expect(pickerContainer).toBeTruthy();
    expect(pickerContainer!.className).toBe('date-picker-container');

    // Check Prev, Next button
    const headerControl = pickerContainer!.getElementsByClassName('month-year-container')[0];
    expect(headerControl).toBeTruthy();
    expect(headerControl.children).toHaveLength(3);
    expect(headerControl.firstChild).toHaveClass('prev calendar-button-control');
    expect(headerControl.children[1]).toHaveClass('kuc-calendar-dropdown-row');
    expect(headerControl.lastChild).toHaveClass('next calendar-button-control');

    // Check day
    const dayContainer = pickerContainer!.getElementsByClassName('days-container')[0];
    expect(dayContainer).toBeTruthy();
    // days of week
    expect(pickerContainer!.getElementsByClassName('wday-header')).toHaveLength(7);
    // days of month
    expect(pickerContainer!.getElementsByClassName('day calendar-button')).toHaveLength(35);
  });
  test('onEvent with full props Calendar', () => {
    const calendarRef: React.RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
    const {container} = render(
      <Calendar
        date={new Date()}
        locale={en}
        pickerDisplay="none"
        hasSelection
        calRef={calendarRef}
      />
    );
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('date-picker-container');
    }
    fireEvent.mouseDown(container);
    const node = container.getElementsByClassName('date-picker-container')[0];
    fireEvent.blur(node);
    const prevBtn = container.getElementsByClassName('prev calendar-button-control')[0];
    fireEvent.click(prevBtn);
    fireEvent.keyUp(prevBtn);

    const nextBtn = container.getElementsByClassName('next calendar-button-control')[0];
    fireEvent.click(nextBtn);
    fireEvent.keyUp(nextBtn);

    const dayItem = container.getElementsByClassName('day')[10];
    fireEvent.keyUp(dayItem);

    const todayBtn = container.getElementsByClassName('today calendar-button-control')[0];
    fireEvent.keyUp(todayBtn);
    const noneBtn = container.getElementsByClassName('none calendar-button-control')[0];
    fireEvent.keyUp(noneBtn);

    const monthDropdown = container.getElementsByClassName('kuc-dropdown-sub-container')[0];
    const selectedMonth = monthDropdown.getElementsByClassName('kuc-list-item')[2];
    const yearDropdown = container.getElementsByClassName('kuc-dropdown-sub-container')[1];
    const selectedYear = yearDropdown.getElementsByClassName('kuc-list-item')[2];
    fireEvent.click(selectedMonth);
    fireEvent.click(selectedYear);
  });

  test('onClick dropdown with locale zh with full props Calendar', () => {
    const calendarRef: React.RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
    const {container} = render(
      <Calendar
        date={new Date()}
        locale={zh}
        pickerDisplay="none"
        hasSelection
        calRef={calendarRef}
      />
    );
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('date-picker-container');
    }
    const monthDropdown = container.getElementsByClassName('kuc-dropdown-sub-container')[0];
    const selectedMonth = monthDropdown.getElementsByClassName('kuc-list-item')[2];
    const yearDropdown = container.getElementsByClassName('kuc-dropdown-sub-container')[1];
    const selectedYear = yearDropdown.getElementsByClassName('kuc-list-item')[2];
    fireEvent.click(selectedMonth);
    fireEvent.click(selectedYear);
  });

});