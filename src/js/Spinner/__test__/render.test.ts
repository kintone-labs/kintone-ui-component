/* eslint-disable @typescript-eslint/no-empty-function */
import Spinner from '../index';

describe('Unit test Spinner render', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('render successfully without props Spinner component', () => {
    const spinner = new Spinner();
    const container = spinner.render();
    document.body.appendChild(container);
    expect(container.className).toBe('kuc-spinner-outer');
    expect(container).not.toBeVisible();
  });

  test('render successfully with props Spinner component', () => {
    const spinner = new Spinner({isVisible: true});
    const container = spinner.render();
    document.body.appendChild(container);
    expect(container.className).toBe('kuc-spinner-outer');
    expect(container).toBeVisible();
  });
});