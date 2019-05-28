import '@babel/polyfill';
import '../legacyJS/style';
import './polyfill'
import Alert from '../legacyJS/js/components/Alert';
import Label from './Label';
import Button from '../legacyJS/js/components/Button';
import IconButton from './IconButton';
import Dropdown from '../legacyJS/js/components/Dropdown';
import NotifyPopup from './NotifyPopup';
import DateTime from './DateTime';
import Text from '../legacyJS/js/components/Text';
import MultipleChoice from '../legacyJS/js/components/MultipleChoice';
import RadioButton from '../legacyJS/js/components/RadioButton';
import CheckBox from '../legacyJS/js/components/CheckBox';
import Spinner from './Spinner';
import Table from '../legacyJS/js/components/Table';
import FieldGroup from '../legacyJS/js/components/FieldGroup';
import Dialog from '../legacyJS/js/components/Dialog';
import TextArea from '../legacyJS/js/components/TextArea';
import Attachment from '../legacyJS/js/components/Attachment';
import createTableCell from '../legacyJS/js/components/TableCellFactory';
import Tabs from './Tabs'
import ColorPicker from './ColorPicker'

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
  DateTime,
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
  Tabs,
  ColorPicker
};
