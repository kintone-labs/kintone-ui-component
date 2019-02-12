import TableCell from './TableCell';
import Text from './Text';
import Message from '../constant/Message';
const validFieldTypes = ['text', 'radio'];

const createTableCell = (type, fieldName, props) => {
  let field;
  if (!validFieldTypes.some(fieldType => fieldType === type)) {
    throw new Error(Message.control.INVALID_TABLE_FIELDS + '"' + validFieldTypes.join('","') + '"');
  }

  const init = async ({updateRowData, rowIndex, table}) => {
    // switch case types
    switch (type) {
      case 'text':
        field = new Text({...props, value: ''});
        field.on('change', (value) => {
          const newRowData = JSON.parse(JSON.stringify(table.data[rowIndex]));
          newRowData[fieldName].value = value;
          updateRowData(newRowData, false);
        });
        break;
      default:
        break;
    }
    // return DOM
    const dom = await field.render();
    return dom;
  };
  const update = ({rowData}) => {
    const cellData = rowData[fieldName] || {};
    if (cellData) {
      field.setValue(cellData.value);
    }
  };

  return new TableCell({init, update});
};

export default createTableCell;
