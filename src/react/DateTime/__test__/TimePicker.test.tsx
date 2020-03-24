/* eslint-disable @typescript-eslint/no-empty-function */
import {render, fireEvent} from '@testing-library/react';
import React, {createRef} from 'react';
import TimePicker from '../components/TimePicker';

describe('Unit test TimePicker react', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('onKeyUp of TimePicker', () => {
    const timeRef: React.RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
    const {container} = render(
      <TimePicker
        pickerDisplay="block"
        timeRef={timeRef}
        onTimeClick={()=>{}}
      />
    );
    if (container.firstElementChild) {
      expect(container.firstElementChild.className).toBe('time-picker-container');
    }
    const timepicker = container.getElementsByClassName('kuc-time-list-item')[1];
    fireEvent.keyUp(timepicker);
  });

});