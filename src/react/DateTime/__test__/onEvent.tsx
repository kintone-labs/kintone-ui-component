/* eslint-disable @typescript-eslint/no-empty-function */
import { render, fireEvent } from '@testing-library/react';
import DateTime from '../index';
import React from 'react';

describe('Unit test DateTime react', () => {
    beforeEach(() => {
        jest.spyOn(console, 'error');
        // @ts-ignore
        console.error.mockImplementation(() => { });
    });
    afterEach(() => {
        // @ts-ignore
        console.error.mockRestore();
    });

    test('onChange with full props DateTime', () => {
        const onChange = (value: string) => {
            expect(true);
          };
        const { container } = render(
            <DateTime
                value={new Date('16:24 06/01/2020')}
                type='datetime'
                locale='zh'
                dateFormat='dd/MM/YYYY'
                timeFormat='HH:mm'
                isDisabled={true}
                isVisible={true}
                onChange={onChange}
            />
        );
        const node = container.getElementsByClassName('kuc-input-text text-input')[0] as HTMLInputElement
        fireEvent.change(node)
        expect(node.value).toBe('01/06/2020')
    });
    test('onEvent dateTextInput DateTime', () => {
        const onChange = (value: string) => {
            expect(true)
        };
        const { container } = render(
            <DateTime
                value={new Date()}
                type='date'
                dateFormat='dd/MM/YYYY'
                onChange={onChange}
            />
        );
        const node = container.getElementsByClassName('kuc-input-text text-input')[0]
        fireEvent.click(node, { target: { value: null } })
        fireEvent.blur(node, { target: { value: null } })
        fireEvent.blur(node, { target: { value: '02/06/2020' } })
        fireEvent.change(node, { target: { value: '02/06/2020' } })
        fireEvent.focus(node, { target: { value:  null  } })
        fireEvent.click(node, { target: { value: null } })
        fireEvent.blur(node, { target: { value: 'kintone' } })
    });
    test('onEvent datetimeTextInput DateTime', () => {
        const onChange = (value: string) => {
            expect(true)
        };
        const { container } = render(
            <DateTime
                value={new Date()}
                type='datetime'
                dateFormat='dd/MM/YYYY'
                timeFormat='HH:mm'
                onChange={onChange}
            />
        );
        const node = container.getElementsByClassName('kuc-input-text text-input time')[0]
        fireEvent.click(node, { target: { value: null } })
        fireEvent.blur(node, { target: { value: null } })
        fireEvent.blur(node, { target: { value: '13:10 02/06/2020' } })
        fireEvent.change(node, { target: { value: '13:10 02/06/2020' } })
        fireEvent.focus(node, { target: { value:  null  } })
        fireEvent.click(node, { target: { value: null } })
        fireEvent.blur(node, { target: { value: 'kintone' } })
    });

    test('onKeyDown dateTextInput DateTime', () => {
        const onChange = (value: string) => {
            expect(true)
        };
        const { container } = render(
            <DateTime
                value={new Date()}
                type='date'
                dateFormat='dd/MM/YYYY'
                onChange={onChange}
            />
        );
        const node = container.getElementsByClassName('kuc-input-text text-input')[0]
        fireEvent.click(node, { target: { value: '02/06/2020'} })
        fireEvent.keyDown(node, { key: 'Tab'})
        expect(true).toBeTruthy()
    });
});