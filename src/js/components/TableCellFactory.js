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
  let FieldComponent;
  if (!validFieldTypes.some(fieldType => fieldType === type)) {
    throw new Error(Message.control.INVALID_TABLE_FIELDS + '"' + validFieldTypes.join('","') + '"');
  }
  const init = ({updateRowData, rowIndex, table}) => {
    switch (type) {
      case 'text':
        FieldComponent = Text;
        break;
      case 'dropdown':
        FieldComponent = Dropdown;
        break;
      case 'checkbox':
        FieldComponent = CheckBox;
        break;
      case 'multichoice':
        FieldComponent = MultipleChoice;
        break;
      case 'radio':
        table.data[rowIndex][fieldName].name += '_' + rowIndex;
        FieldComponent = RadioButton;
        break;
      case 'label':
        FieldComponent = Label;
        break;
      case 'icon':
        FieldComponent = IconButton;
        break;
      case 'alert':
        FieldComponent = Alert;
        break;
      default:
        break;
    }
    field = new FieldComponent({...table.data[rowIndex][fieldName]});

    // assign listeners
    switch (type) {
      case 'text':
      case 'dropdown':
      case 'checkbox':
      case 'multichoice':
      case 'radio':
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
        // if has custom onclick add to props
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
