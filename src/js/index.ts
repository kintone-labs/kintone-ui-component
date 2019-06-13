import '@babel/polyfill'
import './polyfill'
import '../legacyJS/style'
import '../css/base.css'
import DateTime from './DateTime'
import Tabs from './Tabs'
import Text from './Text'
import ColorPicker from './ColorPicker'
import Table from './Table'
import createTableCell from './Table/TableCellFactory'
import Spinner from './Spinner'
import Button from './Button'
import Alert from './Alert'
import Label from './Label'
import IconButton from './IconButton'
import NotifyPopup from './NotifyPopup'
import MultipleChoice from './MultipleChoice'
import CheckBox from './CheckBox'

import RadioButton from '../legacyJS/js/components/RadioButton'
import Dropdown from '../legacyJS/js/components/Dropdown'
import TextArea from '../legacyJS/js/components/TextArea'
import Attachment from '../legacyJS/js/components/Attachment'
import FieldGroup from '../legacyJS/js/components/FieldGroup'
import Dialog from '../legacyJS/js/components/Dialog'

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
