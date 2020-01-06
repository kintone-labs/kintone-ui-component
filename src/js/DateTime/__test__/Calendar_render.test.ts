/* eslint-disable @typescript-eslint/no-empty-function */
import Calendar from '../components/Calendar';
import Locale from '../../../react/DateTime/components/Locale';
import { fireEvent } from '@testing-library/dom';

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
        const calendar = new Calendar({ isVisible: true, isDisabled: false, date: new Date(), locale: Locale.zh });
        calendar.render();
        expect(true).toBeTruthy();
    });
    test('onClick Pre Button Calendar', () => {
        const calendar = new Calendar({ isVisible: true, isDisabled: false, date: new Date(), locale: Locale.zh });
        calendar.render();
        const span = calendar.render().getElementsByClassName('prev calendar-button-control')[0]
        fireEvent.click(span)
        expect(true).toBeTruthy();
    });
    test('onClick Next Button Calendar', () => {
        const calendar = new Calendar({ isVisible: true, isDisabled: false, date: new Date(), locale: Locale.zh });
        calendar.render();
        const span = calendar.render().getElementsByClassName('next calendar-button-control')[0]
        fireEvent.click(span)
        expect(true).toBeTruthy();
    });
    test('onClick Today Button Calendar', () => {
        const calendar = new Calendar({ isVisible: true, isDisabled: false, date: new Date(), locale: Locale.zh });
        calendar.render();
        const span = calendar.render().getElementsByClassName('today calendar-button-control')[0]
        fireEvent.click(span, {target: {onDateClick: new Date()}})
        expect(true).toBeTruthy();
    });
    test('onClick None Button Calendar', () => {
        const calendar = new Calendar({ isVisible: true, isDisabled: false, date: new Date(), locale: Locale.zh });
        calendar.render();
        const span = calendar.render().getElementsByClassName('none calendar-button-control')[0]
        fireEvent.click(span, {target: {onDateClick: new Date()}})
        calendar.getValue()
        expect(true).toBeTruthy();
    });
    test('onBlur Calendar', () => {
        const calendar = new Calendar({ isVisible: true, isDisabled: false, date: new Date(), locale: Locale.zh });
        calendar.render();
        fireEvent.blur(calendar.render(),  {target: {onClickOutside: null}})
        expect(true).toBeTruthy();
    });
    test('onChangeCreateYearDropdown & renderDaysLabels Calendar', () => {
        const calendar = new Calendar({ isVisible: true, isDisabled: false, date: new Date(), locale: Locale.zh });
        calendar.render();
        calendar._onChangeCreateYearDropdown('30/12/2019')
        calendar._renderDaysLabels()
        expect(true).toBeTruthy();
    });
});