import { __assign } from "tslib";
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
var validFieldTypes = ['text', 'dropdown', 'checkbox', 'multichoice', 'radio', 'label', 'icon', 'alert'];
var createTableCell = function (type, fieldName, props) {
    if (props === void 0) { props = {}; }
    var field;
    var FieldComponent;
    if (!validFieldTypes.some(function (fieldType) { return fieldType === type; })) {
        throw new Error(Message.control.INVALID_TABLE_FIELDS + '"' + validFieldTypes.join('","') + '"');
    }
    if (!fieldName) {
        throw new Error(Message.common.INVALID_ARGUMENT);
    }
    var init = function (_a) {
        var updateRowData = _a.updateRowData, rowIndex = _a.rowIndex, table = _a.table;
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
        field = new FieldComponent(__assign(__assign({}, table.data[rowIndex][fieldName]), props));
        // return DOM
        var dom = field.render();
        // assign listeners
        switch (type) {
            case 'text':
                field.on('change', function (e) {
                    var rowData = JSON.parse(JSON.stringify(table.data[rowIndex]));
                    rowData[fieldName].value = e.target.value;
                    updateRowData(rowData, false, true, fieldName);
                    // if has custom on change call it
                    if (props && props.onChange) {
                        var data = table.data;
                        props.onChange({ data: data, rowIndex: rowIndex, fieldName: fieldName });
                    }
                });
                field.on('click', function (e) {
                    var rowData = JSON.parse(JSON.stringify(table.data[rowIndex]));
                    rowData[fieldName].value = e.target.value;
                    updateRowData(rowData, false, true, fieldName);
                    if (props && props.onClick) {
                        var data = table.data;
                        props.onClick({ data: data, rowIndex: rowIndex, fieldName: fieldName });
                    }
                });
                break;
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
            case 'icon':
            case 'alert':
            case 'label':
                field.on('click', function (e) {
                    if (props && props.onClick) {
                        var data = table.data;
                        props.onClick({ data: data, rowIndex: rowIndex, fieldName: fieldName });
                    }
                });
                break;
            default:
                break;
        }
        return dom;
    };
    var update = function (_a) {
        var rowData = _a.rowData;
        var cellData = rowData[fieldName] || {};
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
    return new TableCell({ init: init, update: update });
};
export default createTableCell;
