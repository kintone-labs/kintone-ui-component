/* eslint-disable @typescript-eslint/no-empty-function */
import Spinner from '../index';

describe('Unit test Spinner render', () => {

  test('render successfully without props Spinner component', () => {
    const spinner = new Spinner();
    expect(spinner.render().className).toBe('kuc-spinner-outer');
    expect(spinner.render()).not.toBeVisible();
  });

  test('render successfully with props Spinner component', () => {
    const spinner = new Spinner({isVisible: true});
    expect(spinner.render().className).toBe('kuc-spinner-outer');
    expect(spinner.render()).toBeVisible();
  });
});