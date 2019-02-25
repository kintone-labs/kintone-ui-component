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
var validFieldTypes = ['text', 'dropdown', 'checkbox', 'multichoice', 'radio', 'label', 'icon', 'alert'];

var createTableCell = function createTableCell(type, fieldName) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var field = void 0;
  var FieldComponent = void 0;
  if (!validFieldTypes.some(function (fieldType) {
    return fieldType === type;
  })) {
    throw new Error(Message.control.INVALID_TABLE_FIELDS + '"' + validFieldTypes.join('","') + '"');
  }
  var init = function init(_ref) {
    var updateRowData = _ref.updateRowData,
        rowIndex = _ref.rowIndex,
        columnIndex = _ref.columnIndex,
        table = _ref.table;

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
    field = new FieldComponent(Object.assign({}, table.data[rowIndex][fieldName], props));
    // return DOM
    var dom = field.render();
    // assign listeners
    switch (type) {
      case 'text':
      case 'dropdown':
      case 'checkbox':
      case 'multichoice':
      case 'radio':
        field.on('change', function (value) {
          var rowData = JSON.parse(JSON.stringify(table.data[rowIndex]));
          rowData[fieldName].value = value;
          updateRowData(rowData, false, true, fieldName);
          // if has custom on change call it
          if (props && props.onChange) {
            var data = table.data;
            props.onChange({ data: data, rowIndex: rowIndex, fieldName: fieldName });
          }
        });
        break;
      default:
        break;
    }
    return dom;
  };
  var update = function update(_ref2) {
    var rowData = _ref2.rowData;

    var cellData = rowData[fieldName] || {};
    if (cellData && field._reactObject && field.setValue) {
      field.setValue(cellData.value);
    }
  };
  return new TableCell({ init: init, update: update });
};
export default createTableCell;