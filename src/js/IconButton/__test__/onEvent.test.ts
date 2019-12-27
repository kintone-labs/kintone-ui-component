import IconButton from '../index';
import {fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Unit test IconButton on event', () => {
  test('Function onClick event run successfully', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    let buttonTag = null;
    iconButton.on('click', (e: any) => {
      // tagのclickで取れるtagが曖昧。clickする場所で変わる。
      // 外側をclickするとbutton, 内側をクリックするとsvg, さらに内側をクリックするとpathになる。
      buttonTag = e.target ? e.target.tagName : null;
    });
    fireEvent.click(container);
    expect(buttonTag).toBe('BUTTON');
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
