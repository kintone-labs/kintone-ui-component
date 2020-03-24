import {fireEvent} from '@testing-library/dom';
import MultipleChoice from '../index';

describe('Unit test MultipleChoice onEvent', () => {
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
    const multipleChoice = new MultipleChoice({
      items: items,
      value: [expectedValues[0], expectedValues[1]],
    });
    const container = multipleChoice.render();
    multipleChoice.on('change', (e: any) => {
      expect(e).toEqual([expectedValues[1]]);
    });
    fireEvent.click(container);
    expect(multipleChoice.getValue()).toEqual([expectedValues[0], expectedValues[1]]);
    fireEvent.click(container.children[0].children[0]);
    expect(multipleChoice.getValue()).toEqual([expectedValues[1]]);
  });

  test('Function onClick event will not work', () => {
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
    const multipleChoice = new MultipleChoice({
      items: items,
      value: [],
    });
    const container = multipleChoice.render();
    let counter = 0;
    multipleChoice.on('click', (e: string[]) => {
      counter += 1;
    });
    fireEvent.click(container);
    expect(counter).toBe(0);
    fireEvent.click(container.children[0].children[0]);
    expect(counter).toBe(0);
  });
});