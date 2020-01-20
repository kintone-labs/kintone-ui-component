import '@testing-library/jest-dom/extend-expect';
import {fireEvent} from '@testing-library/react';
import CheckBox from '../index';

describe('Unit test CheckBox onEvent', () => {

  const expectedLabels = ['Orange', 'Banana', 'Lemon'];
  const expectedValues = ['orange', 'banana', 'lemon'];

  test('Function onClick event run successfully', () => {
    // ユーザーガイド上はchangeイベントのみサポートとなっている
    const checkBox = new CheckBox({});
    const container = checkBox.render();
    let counter = 0;
    checkBox.on('click', (e: any) => {
      checkBox.addItem({
        value: expectedValues[counter]
      });
      counter += 1;
    });
    fireEvent.click(container);
    expect(checkBox.getItem(0)).toEqual({value: expectedValues[0]});
    fireEvent.click(container.children[0]);
    expect(checkBox.getItem(1)).toEqual({value: expectedValues[1]});
  });

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
    const checkBox = new CheckBox({
      items: items,
      value: [expectedValues[0], expectedValues[1]],
    });
    const container = checkBox.render();
    checkBox.on('change', (e: any) => {
      checkBox.addItem({
        value: expectedValues[2]
      });
    });
    fireEvent.click(container);
    expect(checkBox.getItems()).toEqual(items);
    console.log(container.children[0].children[0]);
    fireEvent.click(container.children[0].children[0]);
    expect(checkBox.getItem(2)).toEqual({value: expectedValues[2]});
  });
});
