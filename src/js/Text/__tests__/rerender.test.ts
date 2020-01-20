/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect';
import Text from '../index';

describe('[JS] Text', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('should setValue() null for rerender successfully', ()=>{
    const text = new Text({value: 'kintone'});
    // @ts-ignore
    text.setValue(null);
    text.rerender();
    expect(true).toBeTruthy();
  });
});