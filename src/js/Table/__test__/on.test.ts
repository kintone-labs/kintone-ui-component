/* eslint-disable @typescript-eslint/no-empty-function */
import Table from '../index';

const message = {
  INVALID_EVENT: 'Invalid event, this function accept only '
};
const validEventNames = ['rowAdd', 'rowRemove', 'cellChange'];

describe('Unit test for Table event binding', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('on function work normally', () => {
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
    });
    const container = myTable.render();
    myTable.on('rowAdd', handleRowAdd);
    const actionButtons = container.getElementsByTagName('button');
    actionButtons[0].click();
  });

  test('Throw error when called with invalid event name', () => {
    try {
      const myTable = new Table();
      myTable.render();
      myTable.on('123', () => {});
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(message.INVALID_EVENT + ' ' + validEventNames.join(','));
    }
  });
});