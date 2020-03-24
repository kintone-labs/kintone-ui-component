/* eslint-disable @typescript-eslint/no-empty-function */
import '../polyfill';
import Control, {ControlProps} from '../Control';
import '../../css/DateTime.css';
import '../../css/Text.css';
import {en, ja, zh, format} from '../../react/DateTime/components/Locale';
import Locale from '../../react/DateTime/components/localizationData/locale-dto';
import {parseStringToDate, parseStringToTime} from '../../react/DateTime/components/utils';
import Calendar from './components/Calendar';
import TimePicker from './components/TimePicker';
import Message from '../../constant/Message';
type DateTimeProps = ControlProps & {
  value?: Date | null;
  type?: 'date' | 'time' | 'datetime';
  locale?: 'ja' | 'en' | 'zh';
  dateFormat?: string;
  timeFormat?: string;
  onChange?: (date: Date) => void;
}

class DateTime extends Control<DateTimeProps> {
  protected element: HTMLElement
  private _dateTextInput: HTMLInputElement
  private _timeTextInput: HTMLInputElement
  private _dateErrorDiv: HTMLElement
  private _calendar: Calendar
  private _locale: Locale = ja

  private _timePicker: TimePicker
  private _time: Date = new Date()

  constructor(params?: DateTimeProps) {
    super();
    this._props = {
      ...this._props,
      ...{
        value: new Date(),
        type: 'datetime',
        locale: 'ja',
        dateFormat: 'MM/dd/YYYY',
        timeFormat: 'HH:mm',
        onChange: () => {}
      }
    };
    if (params && typeof params.isDisabled !== 'boolean') {
      delete params.isDisabled;
    }
    if (params) {
      this._props = {...this._props, ...params};
    }
    if (this._props.type === 'date' || this._props.type === 'datetime') {
      this.setLocale(this._props.locale);
    }
    if (this._props.value && (this._props.type === 'time' || this._props.type === 'datetime')) {
      this._time = this._props.value;
      this._time.setSeconds(0);
    }
  }

  render() {
    this._renderContainer();
    switch (this._props.type) {
      case 'date':
        this._renderDate();
        break;
      case 'time':
        this._renderTime();
        break;
      case 'datetime':
      default:
        this._renderDateTime();
        break;
    }
    super.rerender();
    return this.element;
  }

  rerender(changedAttr: string[]) {
    super.rerender();
    if (changedAttr.indexOf('dateTextInput') !== -1) {
      if (this._props.value && this._props.dateFormat) {
        const newTextInputValue = format(this._props.value, this._props.dateFormat);
        if (newTextInputValue === this._props.dateFormat) {
          this._dateErrorDiv.style.display = 'block';
        }
        this._dateTextInput.value = newTextInputValue;
      } else {
        this._dateTextInput.value = '';
      }
    }
    if (changedAttr.indexOf('timeTextInput') !== -1) {
      this._timeTextInput.value = format(this._time, 'HH:mm', {locale: this._locale});
      this._timeTextInput.dataset.previousValidTime = format(this._time, 'HH:mm', {locale: this._locale});
    }
    if (changedAttr.indexOf('isDisabled') !== -1) {
      if (this._calendar) {
        this._calendar.hide();
      }
      if (this._timePicker) {
        this._timePicker.hide();
      }
      if (this._timeTextInput) {
        if (this._props.isDisabled) {
          this._timeTextInput.setAttribute('disabled', `${this._props.isDisabled}`);
        } else {
          this._timeTextInput.removeAttribute('disabled');
        }
      }
      if (this._dateTextInput) {
        if (this._props.isDisabled) {
          this._dateTextInput.setAttribute('disabled', `${this._props.isDisabled}`);
        } else {
          this._dateTextInput.removeAttribute('disabled');
        }
      }
    }
  }

  private _renderContainer() {
    const container = document.createElement('div');
    container.classList.add('date-time-container');
    this.element = container;
  }


  private _renderDateInputErrorLabel() {
    const dateError = document.createElement('div');
    dateError.className = 'label-error';
    dateError.style.display = 'none';
    const span = document.createElement('span');
    span.textContent = Message.datetime.INVALID_DATE;
    dateError.appendChild(span);
    this._dateErrorDiv = dateError;
    return dateError;
  }

  private _renderDateTextInput() {
    const dateTextInput = document.createElement('input');
    dateTextInput.type = 'text';
    dateTextInput.className = 'kuc-input-text text-input';
    if (this._props.value && this._props.dateFormat) {
      const newTextInputValue = format(this._props.value, this._props.dateFormat);
      if (newTextInputValue === this._props.dateFormat) {
        this._dateErrorDiv.style.display = 'block';
      }
      dateTextInput.value = newTextInputValue;
    }
    if (this._props.isDisabled) {
      dateTextInput.disabled = this._props.isDisabled;
    }

    // event handlers
    dateTextInput.onclick = () => {
      if (this._dateErrorDiv.style.display === 'block') {
        this._props.value = null;
      }
      this._calendar.setValue(this._props.value);
      this._calendar.rerender(['offsetLeft'], {left: dateTextInput.offsetLeft});
      this._calendar.show();
    };
    dateTextInput.onfocus = () => {
      if (this._dateErrorDiv.style.display === 'none') {
        this.rerender(['dateTextInput']);
      }
    };
    dateTextInput.onblur = (e) => {
      this._onClickOutside(e);
    };
    dateTextInput.onkeydown = (e) => {
      if (e.key === 'Tab') {
        this._calendar.hide();
      }
    };

    this._dateTextInput = dateTextInput;
  }

  private _renderTimeTextInput() {
    const timeTextInputContainer = document.createElement('div');
    timeTextInputContainer.classList.add('text-input-container');
    const timeTextInput = document.createElement('input');
    if (this._props.isDisabled) {
      timeTextInput.disabled = this._props.isDisabled;
    }
    timeTextInput.type = 'text';
    timeTextInput.className = 'kuc-input-text text-input time';
    timeTextInput.value = format(this._time, 'HH:mm', {locale: this._locale});
    timeTextInput.maxLength = 5;
    timeTextInput.dataset.previousValidTime = format(this._time, 'HH:mm', {locale: this._locale});
    this._timeTextInput = timeTextInput;
    this._registerTimeTextInputEvents();
  }

  private _registerTimeTextInputEvents() {
    this._timeTextInput.onclick = () => {
      if (this._timeTextInput.selectionStart && this._timeTextInput.selectionStart &&
        this._timeTextInput.selectionStart >= 2 && this._timeTextInput.selectionStart <= 5
      ) {
        this._timeTextInput.setSelectionRange(3, 5);
      } else {
        this._timeTextInput.setSelectionRange(0, 2);
      }
      this._timePicker.rerender(['offsetLeft'], {left: this._timeTextInput.offsetLeft});
      this._timePicker.show();
    };
    this._timeTextInput.onfocus = (e) => {
      setTimeout(() => {
        this._timeTextInput.setSelectionRange(0, 2);
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
      }, 1);
    };
    this._timeTextInput.onkeydown = (e) => {
      e.preventDefault();

      let keyCode = e.keyCode || e.which;
      const key = String.fromCharCode(keyCode);
      const isNumber = /^[0-9]$/i.test(key);
      switch (e.key) {
        case 'Tab':
          if (this._timeTextInput.selectionStart !== 3 && this._timeTextInput.selectionEnd !== 5) {
            e.preventDefault();
            this._timeTextInput.setSelectionRange(3, 5);
            this._timePicker.hide();
          }
          break;
        case 'ArrowLeft':
        case 'Left':
          this._timeTextInput.setSelectionRange(0, 2);
          this._timePicker.hide();
          break;
        case 'ArrowRight':
        case 'Right':
          this._timeTextInput.setSelectionRange(3, 5);
          this._timePicker.hide();
          break;
        case 'ArrowUp':
        case 'Up':
          if (this._timeTextInput.selectionStart && this._timeTextInput.selectionStart &&
            this._timeTextInput.selectionStart >= 2 && this._timeTextInput.selectionStart <= 5
          ) {
            this._changeMinutesBy(1);
          } else {
            this._changeHoursBy(1);
          }
          this._timePicker.hide();
          break;
        case 'ArrowDown':
        case 'Down':
          if (this._timeTextInput.selectionStart && this._timeTextInput.selectionStart &&
            this._timeTextInput.selectionStart >= 2 && this._timeTextInput.selectionStart <= 5
          ) {
            this._changeMinutesBy(-1);
          } else {
            this._changeHoursBy(-1);
          }
          this._timePicker.hide();
          break;
        default:
          if (keyCode >= 96 && keyCode <= 105) {
            // Numpad keys
            keyCode -= 48;
          }
          if (!isNumber) {
            this._setTextInputValueToPreviousValidValue();
          } else {
            this._setTimeValueOnInput(key);
          }
          break;
      }
    };
    this._timeTextInput.onblur = (e) => {
      const relatedTarget = e.relatedTarget ||
        (e as any).explicitOriginalTarget ||
        document.activeElement; // IE11

      if (relatedTarget &&
        this._timePicker.getElement().contains(relatedTarget as Node)
      ) {
        e.preventDefault();
        return;
      }
      this._timePicker.hide();
    };
  }

  private _setTextInputValueToPreviousValidValue() {
    if (this._timeTextInput.dataset.previousValidTime &&
      this._timeTextInput.dataset.previousValidTime !== this._timeTextInput.value) {
      let previousSelectionStart = 0;
      let previousSelectionEnd = 2;
      if (this._timeTextInput.selectionStart && this._timeTextInput.selectionStart &&
        this._timeTextInput.selectionStart >= 3 && this._timeTextInput.selectionStart <= 5
      ) {
        previousSelectionStart = 3;
        previousSelectionEnd = 5;
      }
      this._timeTextInput.value = this._timeTextInput.dataset.previousValidTime;
      this._timeTextInput.setSelectionRange(previousSelectionStart, previousSelectionEnd);
    }
  }

  private _setTimeValueOnInput(key: string) {
    let newTime = parseStringToTime(this._timeTextInput.value);
    if (!newTime) {
      newTime = new Date(this._time);
    }
    if (this._timeTextInput.selectionStart && this._timeTextInput.selectionStart &&
      this._timeTextInput.selectionStart >= 3 && this._timeTextInput.selectionStart <= 5
    ) {
      // minutes are being edited
      let previousMinutes: string;
      if (this._time.getMinutes() > 10) {
        previousMinutes = ('' + this._time.getMinutes())[1];
      } else {
        previousMinutes = ('' + this._time.getMinutes());
      }
      if (parseInt(previousMinutes, 10) > 5) {
        previousMinutes = '0';
      }
      newTime.setMinutes(parseInt(previousMinutes + key, 10));
      this._timeTextInput.value = format(newTime, 'HH:mm', {locale: this._locale});
      this._timeTextInput.dataset.previousValidTime = this._timeTextInput.value;
      this._timeTextInput.setSelectionRange(3, 5);
    } else {
      // hours are being edited
      let previousHours: string;
      if (this._time.getHours() > 10) {
        previousHours = ('' + this._time.getHours())[1];
      } else {
        previousHours = ('' + this._time.getHours());
      }
      if (parseInt(previousHours, 10) > 2) {
        previousHours = '0';
      }
      newTime.setHours(parseInt(previousHours + key, 10));
      this._timeTextInput.value = format(newTime, 'HH:mm', {locale: this._locale});
      this._timeTextInput.dataset.previousValidTime = this._timeTextInput.value;
      this._timeTextInput.setSelectionRange(0, 2);
    }
    this._time = new Date(newTime);
  }

  private _changeMinutesBy(minutes: number) {
    this._time.setMinutes(this._time.getMinutes() + minutes);
    this.rerender(['timeTextInput']);
    this._timeTextInput.setSelectionRange(3, 5);
  }

  private _changeHoursBy(hours: number) {
    this._time.setHours(this._time.getHours() + hours);
    this.rerender(['timeTextInput']);
    this._timeTextInput.setSelectionRange(0, 2);
  }

  private _renderDate() {
    const dateContainer = document.createElement('div');
    dateContainer.className = 'date-container';
    // render date input error
    this._renderDateInputErrorLabel();
    // render date text input
    this._renderDateTextInput();
    dateContainer.appendChild(this._dateTextInput);
    dateContainer.appendChild(this._dateErrorDiv);

    // render calendar
    const calendar = new Calendar({
      date: this._props.value,
      onClickOutside: this._onClickOutside.bind(this),
      onDateClick: this._onCalendarDateClick.bind(this),
      locale: this._locale,
    });
    dateContainer.appendChild(calendar.render());
    this._calendar = calendar;
    this.element.appendChild(dateContainer);

    return this.element;
  }

  private _renderTime() {
    const timeContainer = document.createElement('div');
    timeContainer.className = 'time-container';
    // render time text input
    this._renderTimeTextInput();
    timeContainer.appendChild(this._timeTextInput);

    // render time picker
    const timePicker = new TimePicker({onTimeClick: (date) => this._onTimeClick(date)});
    this._timePicker = timePicker;
    timeContainer.appendChild(timePicker.render());
    this.element.appendChild(timeContainer);

    return this.element;
  }

  private _renderDateTime() {
    this._renderDate();
    this._renderTime();
    return this.element;
  }

  private _checkDateInputError() {
    this._dateErrorDiv.style.display = 'none';
    if (this._dateTextInput.value === '') {
      this._props.value = null;
    } else {
      const tempDate = parseStringToDate(this._dateTextInput.value, this._props.dateFormat);
      if (tempDate instanceof Date && !isNaN(tempDate as any)) {
        if (this._props.dateFormat && !this._props.dateFormat.includes('d')) {
          tempDate.setDate(this._props.value ? this._props.value.getDate() : 1);
        }
        this._props.value = tempDate;
      } else {
        this._dateErrorDiv.style.display = 'block';
      }
    }
  }

  private _onClickOutside(e: FocusEvent) {
    const relatedTarget = e.relatedTarget ||
      (e as any).explicitOriginalTarget ||
      document.activeElement; // IE11

    const calendar = this._calendar.getElement();
    if (calendar.contains(relatedTarget as HTMLElement)) {
      if ((calendar as any).setActive) {
        (calendar as any).setActive();
      }
    }
    if (relatedTarget === null ||
      (relatedTarget !== calendar &&
        !calendar.contains(relatedTarget as HTMLElement) &&
        relatedTarget !== this._dateTextInput)
    ) {
      this._calendar.hide();
    }

    if (e.target === this._dateTextInput &&
      (relatedTarget === null || !(relatedTarget as HTMLElement).classList.contains('day'))
    ) {
      this._checkDateInputError();
    }
  }

  private _onCalendarDateClick(date: Date | null) {
    this._dateErrorDiv.style.display = 'none';
    this._calendar.setValue(date);
    this._calendar.hide();

    // rerender DateTextInput
    this._props.value = date;
    this.rerender(['dateTextInput']);
  }

  private _onTimeClick(date: Date) {
    // set time value
    this._time = date;
    // close time picker
    this._timePicker.hide();
    // rerender value and focus text input
    this.rerender(['timeTextInput']);
    this._timeTextInput.focus();
  }

  getValue(): Date | undefined {
    let value;
    if (this._props.value) {
      value = new Date(this._props.value);
      switch (this._props.type) {
        case 'date':
          return value;
        case 'time':
          return this._time;
        case 'datetime':
        default:
          value.setHours(this._time.getHours());
          value.setMinutes(this._time.getMinutes());
          return value;
      }
    }
    return value;
  }

  setValue(date_opt: any) {
    let date = date_opt;
    if (date === null) {
      date = new Date();
    } else if (date === undefined || !(date instanceof Date)) {
      throw new Error(Message.common.INVALID_ARGUMENT);
    }

    switch (this._props.type) {
      case 'date':
        this._props.value = new Date(date);
        this._calendar.setValue(new Date(date));
        this.rerender(['dateTextInput']);
        break;
      case 'time':
        this._time = new Date(date);
        this.rerender(['timeTextInput']);
        break;
      case 'datetime':
      default:
        this._props.value = new Date(date);
        this._time = new Date(date);
        this._calendar.setValue(new Date(date));
        this.rerender(['dateTextInput']);
        this.rerender(['timeTextInput']);
    }
  }

  getLocale(): string {
    return this._locale.name;
  }

  setLocale(locale: any) {
    if (typeof locale !== 'string') {
      throw new Error(Message.datetime.INVALID_LOCALE);
    }
    switch (locale) {
      case 'en':
        this._locale = en;
        break;
      case 'zh':
        this._locale = zh;
        break;
      case 'ja':
      default:
        this._locale = ja;
        break;
    }
    if (this._calendar) {
      this._calendar.setLocale(this._locale);
      this._calendar.rerender(['selectedDate', 'footerButtons']);
    }
  }
}

export default DateTime;
