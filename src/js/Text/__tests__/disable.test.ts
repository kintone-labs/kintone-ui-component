/* eslint-disable @typescript-eslint/no-empty-function */
import {fireEvent} from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

import Text from '../index';

describe('[JS] Text', () => {

  test('should disable() successfully', ()=>{
    const mockCallback = jest.fn(() => {});
    const defaultValue = 'success';

    const text = new Text({value: defaultValue});
    text.disable();

    expect(text.render()).toBeDisabled();

    fireEvent.change(text.render(), {target: {value: defaultValue}});

    expect(mockCallback).toBeCalledTimes(0);
  });
});