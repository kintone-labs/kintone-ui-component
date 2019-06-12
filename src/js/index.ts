import '@babel/polyfill'
import '../legacyJS/style'
import './polyfill'
import DateTime from './DateTime'
import Tabs from './Tabs'
import Text from './Text'
import ColorPicker from './ColorPicker'
import RadioButton from './RadioButton'
import Spinner from '../legacyJS/js/components/Spinner'
import Button from '../legacyJS/js/components/Button'
import Alert from '../legacyJS/js/components/Alert'
import Label from '../legacyJS/js/components/Label'
import IconButton from '../legacyJS/js/components/IconButton'
import NotifyPopup from '../legacyJS/js/components/NotifyPopup'

import Dropdown from '../legacyJS/js/components/Dropdown'
import MultipleChoice from '../legacyJS/js/components/MultipleChoice'
import CheckBox from '../legacyJS/js/components/CheckBox'
import TextArea from '../legacyJS/js/components/TextArea'
import Attachment from '../legacyJS/js/components/Attachment'
import FieldGroup from '../legacyJS/js/components/FieldGroup'
import Dialog from '../legacyJS/js/components/Dialog'
import Table from '../legacyJS/js/components/Table'
import createTableCell from '../legacyJS/js/components/TableCellFactory'

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
