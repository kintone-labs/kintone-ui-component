import Button from '../index';
import {fireEvent} from '@testing-library/dom';

describe('Unit test Button onEvent', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });
  test('Function onClick event run successfully', () => {
    const button = new Button();
    const container = button.render();
    button.on('click', (e: any) => {
      if (e.target) {
        button.setText(e.target.value);
      }
    });
    fireEvent.click(container, {target: {value: 'on click'}});
    expect(container.textContent).toBe('on click');
  });

  test('Function onClick event will not run when disabled', () => {
    const button = new Button();
    const container = button.render();
    button.disable();
    button.on('click', (e: any) => {
      expect(false);
    });
    fireEvent.click(container, {target: {value: 'on click'}});
  });

  test('Function onChange event will not run', () => {
    const button = new Button({text: 'onChange not worked'});
    const container = button.render();
    // @ts-ignore
    button.on('change', (e: any) => {
      if (e.target) {
        button.setText(e.target.value);
      }
    });
    fireEvent.click(container, {target: {value: 'on change'}});
    expect(container.textContent).toBe('onChange not worked');
  });
});
