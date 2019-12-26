/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-empty-function */
import {render} from '@testing-library/react';
import Table from '../index';
import React from 'react';

describe('Unit test Table react', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('Render successfully without props', () => {
    const {container} = render(<Table />);
    expect(container.firstElementChild).toBeTruthy();
    // @ts-ignore
    expect(container.firstElementChild.className).toBe('kuc-table');
  });

  test('Render successfully with props isVisible = false', () => {
    const {container} = render(<Table isVisible={false} />);
    expect(container.firstElementChild).toBeTruthy();
    // @ts-ignore
    expect(container.firstElementChild.className).toBe('kuc-table');
  });

  test('Render successfully with props actionButtonsShown = false', () => {
    const {container} = render(<Table actionButtonsShown={false} />);
    expect(container.firstElementChild).toBeTruthy();
    // @ts-ignore
    expect(container.firstElementChild.className).toBe('kuc-table');
  });

  test('Render successfully with full props', () => {
    const tableData = [
      {text: 'this is a text'},
      {number: 123}
    ];
    const columns = [
      {
        header: 'Text',
        cell: ({rowIndex}: any) => {
          return (
            <div>{tableData[rowIndex].text}</div>
          );
        }
      },
      {
        cell: ({rowIndex}: any) => {
          return (
            <div>{tableData[rowIndex].number}</div>
          );
        }
      },
    ];
    // @ts-ignore
    const handleCellChange = ({data}) => {
      expect(data).toBeTruthy();
    };
    // @ts-ignore
    const {container} = render(<Table columns={columns} data={tableData} onCellChange={handleCellChange} />);
    expect(container.firstElementChild).toBeTruthy();
    const headers = container.getElementsByClassName('kuc-table-th');
    expect(headers.length).toEqual(1);
  });
});