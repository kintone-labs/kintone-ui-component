/* eslint-disable @typescript-eslint/no-empty-function */
import Table from '../index';

describe('Unit test for Table addRow', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('addRow button work normally', () => {
    const defaultRowData = {
      text: {
        value: 'default text field value'
      }
    };
    const handleRowAdd = ({data, rowIndex}: any) => {
      expect(data.length).toEqual(2);
      expect(data[rowIndex]).toStrictEqual(defaultRowData);
    };
    const myTable = new Table({
      actionButtonsShown: true,
      data: [
        {text: {value: 'this is a text field'}}
      ],
      defaultRowData: defaultRowData,
      onRowAdd: handleRowAdd
    });
    const container = myTable.render();
    const actionButtons = container.getElementsByTagName('button');
    actionButtons[0].click();
  });
});