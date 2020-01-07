import TableCell from './TableCell';
import Text from '../Text';
import Dropdown from '../Dropdown';
import CheckBox from '../CheckBox';
import MultipleChoice from '../MultipleChoice';
import RadioButton from '../RadioButton';
import Label from '../Label';
import IconButton from '../IconButton';
import Alert from '../Alert';
import Message from '../../constant/Message';
const validFieldTypes = ['text', 'dropdown', 'checkbox', 'multichoice', 'radio', 'label', 'icon', 'alert'];

const createTableCell = (type: string, fieldName: string, props: any = {}) => {
  let field: any;
  let FieldComponent: any;
  if (!validFieldTypes.some(fieldType => fieldType === type)) {
    throw new Error(Message.control.INVALID_TABLE_FIELDS + '"' + validFieldTypes.join('","') + '"');
  }
  if (!fieldName) {
    throw new Error(Message.common.INVALID_ARGUMENT);
  }
  const init = ({updateRowData, rowIndex, table}: any) => {
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
    field = new FieldComponent({...table.data[rowIndex][fieldName], ...props});
    // return DOM
    const dom = field.render();
    // assign listeners
    switch (type) {
      case 'text':
        field.on('change', (e: Event) => {
          const rowData = JSON.parse(JSON.stringify(table.data[rowIndex]));
          rowData[fieldName].value = (e.target as HTMLInputElement).value;
          updateRowData(rowData, false, true, fieldName);
          // if has custom on change call it
          if (props && props.onChange) {
            const data = table.data;
            props.onChange({data, rowIndex, fieldName});
          }
        });
        field.on('click', (e: Event) => {
          const rowData = JSON.parse(JSON.stringify(table.data[rowIndex]));
          rowData[fieldName].value = (e.target as HTMLInputElement).value;
          updateRowData(rowData, false, true, fieldName);
          if (props && props.onClick) {
            const data = table.data;
            props.onClick({data, rowIndex, fieldName});
          }
        });
        break;
      case 'dropdown':
      case 'checkbox':
      case 'multichoice':
      case 'radio':
        field.on('change', (value: string[] | string) => {
          const rowData = JSON.parse(JSON.stringify(table.data[rowIndex]));
          rowData[fieldName].value = value;
          updateRowData(rowData, false, true, fieldName);
          // if has custom on change call it
          if (props && props.onChange) {
            const data = table.data;
            props.onChange({data, rowIndex, fieldName});
          }
        });
        break;
      case 'icon':
      case 'alert':
      case 'label':
        field.on('click', (e: Event) => {
          if (props && props.onClick) {
            const data = table.data;
            props.onClick({data, rowIndex, fieldName});
          }
        });
        break;
      default:
        break;
    }
    return dom;
  };
  const update = ({rowData}: any) => {
    const cellData = rowData[fieldName] || {};
    if (cellData && field.setItems) {
      field.setItems(cellData.items);
    }
    if (cellData && field.setValue) {
      field.setValue(cellData.value);
    }
    if (cellData && field.setText) {
      field.setText(cellData.text);
    }
  };
  return new TableCell({init, update});
};
export default createTableCell;
