/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect';
import Text from '../index';

describe('[JS] Text', () => {

  test('should be render successfully without props', () => {
    const text = new Text();
    expect(text.render()).toHaveClass('kuc-input-text');
    expect(text.render()).toHaveValue('');
    expect(text.render()).not.toBeDisabled();
    expect(text.render().getAttribute('type')).toBe('text');
  });
});