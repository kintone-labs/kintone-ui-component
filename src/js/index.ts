import './polyfill';
import '../css/font.css';
import DateTime from './DateTime';
import Tabs from './Tabs';
import Text from './Text';
import ColorPicker from './ColorPicker';
import Table from './Table';
import createTableCell from './Table/TableCellFactory';
import Spinner from './Spinner';
import Button from './Button';
import Alert from './Alert';
import Label from './Label';
import IconButton from './IconButton';
import NotifyPopup from './NotifyPopup';
import MultipleChoice from './MultipleChoice';
import CheckBox from './CheckBox';
import RadioButton from './RadioButton';
import Dropdown from './Dropdown';
import Dialog from './Dialog';
import TextArea from './TextArea';
import Attachment from './Attachment';
import FieldGroup from './FieldGroup';

const kintoneUIComponent = {
  Alert,
  Label,
  Button,
  IconButton,
  Text,
  Dropdown,
  DateTime,
  NotifyPopup,
  MultipleChoice,
  RadioButton,
  CheckBox,
  Spinner,
  Table,
  FieldGroup,
  Dialog,
  TextArea,
  Attachment,
  createTableCell,
  Tabs,
  ColorPicker
};
export default kintoneUIComponent;
export {
  Alert,
  Label,
  Button,
  IconButton,
  Text,
  Dropdown,
  DateTime,
  NotifyPopup,
  MultipleChoice,
  RadioButton,
  CheckBox,
  Spinner,
  Table,
  FieldGroup,
  Dialog,
  TextArea,
  Attachment,
  createTableCell,
  Tabs,
  ColorPicker
};
