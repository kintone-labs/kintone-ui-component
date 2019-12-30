/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-empty-function */
import {render, fireEvent} from '@testing-library/react';
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
    const {container} = render(<Table columns={columns} data={tableData} />);
    expect(container.firstElementChild).toBeTruthy();
    const headers = container.getElementsByClassName('kuc-table-th');
    expect(headers.length).toEqual(1);
  });

  test('Event handler of Table', () => {
    const tableData = [
      {
        text: 'this is a text',
        number: 456
      },
      {
        number: 123
      }
    ];
    const defaultRowData = {
      text: 'this is a text',
      number: 123
    };
    const columns = [
      {
        header: 'Text',
        cell: ({rowIndex, onCellChange}: any) => {
          return (
            <input
              value={tableData[rowIndex].text}
              // @ts-ignore
              data-testid="unit-test-input"
              onChange={e => {
                onCellChange(e.target.value, tableData, rowIndex, 'text');
              }}
            />
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
      // expect(false).toBeTruthy();
      expect(data).toBeTruthy();
    };
    // @ts-ignore
    const handleRowAdd = ({data}) => {
      expect(data).toBeTruthy();
    };
    // @ts-ignore
    const handleRowRemove = ({data}) => {
      expect(data).toBeTruthy();
    };
    const {container, getAllByTestId} = render(
      <Table
        // @ts-ignore
        columns={columns}
        data={tableData}
        onRowAdd={handleRowAdd}
        onCellChange={handleCellChange}
        onRowRemove={handleRowRemove}
        defaultRowData={defaultRowData}
      />
    );
    expect(container.firstElementChild).toBeTruthy();
    const actionButtons = container.getElementsByTagName('button');
    actionButtons[0].click();
    actionButtons[1].click();
    const unitTestInput = getAllByTestId('unit-test-input');
    fireEvent.change(unitTestInput[0], {
      target: {
        value: 'new value'
      }
    });
  });

  test('addRow without defaultRowData', () => {
    const tableData = [
      {
        text: 'this is a text',
        number: 456
      },
      {
        number: 123
      }
    ];
    const columns = [
      {
        header: 'Text',
        cell: ({rowIndex, onCellChange}: any) => {
          return (
            <input
              value={tableData[rowIndex].text}
              // @ts-ignore
              data-testid="unit-test-input"
              onChange={e => {
                onCellChange(e.target.value, tableData, rowIndex, 'text');
              }}
            />
          );
        },
        tdProps: (cellProps: any) => {
          return {};
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
    const handleRowAdd = ({data}) => {
      expect(data).toBeTruthy();
    };

    const {container} = render(
      <Table
        // @ts-ignore
        columns={columns}
        data={tableData}
        onRowAdd={handleRowAdd}
      />
    );
    expect(container.firstElementChild).toBeTruthy();
    const actionButtons = container.getElementsByTagName('button');
    actionButtons[0].click();

    // TODO: Remove unreachable code line 218 index.tsx
    // TODO: Remove unreachable code line 181 index.tsx
    // TODO: Remove unreachable code line 165 index.tsx
  });
});