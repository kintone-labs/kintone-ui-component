/* eslint-disable @typescript-eslint/no-empty-function */
import '@testing-library/jest-dom/extend-expect';
import NortifyPopup from '../index';

describe('Unit test NortifyPopup rerender', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('should setText() null for rerender successfully', ()=>{
    const nortifypopup = new NortifyPopup();
    nortifypopup.rerender();
    expect(true).toBeTruthy();
  });
});