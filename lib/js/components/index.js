import '../../style';

import Alert from './Alert';
import Label from './Label';
import Button from './Button';
import IconButton from './IconButton';
import Dropdown from './Dropdown';
import NotifyPopup from './NotifyPopup';
import Text from './Text';
import MultipleChoice from './MultipleChoice';
import RadioButton from './RadioButton';
import CheckBox from './CheckBox';
import Spinner from './Spinner';
import Table from './Table';

var kintoneUIComponent = {
    Alert: Alert,
    Label: Label,
    Button: Button,
    IconButton: IconButton,
    Text: Text,
    Dropdown: Dropdown,
    NotifyPopup: NotifyPopup,
    MultipleChoice: MultipleChoice,
    RadioButton: RadioButton,
    CheckBox: CheckBox,
    Spinner: Spinner,
    Table: Table
};

window.kintoneUIComponent = kintoneUIComponent;

export default kintoneUIComponent;