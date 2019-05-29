import Control, {ControlProps} from '../Control';
import '../../css/DateTime.css';
import '../../css/Text.css';
import {en, ja, zh, format} from '../../react/DateTime/components/Locale';
import Locale from '../../react/DateTime/components/localizationData/locale-dto';
import {parseStringToDate, parseStringToTime} from '../../react/DateTime/components/utils';
import Calendar from './components/Calendar';
import TimePicker from './components/TimePicker';

type DateTimeProps = ControlProps & {
  value?: Date;
  type?: string;
  locale?: Locale;
  dateFormat?: string;
  timeFormat?: string;
  timeIntervals?: number;
}

class DateTime extends Control {
  protected _props: DateTimeProps = {...this._props,
    ...{
      value: new Date(),
      type: 'datetime',
      locale: en,
      dateFormat: 'MM/dd/YYYY',
      timeFormat: 'HH:mm'
    }}
  protected element: HTMLElement
  private _textInputsContainer: HTMLElement
  private _dateTextInput: HTMLInputElement
  private _timeTextInput: HTMLInputElement
  private _dateErrorDiv: HTMLElement
  private _calendar: Calendar

  private _timePicker: TimePicker
  private _time: Date = new Date()

  constructor(params: DateTimeProps = {}) {
    super();
    if (params) {
      this._props = {...this._props, ...params};
    }
    if (this._props.type === 'time' || this._props.type === 'datetime') {
      this._time = this._props.value;
      this._time.setSeconds(0);
    }
  }

  render() {
    this._renderContainer();
    switch (this._props.type) {
      case 'datetime':
        return this._renderDateTime();
      case 'date':
        return this._renderDate();
      case 'time':
        return this._renderTime();
      default:
        return this._renderDateTime();
    }
  }

  rerender(changedAttr?: string[]) {
    super.rerender();
    if (changedAttr.indexOf('dateTextInput') !== -1) {
      if (this._props.value) {
        this._dateTextInput.value = format(this._props.value, 'MM/dd/YYYY', {
          locale: this._props.locale
        });
      } else {
        this._dateTextInput.value = '';
      }
    }
    if (changedAttr.indexOf('timeTextInput') !== -1) {
      this._timeTextInput.value = format(this._time, 'HH:mm');
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

    this._renderTextInputsContainer();
    container.appendChild(this._textInputsContainer);
  }

  private _renderTextInputsContainer() {
    const textInputsContainer = document.createElement('div');
    textInputsContainer.classList.add('text-input-container');
    this._textInputsContainer = textInputsContainer;
  }

  private _renderDateInputErrorLabel() {
    const dateError = document.createElement('div');
    dateError.className = 'label-error';
    dateError.style.display = 'none';
    const span = document.createElement('span');
    span.textContent = 'Invalid date';
    dateError.appendChild(span);
    this._dateErrorDiv = dateError;
    return dateError;
  }

  private _renderDateTextInput() {
    const dateTextInput = document.createElement('input');
    dateTextInput.type = 'text';
    dateTextInput.className = 'kuc-input-text text-input';
    dateTextInput.value = format(this._props.value, this._props.dateFormat);

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
    //

    this._dateTextInput = dateTextInput;
    this._textInputsContainer.appendChild(dateTextInput);
  }

  private _renderTimeTextInput() {
    const timeTextInputContainer = document.createElement('div');
    timeTextInputContainer.classList.add('text-input-container');
    const timeTextInput = document.createElement('input');
    timeTextInput.type = 'text';
    timeTextInput.className = 'kuc-input-text text-input time';
    timeTextInput.value = format(this._time, 'HH:mm');
    timeTextInput.maxLength = 5;
    this._timeTextInput = timeTextInput;
    this._registerTimeTextInputEvents();
  }

  private _registerTimeTextInputEvents() {
    this._timeTextInput.onclick = () => {
      if (this._timeTextInput.selectionStart >= 2 && this._timeTextInput.selectionStart <= 5) {
        this._timeTextInput.setSelectionRange(3, 5);
      } else {
        this._timeTextInput.setSelectionRange(0, 2);
      }
      this._timePicker.rerender(['offsetLeft'], {left: this._timeTextInput.offsetLeft});
      this._timePicker.show();
    };
    this._timeTextInput.onfocus = (e) => {
      setTimeout(()=>{
        this._timeTextInput.setSelectionRange(0, 2);
        e.preventDefault();
        e.stopImmediatePropagation();
        e.stopPropagation();
      }, 1);
    };
    this._timeTextInput.onkeydown = (e) => {
      switch (e.key) {
        case 'Tab':
          if (this._timeTextInput.selectionStart !== 3 && this._timeTextInput.selectionEnd !== 5) {
            e.preventDefault();
            this._timeTextInput.setSelectionRange(3, 5);
            this._timePicker.hide();
          }
          break;
        case 'ArrowLeft':
          e.preventDefault();
          this._timeTextInput.setSelectionRange(0, 2);
          this._timePicker.hide();
          break;
        case 'ArrowRight':
          e.preventDefault();
          this._timeTextInput.setSelectionRange(3, 5);
          this._timePicker.hide();
          break;
        case 'ArrowUp':
          e.preventDefault();
          if (this._timeTextInput.selectionStart >= 2 && this._timeTextInput.selectionStart <= 5) {
            this._changeMinutesBy(1);
          } else {
            this._changeHoursBy(1);
          }
          this._timePicker.hide();
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (this._timeTextInput.selectionStart >= 2 && this._timeTextInput.selectionStart <= 5) {
            this._changeMinutesBy(-1);
          } else {
            this._changeHoursBy(-1);
          }
          this._timePicker.hide();
          break;
        default:
          if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
          }
          break;
      }
    };
    this._timeTextInput.onkeyup = (e) => {
      if (/[0-9]/.test(e.key)) {
        let newTime = parseStringToTime(this._timeTextInput.value);
        if(!newTime) {
          newTime = new Date(this._time)
        }
        if (this._timeTextInput.selectionStart >= 3 && this._timeTextInput.selectionStart <= 5) {
          // minutes are being edited
          // for case when more then 1 key is being held down
          if(newTime.getMinutes() === this._time.getMinutes()) {
            this._timeTextInput.value = format(newTime, 'HH:mm');
            this._timeTextInput.setSelectionRange(3, 5);
            e.preventDefault()
            return
          }
          let previousMinutes: string;
          if (this._time.getMinutes() > 10) {
            previousMinutes = ('' + this._time.getMinutes())[1];
          } else {
            previousMinutes = ('' + this._time.getMinutes());
          }
          if (parseInt(previousMinutes, 10) > 5) {
            previousMinutes = '0';
          }
          newTime.setMinutes(parseInt(previousMinutes + '' + newTime.getMinutes(), 10));
          this._timeTextInput.value = format(newTime, 'HH:mm');
          this._timeTextInput.setSelectionRange(3, 5);
        } else {
          // hours are being edited
          // for case when more then 1 key is being held down
          if(newTime.getHours() === this._time.getHours()) {
            this._timeTextInput.value = format(newTime, 'HH:mm');
            this._timeTextInput.setSelectionRange(0, 2);
            e.preventDefault()
            return
          }
          let previousHours: string;
          if (this._time.getHours() > 10) {
            previousHours = ('' + this._time.getHours())[1];
          } else {
            previousHours = ('' + this._time.getHours());
          }
          if (parseInt(previousHours, 10) > 2) {
            previousHours = '0';
          }
          newTime.setHours(parseInt(previousHours + '' + newTime.getHours(), 10));
          this._timeTextInput.value = format(newTime, 'HH:mm');
          this._timeTextInput.setSelectionRange(0, 2);
        }
        this._time = new Date(newTime);
      }
    };
    this._timeTextInput.onblur = (e) => {
      if (e.relatedTarget &&
        this._timePicker.getPickerElement().contains(e.relatedTarget as Node)
      ) {
        return;
      }
      // set value
      const newTime = parseStringToTime(this._timeTextInput.value);
      this._time.setHours(newTime.getHours());
      this._time.setMinutes(newTime.getMinutes());
      //
      this._timePicker.hide();
    };
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
    // render date text input
    this._renderDateTextInput();
    // render date input error
    this._renderDateInputErrorLabel();
    this._textInputsContainer.appendChild(this._dateErrorDiv);

    // render calendar
    const calendar = new Calendar({
      date: this._props.value,
      onClickOutside: this._onClickOutside,
      onDateClick: this._onCalendarDateClick
    });
    this._textInputsContainer.appendChild(calendar.render());
    this._calendar = calendar;

    return this.element;
  }

  private _renderTime() {
    // render time text input
    this._renderTimeTextInput();
    this._textInputsContainer.appendChild(this._timeTextInput);

    // render time picker
    const timePicker = new TimePicker({onTimeClick: (date) => this._onTimeClick(date)});
    this._timePicker = timePicker;
    this._textInputsContainer.appendChild(timePicker.render());
    //

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
      const tempDate = parseStringToDate(this._dateTextInput.value);
      if (tempDate instanceof Date && !isNaN(tempDate as any)) {
        this._props.value = tempDate;
      } else {
        this._dateErrorDiv.style.display = 'block';
      }
    }
  }

  private _onClickOutside = (e: FocusEvent) => {
    if (
      e.relatedTarget == null ||
      (
        !(e.relatedTarget as HTMLElement).classList.contains('calendar-button') &&
        !(e.relatedTarget as HTMLElement).classList.contains('date-picker-container') &&
        !(e.relatedTarget as HTMLElement).classList.contains('day') &&
        e.relatedTarget !== this._dateTextInput
      )
    ) {
      this._calendar.hide();
    }
    if (e.target === this._dateTextInput &&
      (e.relatedTarget == null || !(e.relatedTarget as HTMLElement).classList.contains('day'))
    ) {
      this._checkDateInputError();
    }
  }

  private _onCalendarDateClick = (date: Date | null) => {
    this._dateErrorDiv.style.display = 'none';
    this._calendar.setValue(date);
    this._calendar.hide();

    // rerender DateTextInput
    this._props.value = date;
    this.rerender(['dateTextInput']);
  }

  private _onTimeClick = (date: Date) => {
    // set time value
    this._time = date;
    // close time picker
    this._timePicker.hide();
    // rerender value and focus text input
    this.rerender(['timeTextInput']);
    this._timeTextInput.focus();
  }

  getValue(): Date {
    const value = new Date(this._props.value);
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

  setValue(date: Date) {
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
    return this._props.locale.name;
  }

  setLocale(locale: string) {
    switch (locale) {
      case 'en':
        this._props.locale = en;
        break;
      case 'zh':
        this._props.locale = zh;
        break;
      case 'ja':
      default:
        this._props.locale = ja;
        break;
    }
    if (this._calendar) {
      this._calendar.setLocale(this._props.locale);
      this._calendar.rerender(['selectedDate', 'footerButtons']);
    }
  }
}

export default DateTime;
