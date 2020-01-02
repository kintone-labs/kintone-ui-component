/* eslint-disable @typescript-eslint/no-empty-function */
import Table from '../index';

describe('Unit test for Table removeRow', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('removeRow button work normally', () => {
    const defaultRowData = {
      text: {
        value: 'default text field value'
      }
    };
    const handleRowRemove = ({data, rowIndex}: any) => {
      expect(data.length).toEqual(1);
      expect(rowIndex).toEqual(0);
    };
    const myTable = new Table({
      actionButtonsShown: true,
      data: [
        {text: {value: 'this is a text field'}},
        {text: {value: 'this is a text field 2'}}
      ],
      defaultRowData: defaultRowData,
      onRowRemove: handleRowRemove
    });
    const container = myTable.render();
    const actionButtons = container.getElementsByTagName('button');
    actionButtons[1].click();

    // TODO: Remove unreachable code line 89, 90, 91 index.ts
  });
});