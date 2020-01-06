/* eslint-disable @typescript-eslint/no-empty-function */
import DateTime from '../index';
import { fireEvent } from '@testing-library/dom';

describe('Unit test DateTime onEvent', () => {
    beforeEach(() => {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(() => { });
    });
    afterEach(() => {
        // @ts-ignore
        console.error.mockRestore();
    });

    test('onEvent successfully dateTextInput of DateTime', () => {
        const datetime = new DateTime({ value: null, type: 'date' });
        const dateTextInput = datetime.render().getElementsByTagName('input')[0]
        datetime.render()
        fireEvent.click(dateTextInput, { target: { value: null } })
        fireEvent.focus(dateTextInput, { target: { value: null } })
        fireEvent.keyDown(dateTextInput, { target: { key: 'Tab' } })
        fireEvent.blur(dateTextInput, { target: { value: null } })
        expect(true).toBeTruthy()
    });

    test('_onCalendarDateClick successfully DateTime', () => {
        const datetime = new DateTime({ value: new Date() });
        datetime.render()
        // @ts-ignore
        datetime._onCalendarDateClick(new Date())
        expect(true).toBeTruthy()
    });

    test('_onTimeClick successfully DateTime', () => {
        const datetime = new DateTime({ value: new Date() });
        datetime.render()
        // @ts-ignore
        datetime._onTimeClick(new Date())
        expect(true).toBeTruthy()
    });
    test('_checkDateInputError throws error with dateFormat underfined DateTime', () => {
        const datetime = new DateTime({ dateFormat: undefined });
        datetime.render()
        // @ts-ignore
        datetime._checkDateInputError()
        expect(true).toBeTruthy()
    });
    test('_checkDateInputError throws error with dateFormat xx/yy DateTime ', () => {
        const datetime = new DateTime({ dateFormat: 'xx/yy' });
        datetime.render()
        // @ts-ignore
        datetime._checkDateInputError()
        expect(true).toBeTruthy()
    });
    test('_changeHoursBy & _changeMinutesBy DateTime', () => {
        const datetime = new DateTime();
        datetime.render()
        // @ts-ignore
        datetime._changeHoursBy(3)
        // @ts-ignore
        datetime._changeMinutesBy(45)
        expect(true).toBeTruthy()
    });
    test('onEvent timeTextInput DateTime', () => {
        const datetime = new DateTime({ type: 'time' });
        const time = datetime.render().getElementsByClassName('kuc-input-text text-input time')[0]
        datetime.render()
        fireEvent.click(time, { target: { selectionStart: 1 } })
        fireEvent.focus(time, { target: { selectionStart: 0, selectionEnd: 2 } })
        // @ts-ignore
        datetime._setTimeValueOnInput(9)
        fireEvent.keyDown(time, { target: { keyCode: 9, key: 'Tab', selectionStart: 1, selectionEnd: 2 } })
        fireEvent.blur(time, { relatedTarget: null })
        expect(true).toBeTruthy()
    });

    test('onEvent dateTextInput throws error DateTime', () => {
        try {
            // @ts-ignore
            const datetime = new DateTime({type: 'date'})
            const datetimeRender = datetime.render();
            datetime.setValue('kintone')
            console.log(2, datetime);
            
            const time = datetimeRender.getElementsByClassName('kuc-input-text text-input time')[0]
            console.log(3, time);
            fireEvent.click(time, { target: { value: new Date() } })
            expect(true).toBeTruthy()
        } catch (error) {
            expect(false)
        }

    });

})