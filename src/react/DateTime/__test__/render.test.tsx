/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';
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

    test('render without props DateTime', () => {
        const { container } = render(<DateTime />);
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toBe('date-time-container');
        }
    });
    test('render with full props DateTime', () => {
        const { container } = render(
            <DateTime
                value={new Date()}
                type='datetime'
                locale='zh'
                dateFormat='YYYY/MM'
                timeFormat='HH:mm:ss'
                isDisabled={true}
                isVisible={true}
            />
        );
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toBe('date-time-container');
        }
    });
    test('render with props isVisible=false DateTime', () => {
        const { container } = render(<DateTime value={new Date()} isVisible={false} locale='en' />);
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toBe('');
        }
    });
    test('render with wrong props DateTime', () => {
        // @ts-ignore
        const { container } = render(<DateTime value={new Date()} isDisabled='false' type='kintone' />);
        if (container.firstElementChild) {
            expect(container.firstElementChild.className).toBe('date-time-container');
        }
    });
});