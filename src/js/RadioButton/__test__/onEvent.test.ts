import {fireEvent} from '@testing-library/dom';
import RadioButton from '../index';

describe('Unit test RadioButton onEvent', () => {
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

  const expectedLabels = ['Orange', 'Banana', 'Lemon'];
  const expectedValues = ['orange', 'banana', 'lemon'];

  test('Function onChange event run successfully', () => {
    const items = [
      {
        label: expectedLabels[0],
        value: expectedValues[0],
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1],
      }
    ];
    const radioButton = new RadioButton({
      name: 'fruit',
      items: items,
      value: expectedValues[0],
    });
    const container = radioButton.render();
    radioButton.on('change', (e: any) => {
      expect(e).toEqual(expectedValues[1]);
    });
    fireEvent.click(container);
    expect(radioButton.getValue()).toEqual(expectedValues[0]);
    fireEvent.click(container.children[1].children[1]);
    expect(radioButton.getValue()).toEqual(expectedValues[1]);
  });

  test('Function onClick event will not work', () => {
    // ユーザーガイド上はchangeイベントのみサポートとなっている
    const items = [
      {
        label: expectedLabels[0],
        value: expectedValues[0],
      },
      {
        label: expectedLabels[1],
        value: expectedValues[1],
      }
    ];
    const radioButton = new RadioButton({
      name: 'fruit',
      items: items,
      value: expectedValues[0],
    });
    const container = radioButton.render();
    const counter = 1;
    // @ts-ignore
    radioButton.on('click', (e: any) => {
      radioButton.setValue(
        expectedValues[counter]
      );
    });
    fireEvent.click(container);
    expect(radioButton.getValue()).toEqual(expectedValues[0]);
    fireEvent.click(container.children[1]);
    expect(radioButton.getValue()).toEqual(expectedValues[0]);
  });
});