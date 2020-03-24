/* eslint-disable @typescript-eslint/no-empty-function */
import TextArea from '../index';
import {fireEvent} from '@testing-library/dom';

describe('Unit test TextArea onEvent', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('onClick and onChange empty function TextArea component', () => {
    try {
      const txtArea1 = new TextArea({value: 'empty'});
      fireEvent.click(txtArea1.render().querySelector('textarea') as HTMLTextAreaElement, {target: {value: 'empty'}});
      fireEvent.change(txtArea1.render().querySelector('textarea') as HTMLTextAreaElement, {target: {value: 'empty'}});
      expect(txtArea1.render()).toHaveClass('kuc-textarea-outer');
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  test('onChange and onClick TextArea component', () => {
    const txtArea = new TextArea({value: 'textarea'});
    txtArea.on('change', (value) => {
      expect(value).toBe('on change event textarea');
    });
    txtArea.on('click', (e) => {
      expect((e.target as HTMLInputElement).value).toBe('on click event textarea');
    });
    fireEvent.click(txtArea.render().querySelector('textarea') as HTMLTextAreaElement, {target: {value: 'on click event textarea'}});
    fireEvent.change(txtArea.render().querySelector('textarea') as HTMLTextAreaElement, {target: {value: 'on change event textarea'}});
  });

  test('onMouseDown TextArea component', () => {
    try {
      const txtArea = new TextArea({value: 'empty'});
      txtArea._onMouseDown();
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  test('onMouseDown disable TextArea component', () => {
    const txtArea1 = new TextArea({isDisabled: true});
    txtArea1._onMouseDown();
    expect(txtArea1.render()).toHaveClass('kuc-textarea-outer');
    expect(txtArea1.render().getAttribute('disabled')).toBe('true');
  });

  test('onMouseEvent TextArea component', () => {
    try {
      const txtArea1 = new TextArea({value: 'empty'});
      const textAreaResize = txtArea1.render().getElementsByClassName('kuc-textarea-resize')[0];
      fireEvent.mouseDown(textAreaResize, {});
      fireEvent.mouseDown(document, {clientX: 1900, clientY: 2020});
      fireEvent.mouseMove(document, {currentX: 1009, currentY: 1009, clientX: 2009, clientY: 2009});
      fireEvent.mouseMove(document, {currentX: 909, currentY: 1004, clientX: 1900, clientY: 2000});
      fireEvent.mouseUp(document, {clientX: 1909, clientY: 2009});
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });
});