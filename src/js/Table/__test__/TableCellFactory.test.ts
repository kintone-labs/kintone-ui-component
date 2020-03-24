/* eslint-disable @typescript-eslint/no-empty-function */
import createTableCell from '../TableCellFactory';
import Table from '../index';
import {fireEvent} from '@testing-library/dom';

const message = {
  INVALID_ARGUMENT: 'Error: invalid function arguments',
  INVALID_TABLE_FIELDS: 'Invalid table cell field type, this function accept only '
};

const validFieldTypes = ['text', 'dropdown', 'checkbox', 'multichoice', 'radio', 'label', 'icon', 'alert'];

describe('Unit test for TableCellFactory', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });

  test('createTableCell is called successfully with all type of cell', () => {
    try {
      const typeList = ['dropdown', 'multichoice', 'radio', 'label', 'icon', 'alert'];
      const componentProps = {
        dropdown: {
          items: [
            {
              label: 'Orange',
              value: 'Orange',
              isDisabled: true
            },
            {
              label: 'Banana',
              value: 'Banana',
              isDisabled: false
            }
          ],
          value: 'Banana'
        },
        multichoice: {
          items: [
            {
              label: 'Orange',
              value: 'Orange',
              isDisabled: false
            },
            {
              label: 'Banana',
              value: 'Banana',
              isDisabled: true
            },
            {
              label: 'Lemon',
              value: 'Lemon',
              isDisabled: true
            },
          ],
          value: ['Orange', 'Banana']
        },
        radio: {
          name: 'fruit',
          items: [
            {
              label: 'Orange',
              value: 'Orange',
              isDisabled: false
            },
            {
              label: 'Banana',
              value: 'Banana',
              isDisabled: true
            },
            {
              label: 'Lemon',
              value: 'Lemon',
              isDisabled: true
            },
          ],
          value: 'Banana'
        },
        label: {text: 'This is Label'},
        icon: {type: 'insert', color: 'blue', size: 'small'},
        alert: {text: 'Network error', type: 'error'}
      };
      const myTable = new Table({
        actionButtonsShown: false,
        defaultRowData: {},
        data: [componentProps],
        columns: typeList.map((type, index) => {
          return {
            header: type,
            cell: function() {
              return createTableCell(type, type, componentProps[type]);
            }
          };
        })
      });
      myTable.render();

      // TODO: Remove unreachable case line 49 TableCellFactory.ts
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  test('createTableCell listener work normally', () => {
    const typeList = ['text', 'radio', 'label'];
    const newTextValue = 'New text value';
    const newRadioValue = 'Orange';
    const componentProps = {
      text: {
        value: 'Text value',
        onChange: function(newValue: any) {
          expect(newValue.rowIndex).toEqual(0);
          expect(newValue.fieldName).toEqual('text');
          expect(newValue.data[0].text.value).toEqual(newTextValue);
        },
        onClick: function(newValue: any) {
          expect(newValue.rowIndex).toEqual(0);
          expect(newValue.fieldName).toEqual('text');
        }
      },
      radio: {
        name: 'fruit',
        items: [
          {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
          },
          {
            label: 'Banana',
            value: 'Banana',
            isDisabled: false
          },
          {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: false
          },
        ],
        value: 'Banana',
        onChange: function(newValue: any) {
          expect(newValue.rowIndex).toEqual(0);
          expect(newValue.data[0].radio.value).toEqual(newRadioValue);
        }
      },
      label: {
        text: 'Label text',
        onClick: function(newValue: any) {
          expect(newValue.rowIndex).toEqual(0);
          expect(newValue.fieldName).toEqual('label');
        }
      }
    };

    const myTable = new Table({
      actionButtonsShown: false,
      defaultRowData: {},
      data: [componentProps],
      columns: typeList.map((type) => {
        return {
          header: type,
          cell: function() {
            return createTableCell(type, type, componentProps[type]);
          }
        };
      })
    });
    const container = myTable.render();

    // Test event listener input
    const inputs = container.getElementsByTagName('input');
    fireEvent.change(inputs[0], {
      target: {value: newTextValue}
    });
    fireEvent.click(inputs[0]);

    // Test event listener dropdown, checkbox, multichoice, radio
    const options = container.getElementsByTagName('label');
    fireEvent.click(options[0]);

    // Test event listener icon, alert, label
    const labels = container.getElementsByClassName('kuc-label');
    fireEvent.click(labels[0]);

    // TODO: Remove unreachable case line 103 TableCellFactory.ts
  });

  test('createTableCell throw error when called with invalid type of cell', () => {
    try {
      createTableCell('abc', 'field_name');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(message.INVALID_TABLE_FIELDS + '"' + validFieldTypes.join('","') + '"');
    }
  });
  test('createTableCell throw error when called without fieldname', () => {
    try {
      // @ts-ignore
      createTableCell('text');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toEqual(message.INVALID_ARGUMENT);
    }
  });
});