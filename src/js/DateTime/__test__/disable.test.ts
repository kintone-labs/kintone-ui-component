/* eslint-disable @typescript-eslint/no-empty-function */
import DateTime from '../index';
import {fireEvent} from '@testing-library/dom';

describe('Unit test DateTime disable', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('disable & enable successfully DateTime', () => {
    const datetime = new DateTime();
    const dateTextInput = datetime.render().getElementsByTagName('input')[0];
    datetime.render();
    fireEvent.click(dateTextInput, {target: {value: null}});
    datetime.disable();
    expect(datetime.render().getAttribute('disabled')).toBe('true');
    datetime.enable();
    expect(datetime.render().getAttribute('disabled')).toBeNull();
  });
});
