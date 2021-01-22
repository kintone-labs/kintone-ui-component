import { __assign, __extends } from "tslib";
/* eslint-disable @typescript-eslint/no-empty-function */
import '../polyfill';
import Control from '../Control';
import '../../css/DateTime.css';
import '../../css/Text.css';
import { en, ja, zh, format } from '../../react/DateTime/components/Locale';
import { parseStringToDate, parseStringToTime } from '../../react/DateTime/components/utils';
import Calendar from './components/Calendar';
import TimePicker from './components/TimePicker';
import Message from '../../constant/Message';
var DateTime = /** @class */ (function (_super) {
    __extends(DateTime, _super);
    function DateTime(params) {
        var _this = _super.call(this) || this;
        _this._locale = ja;
        _this._time = new Date();
        _this._props = __assign(__assign({}, _this._props), {
            value: new Date(),
            type: 'datetime',
            locale: 'ja',
            dateFormat: 'MM/dd/YYYY',
            timeFormat: 'HH:mm',
            onChange: function () { }
        });
        if (params && typeof params.isDisabled !== 'boolean') {
            delete params.isDisabled;
        }
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
        }
        if (_this._props.type === 'date' || _this._props.type === 'datetime') {
            _this.setLocale(_this._props.locale);
        }
        if (_this._props.value && (_this._props.type === 'time' || _this._props.type === 'datetime')) {
            _this._time = _this._props.value;
            _this._time.setSeconds(0);
        }
        return _this;
    }
    DateTime.prototype.render = function () {
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
        _super.prototype.rerender.call(this);
        return this.element;
    };
    DateTime.prototype.rerender = function (changedAttr) {
        _super.prototype.rerender.call(this);
        if (changedAttr.indexOf('dateTextInput') !== -1) {
            if (this._props.value && this._props.dateFormat) {
                var newTextInputValue = format(this._props.value, this._props.dateFormat);
                if (newTextInputValue === this._props.dateFormat) {
                    this._dateErrorDiv.style.display = 'block';
                }
                this._dateTextInput.value = newTextInputValue;
            }
            else {
                this._dateTextInput.value = '';
            }
        }
        if (changedAttr.indexOf('timeTextInput') !== -1) {
            this._timeTextInput.value = format(this._time, 'HH:mm', { locale: this._locale });
            this._timeTextInput.dataset.previousValidTime = format(this._time, 'HH:mm', { locale: this._locale });
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
                    this._timeTextInput.setAttribute('disabled', "" + this._props.isDisabled);
                }
                else {
                    this._timeTextInput.removeAttribute('disabled');
                }
            }
            if (this._dateTextInput) {
                if (this._props.isDisabled) {
                    this._dateTextInput.setAttribute('disabled', "" + this._props.isDisabled);
                }
                else {
                    this._dateTextInput.removeAttribute('disabled');
                }
            }
        }
    };
    DateTime.prototype._renderContainer = function () {
        var container = document.createElement('div');
        container.classList.add('date-time-container');
        this.element = container;
    };
    DateTime.prototype._renderDateInputErrorLabel = function () {
        var dateError = document.createElement('div');
        dateError.className = 'label-error';
        dateError.style.display = 'none';
        var span = document.createElement('span');
        span.textContent = Message.datetime.INVALID_DATE;
        dateError.appendChild(span);
        this._dateErrorDiv = dateError;
        return dateError;
    };
    DateTime.prototype._renderDateTextInput = function () {
        var _this = this;
        var dateTextInput = document.createElement('input');
        dateTextInput.type = 'text';
        dateTextInput.className = 'kuc-input-text text-input';
        if (this._props.value && this._props.dateFormat) {
            var newTextInputValue = format(this._props.value, this._props.dateFormat);
            if (newTextInputValue === this._props.dateFormat) {
                this._dateErrorDiv.style.display = 'block';
            }
            dateTextInput.value = newTextInputValue;
        }
        if (this._props.isDisabled) {
            dateTextInput.disabled = this._props.isDisabled;
        }
        // event handlers
        dateTextInput.onclick = function () {
            if (_this._dateErrorDiv.style.display === 'block') {
                _this._props.value = null;
            }
            _this._calendar.setValue(_this._props.value);
            _this._calendar.rerender(['offsetLeft'], { left: dateTextInput.offsetLeft });
            _this._calendar.show();
        };
        dateTextInput.onfocus = function () {
            if (_this._dateErrorDiv.style.display === 'none') {
                _this.rerender(['dateTextInput']);
            }
        };
        dateTextInput.onblur = function (e) {
            _this._onClickOutside(e);
        };
        dateTextInput.onkeydown = function (e) {
            if (e.key === 'Tab') {
                _this._calendar.hide();
            }
        };
        this._dateTextInput = dateTextInput;
    };
    DateTime.prototype._renderTimeTextInput = function () {
        var timeTextInputContainer = document.createElement('div');
        timeTextInputContainer.classList.add('text-input-container');
        var timeTextInput = document.createElement('input');
        if (this._props.isDisabled) {
            timeTextInput.disabled = this._props.isDisabled;
        }
        timeTextInput.type = 'text';
        timeTextInput.className = 'kuc-input-text text-input time';
        timeTextInput.value = format(this._time, 'HH:mm', { locale: this._locale });
        timeTextInput.maxLength = 5;
        timeTextInput.dataset.previousValidTime = format(this._time, 'HH:mm', { locale: this._locale });
        this._timeTextInput = timeTextInput;
        this._registerTimeTextInputEvents();
    };
    DateTime.prototype._registerTimeTextInputEvents = function () {
        var _this = this;
        this._timeTextInput.onclick = function () {
            if (_this._timeTextInput.selectionStart && _this._timeTextInput.selectionStart &&
                _this._timeTextInput.selectionStart >= 2 && _this._timeTextInput.selectionStart <= 5) {
                _this._timeTextInput.setSelectionRange(3, 5);
            }
            else {
                _this._timeTextInput.setSelectionRange(0, 2);
            }
            _this._timePicker.rerender(['offsetLeft'], { left: _this._timeTextInput.offsetLeft });
            _this._timePicker.show();
        };
        this._timeTextInput.onfocus = function (e) {
            setTimeout(function () {
                _this._timeTextInput.setSelectionRange(0, 2);
                e.preventDefault();
                e.stopImmediatePropagation();
                e.stopPropagation();
            }, 1);
        };
        this._timeTextInput.onkeydown = function (e) {
            e.preventDefault();
            var keyCode = e.keyCode || e.which;
            var key = String.fromCharCode(keyCode);
            var isNumber = /^[0-9]$/i.test(key);
            switch (e.key) {
                case 'Tab':
                    if (_this._timeTextInput.selectionStart !== 3 && _this._timeTextInput.selectionEnd !== 5) {
                        e.preventDefault();
                        _this._timeTextInput.setSelectionRange(3, 5);
                        _this._timePicker.hide();
                    }
                    break;
                case 'ArrowLeft':
                case 'Left':
                    _this._timeTextInput.setSelectionRange(0, 2);
                    _this._timePicker.hide();
                    break;
                case 'ArrowRight':
                case 'Right':
                    _this._timeTextInput.setSelectionRange(3, 5);
                    _this._timePicker.hide();
                    break;
                case 'ArrowUp':
                case 'Up':
                    if (_this._timeTextInput.selectionStart && _this._timeTextInput.selectionStart &&
                        _this._timeTextInput.selectionStart >= 2 && _this._timeTextInput.selectionStart <= 5) {
                        _this._changeMinutesBy(1);
                    }
                    else {
                        _this._changeHoursBy(1);
                    }
                    _this._timePicker.hide();
                    break;
                case 'ArrowDown':
                case 'Down':
                    if (_this._timeTextInput.selectionStart && _this._timeTextInput.selectionStart &&
                        _this._timeTextInput.selectionStart >= 2 && _this._timeTextInput.selectionStart <= 5) {
                        _this._changeMinutesBy(-1);
                    }
                    else {
                        _this._changeHoursBy(-1);
                    }
                    _this._timePicker.hide();
                    break;
                default:
                    if (keyCode >= 96 && keyCode <= 105) {
                        // Numpad keys
                        keyCode -= 48;
                    }
                    if (!isNumber) {
                        _this._setTextInputValueToPreviousValidValue();
                    }
                    else {
                        _this._setTimeValueOnInput(key);
                    }
                    break;
            }
        };
        this._timeTextInput.onblur = function (e) {
            var relatedTarget = e.relatedTarget ||
                e.explicitOriginalTarget ||
                document.activeElement; // IE11
            if (relatedTarget &&
                _this._timePicker.getElement().contains(relatedTarget)) {
                e.preventDefault();
                return;
            }
            _this._timePicker.hide();
        };
    };
    DateTime.prototype._setTextInputValueToPreviousValidValue = function () {
        if (this._timeTextInput.dataset.previousValidTime &&
            this._timeTextInput.dataset.previousValidTime !== this._timeTextInput.value) {
            var previousSelectionStart = 0;
            var previousSelectionEnd = 2;
            if (this._timeTextInput.selectionStart && this._timeTextInput.selectionStart &&
                this._timeTextInput.selectionStart >= 3 && this._timeTextInput.selectionStart <= 5) {
                previousSelectionStart = 3;
                previousSelectionEnd = 5;
            }
            this._timeTextInput.value = this._timeTextInput.dataset.previousValidTime;
            this._timeTextInput.setSelectionRange(previousSelectionStart, previousSelectionEnd);
        }
    };
    DateTime.prototype._setTimeValueOnInput = function (key) {
        var newTime = parseStringToTime(this._timeTextInput.value);
        if (!newTime) {
            newTime = new Date(this._time);
        }
        if (this._timeTextInput.selectionStart && this._timeTextInput.selectionStart &&
            this._timeTextInput.selectionStart >= 3 && this._timeTextInput.selectionStart <= 5) {
            // minutes are being edited
            var previousMinutes = void 0;
            if (this._time.getMinutes() > 10) {
                previousMinutes = ('' + this._time.getMinutes())[1];
            }
            else {
                previousMinutes = ('' + this._time.getMinutes());
            }
            if (parseInt(previousMinutes, 10) > 5) {
                previousMinutes = '0';
            }
            newTime.setMinutes(parseInt(previousMinutes + key, 10));
            this._timeTextInput.value = format(newTime, 'HH:mm', { locale: this._locale });
            this._timeTextInput.dataset.previousValidTime = this._timeTextInput.value;
            this._timeTextInput.setSelectionRange(3, 5);
        }
        else {
            // hours are being edited
            var previousHours = void 0;
            if (this._time.getHours() > 10) {
                previousHours = ('' + this._time.getHours())[1];
            }
            else {
                previousHours = ('' + this._time.getHours());
            }
            if (parseInt(previousHours, 10) > 2) {
                previousHours = '0';
            }
            newTime.setHours(parseInt(previousHours + key, 10));
            this._timeTextInput.value = format(newTime, 'HH:mm', { locale: this._locale });
            this._timeTextInput.dataset.previousValidTime = this._timeTextInput.value;
            this._timeTextInput.setSelectionRange(0, 2);
        }
        this._time = new Date(newTime);
    };
    DateTime.prototype._changeMinutesBy = function (minutes) {
        this._time.setMinutes(this._time.getMinutes() + minutes);
        this.rerender(['timeTextInput']);
        this._timeTextInput.setSelectionRange(3, 5);
    };
    DateTime.prototype._changeHoursBy = function (hours) {
        this._time.setHours(this._time.getHours() + hours);
        this.rerender(['timeTextInput']);
        this._timeTextInput.setSelectionRange(0, 2);
    };
    DateTime.prototype._renderDate = function () {
        var dateContainer = document.createElement('div');
        dateContainer.className = 'date-container';
        // render date input error
        this._renderDateInputErrorLabel();
        // render date text input
        this._renderDateTextInput();
        dateContainer.appendChild(this._dateTextInput);
        dateContainer.appendChild(this._dateErrorDiv);
        // render calendar
        var calendar = new Calendar({
            date: this._props.value,
            onClickOutside: this._onClickOutside.bind(this),
            onDateClick: this._onCalendarDateClick.bind(this),
            locale: this._locale,
        });
        dateContainer.appendChild(calendar.render());
        this._calendar = calendar;
        this.element.appendChild(dateContainer);
        return this.element;
    };
    DateTime.prototype._renderTime = function () {
        var _this = this;
        var timeContainer = document.createElement('div');
        timeContainer.className = 'time-container';
        // render time text input
        this._renderTimeTextInput();
        timeContainer.appendChild(this._timeTextInput);
        // render time picker
        var timePicker = new TimePicker({ onTimeClick: function (date) { return _this._onTimeClick(date); } });
        this._timePicker = timePicker;
        timeContainer.appendChild(timePicker.render());
        this.element.appendChild(timeContainer);
        return this.element;
    };
    DateTime.prototype._renderDateTime = function () {
        this._renderDate();
        this._renderTime();
        return this.element;
    };
    DateTime.prototype._checkDateInputError = function () {
        this._dateErrorDiv.style.display = 'none';
        if (this._dateTextInput.value === '') {
            this._props.value = null;
        }
        else {
            var tempDate = parseStringToDate(this._dateTextInput.value, this._props.dateFormat);
            if (tempDate instanceof Date && !isNaN(tempDate)) {
                if (this._props.dateFormat && !this._props.dateFormat.includes('d')) {
                    tempDate.setDate(this._props.value ? this._props.value.getDate() : 1);
                }
                this._props.value = tempDate;
            }
            else {
                this._dateErrorDiv.style.display = 'block';
            }
        }
    };
    DateTime.prototype._onClickOutside = function (e) {
        var relatedTarget = e.relatedTarget ||
            e.explicitOriginalTarget ||
            document.activeElement; // IE11
        var calendar = this._calendar.getElement();
        if (calendar.contains(relatedTarget)) {
            if (calendar.setActive) {
                calendar.setActive();
            }
        }
        if (relatedTarget === null ||
            (relatedTarget !== calendar &&
                !calendar.contains(relatedTarget) &&
                relatedTarget !== this._dateTextInput)) {
            this._calendar.hide();
        }
        if (e.target === this._dateTextInput &&
            (relatedTarget === null || !relatedTarget.classList.contains('day'))) {
            this._checkDateInputError();
        }
    };
    DateTime.prototype._onCalendarDateClick = function (date) {
        this._dateErrorDiv.style.display = 'none';
        this._calendar.setValue(date);
        this._calendar.hide();
        // rerender DateTextInput
        this._props.value = date;
        this.rerender(['dateTextInput']);
    };
    DateTime.prototype._onTimeClick = function (date) {
        // set time value
        this._time = date;
        // close time picker
        this._timePicker.hide();
        // rerender value and focus text input
        this.rerender(['timeTextInput']);
        this._timeTextInput.focus();
    };
    DateTime.prototype.getValue = function () {
        var value;
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
    };
    DateTime.prototype.setValue = function (date_opt) {
        var date = date_opt;
        if (date === null) {
            date = new Date();
        }
        else if (date === undefined || !(date instanceof Date)) {
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
    };
    DateTime.prototype.getLocale = function () {
        return this._locale.name;
    };
    DateTime.prototype.setLocale = function (locale) {
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
    };
    return DateTime;
}(Control));
export default DateTime;
