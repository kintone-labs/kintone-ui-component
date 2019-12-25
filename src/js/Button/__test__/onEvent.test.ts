import Button from '../index';
import { fireEvent } from '@testing-library/react';

describe('Unit test Button setText', () => {
  test('Function onClick event run successfully', () => {
    const button = new Button({});
    const container = button.render();
    button.on('click', (e: any) => {
      if (e.target) {
        button.setText(e.target.value);  
      }
    })
    fireEvent.click(container, {target: {value: 'on click'}});
    expect(container.textContent).toBe('on click');
  });

  test('Function onChange event will not run', () => {
    const button = new Button({text: 'Button'});
    const container = button.render();
    // @ts-ignore
    button.on('change', (e: any) => {
      if (e.target) {
        button.setText(e.target.value);  
      }
    })
    fireEvent.click(container, {target: {value: 'on change'}});
    expect(container.textContent).toBe('Button');
  });
});
