import { availableLocales } from '../react/DateTime/components/Locale';
var Message = {
    common: {
        SELECTTION_DUPLICATE_VALUE: 'The selection has duplicate value',
        CHECKED_ITEM_LIST_DUPLICATE_VALUE: 'The checked item list has duplicate value',
        INVALID_ARGUMENT: 'Error: invalid function arguments'
    },
    control: {
        INVALID_EVENT: 'Invalid event, this function accept only ',
        INVALID_TABLE_FIELDS: 'Invalid table cell field type, this function accept only '
    },
    radioBtn: {
        MISSING_NAME: 'Missing name for radio buttons'
    },
    tabs: {
        MISSING_TAB_NAME: 'Missing tab name on tab item[{{index}}]',
        MISSING_NEW_ITEM_TABNAME: 'Missing tab name.',
        INVALID_ACTION: 'Behavior invalid',
    },
    datetime: {
        INVALID_DATE: 'Invalid date',
        INVALID_LOCALE: "Invalid locale. This function accepts only the following locales: " + availableLocales,
        INVALID_DATEFORMAT_SEPARATOR: 'Invalid date format separator. Valid separators are:  "/", "-", " ", ":"',
    },
    colorPicker: {
        INVALID_COLOR: 'Invalid color string'
    },
    selection: {
        MISSING_VALUE_PROPERTY_IN_ITEMS: 'Missing options.items[x].value property',
        INVALID_VALUE: 'Specified invalid options.value not included in options.items[x].value'
    }
};
export default Message;
