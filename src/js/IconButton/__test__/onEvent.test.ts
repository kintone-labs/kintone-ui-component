import IconButton from '../index';
import {fireEvent} from '@testing-library/react';

describe('Unit test IconButton on event', () => {

  test('Function onClick event run successfully', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    let buttonTag = null;
    iconButton.on('click', (e: any) => {
      buttonTag = e.target ? e.target.tagName : null;
    });
    fireEvent.click(container);
    expect(buttonTag).toBe('BUTTON');
  });

  test('Function onClick event will not run caused by disabled', () => {
    const iconButton = new IconButton({
      isDisabled: true
    });
    const container = iconButton.render();
    let buttonTag = null;
    iconButton.on('click', (e: any) => {
      buttonTag = e.target ? e.target.tagName : null;
    });
    fireEvent.click(container);
    expect(buttonTag).toBeNull();
  });

  test('Function onChange event will not run', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    let buttonTag = null;
    // @ts-ignore
    iconButton.on('change', (e: any) => {
      buttonTag = e.target ? e.target.tagName : null;
    });
    fireEvent.click(container);
    expect(buttonTag).toBeNull();
  });

});
