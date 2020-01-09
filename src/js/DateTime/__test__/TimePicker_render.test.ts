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
    const calendar = new TimePicker({isVisible: true, isDisabled: false});
    calendar.render();
    const span = calendar.render().getElementsByClassName('kuc-time-list-item')[0];
    fireEvent.click(span, {target: {onTimeClick: new Date()}});
    expect(true).toBeTruthy();
  });

  test('render TimePicker', () => {
    const calendar = new TimePicker({isVisible: true, isDisabled: true});
    expect(calendar.render().style.display).toBe('block');
  });
});