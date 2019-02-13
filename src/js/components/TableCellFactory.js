import TableCell from './TableCell';
import Text from './Text';
import Dropdown from './Dropdown';
import CheckBox from './CheckBox';
import MultipleChoice from './MultipleChoice';
import RadioButton from './RadioButton';
import Label from './Label';
import IconButton from './IconButton';
import Alert from './Alert';
import Message from '../constant/Message';
const validFieldTypes = ['text', 'dropdown', 'checkbox', 'multichoice', 'radio', 'label', 'icon', 'alert'];

const createTableCell = (type, fieldName) => {
  let field;
  if (!validFieldTypes.some(fieldType => fieldType === type)) {
    throw new Error(Message.control.INVALID_TABLE_FIELDS + '"' + validFieldTypes.join('","') + '"');
  }
  const init = ({updateRowData, rowIndex, table}) => {
    // switch case types
    switch (type) {
      case 'text':
      case 'dropdown':
      case 'checkbox':
      case 'multichoice':
      case 'radio':
        if (type === 'text') {
          field = new Text({...table.data[rowIndex][fieldName]});
        }
        if (type === 'dropdown') {
          field = new Dropdown({...table.data[rowIndex][fieldName]});
        }
        if (type === 'checkbox') {
          field = new CheckBox({...table.data[rowIndex][fieldName]});
        }
        if (type === 'multichoice') {
          field = new MultipleChoice({...table.data[rowIndex][fieldName]});
        }
        if (type === 'radio') {
          table.data[rowIndex][fieldName].name += '_' + rowIndex;
          field = new RadioButton({...table.data[rowIndex][fieldName]});
        }
        field.on('change', (value) => {
          const rowData = JSON.parse(JSON.stringify(table.data[rowIndex]));
          rowData[fieldName].value = value;
          updateRowData(rowData, false);
          // if has custom on change call it
        });
        break;
      case 'label':
      case 'icon':
      case 'alert':
        if (type === 'label') {
          field = new Label({...table.data[rowIndex][fieldName]});
        }
        if (type === 'icon') {
          field = new IconButton({...table.data[rowIndex][fieldName]});
        }
        if (type === 'alert') {
          field = new Alert({...table.data[rowIndex][fieldName]});
        }
        // if has custom onclick call it
        break;
      default:
        break;
    }
    // return DOM
    const dom = field.render();
    return dom;
  };
  const update = ({rowData}) => {
    const cellData = rowData[fieldName] || {};
    if (cellData && field._reactObject && field.setValue) {
      field.setValue(cellData.value);
    }
  };
  return new TableCell({init, update});
};

export default createTableCell;
