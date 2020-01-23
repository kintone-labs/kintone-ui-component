import '@testing-library/jest-dom/extend-expect';
import {fireEvent} from '@testing-library/react';
import MultipleChoice from '../index';

describe('Unit test MultipleChoice onEvent', () => {

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

  test('Function onClick event run successfully', () => {
    // According to user guide, it supports only change event
    const multipleChoice = new MultipleChoice({});
    const container = multipleChoice.render();
    let counter = 0;
    multipleChoice.on('click', (e: any) => {
      multipleChoice.addItem({
        value: expectedValues[counter]
      });
      counter += 1;
    });
    fireEvent.click(container);
    expect(multipleChoice.getItems()).toEqual([
      {
        value: expectedValues[0]
      }
    ]);
    fireEvent.click(container.children[0]);
    expect(multipleChoice.getItems()).toEqual([
      {
        value: expectedValues[0],
      },
      {
        value: expectedValues[1]
      }
    ]);
  });
});