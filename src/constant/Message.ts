import {availableLocales} from '../react/DateTime/components/Locale'
const Message = {
    common: {
        SELECTTION_DUPLICATE_VALUE: 'The selection has duplicate value',
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
        MISSING_TAB_NAME: 'Missing tab name on tab item[{{index}}]'
    },
    datetime: {
        INVALID_LOCALE: `Invalid locale. This function accepts only the following locales: ${availableLocales}`
    }
};
  
export default Message;