import '@babel/polyfill';
import '../legacyJS/style';
import Alert from '../legacyJS/js/components/Alert';
import Label from '../legacyJS/js/components/Label';
import Button from '../legacyJS/js/components/Button';
import IconButton from '../legacyJS/js/components/IconButton';
import Dropdown from '../legacyJS/js/components/Dropdown';
import NotifyPopup from '../legacyJS/js/components/NotifyPopup';
import Text from '../legacyJS/js/components/Text';
import MultipleChoice from '../legacyJS/js/components/MultipleChoice';
import RadioButton from '../legacyJS/js/components/RadioButton';
import CheckBox from '../legacyJS/js/components/CheckBox';
import Spinner from '../legacyJS/js/components/Spinner';
import Table from '../legacyJS/js/components/Table';
import FieldGroup from '../legacyJS/js/components/FieldGroup';
import Dialog from '../legacyJS/js/components/Dialog';
import TextArea from '../legacyJS/js/components/TextArea';
import Attachment from '../legacyJS/js/components/Attachment';
import createTableCell from '../legacyJS/js/components/TableCellFactory';

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
  FieldGroup,
  Dialog,
  TextArea,
  Attachment,
  createTableCell,
};
window['kintoneUIComponent'] = kintoneUIComponent;
export default kintoneUIComponent;
export {
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
  Table
};