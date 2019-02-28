
import '@babel/polyfill';
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
import ColorPicker from './ColorPicker';
import Dialog from './Dialog';
import TextArea from './TextArea';
import Attachment from './Attachment';
import createTableCell from './TableCellFactory';

const kintoneUIComponent = {
  Alert,
  Label,
  Button,
  IconButton,
  Text,
  Dropdown,
  NotifyPopup,
  MultipleChoice,
  RadioButton,
  CheckBox,
  Spinner,
  Table,
  ColorPicker,
  Dialog,
  TextArea,
  Attachment,
  createTableCell,
};
window.kintoneUIComponent = kintoneUIComponent;
export default kintoneUIComponent;
