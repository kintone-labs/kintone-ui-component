import '../../css/DateTime.css';
import '../../css/Text.css';
import React, { useState, createRef, useEffect } from 'react';
import { en, ja, zh, format } from './components/Locale';
import { parseStringToDate, parseStringToTime } from './components/utils';
import Calendar from './components/Calendar';
import TimePicker from './components/TimePicker';
import '../../css/font.css';
var DateTime = function (_a) {
    var _b = _a.value, value = _b === void 0 ? new Date() : _b, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, _d = _a.isVisible, isVisible = _d === void 0 ? true : _d, _e = _a.onChange, onChange = _e === void 0 ? function (newDate) { } : _e, _f = _a.locale, locale = _f === void 0 ? 'ja' : _f, _g = _a.dateFormat, dateFormat = _g === void 0 ? 'MM/dd/YYYY' : _g, _h = _a.type, type = _h === void 0 ? 'datetime' : _h, _j = _a.timeFormat, timeFormat = _j === void 0 ? 'HH:mm' : _j;
    var _k = useState(value), defaultValue = _k[0], setDefaultValue = _k[1];
    var _l = useState('none'), pickerDisplay = _l[0], setPickerDisplay = _l[1];
    var _m = useState(false), showPickerError = _m[0], setShowPickerError = _m[1];
    var _o = useState(''), dateError = _o[0], setDateError = _o[1];
    var _p = useState('none'), timePickerDisplay = _p[0], setTimePickerDisplay = _p[1];
    var _q = useState(format(value, dateFormat)), inputValue = _q[0], setInputValue = _q[1];
    var _r = useState(format(value, timeFormat)), timeValue = _r[0], setTimeValue = _r[1];
    var _s = useState(true), hasSelection = _s[0], setHasSelection = _s[1];
    var _t = useState(new Date(value)), timeDateValue = _t[0], setTimeDateValue = _t[1];
    var wrapperRef = createRef();
    var calendarRef = createRef();
    var timeRef = createRef();
    var _changeMinutesBy = function (minutes, timeInput) {
        var newTime = new Date(timeDateValue);
        newTime.setSeconds(0);
        newTime.setMinutes(timeDateValue.getMinutes() + minutes);
        newTime.setMonth(timeDateValue.getMonth());
        newTime.setDate(timeDateValue.getDate());
        setTimeDateValue(newTime);
        onChange(newTime);
        setTimeout(function () {
            setTimeValue(format(newTime, timeFormat));
            timeInput.setSelectionRange(3, 5);
        }, 1);
    };
    var _changeHoursBy = function (hours, timeInput) {
        var newTime = new Date(timeDateValue);
        newTime.setSeconds(0);
        newTime.setHours(timeDateValue.getHours() + hours);
        newTime.setMonth(timeDateValue.getMonth());
        newTime.setDate(timeDateValue.getDate());
        setTimeDateValue(new Date(newTime));
        onChange(new Date(newTime));
        setTimeout(function () {
            setTimeValue(format(newTime, timeFormat));
            timeInput.setSelectionRange(0, 2);
        }, 1);
    };
    var timeInputKeydownHandler = function (e) {
        var timeTextInput = e.target;
        switch (e.key) {
            case 'Tab':
                if (timeTextInput.selectionStart !== 3 && timeTextInput.selectionEnd !== 5) {
                    e.preventDefault();
                    setTimePickerDisplay('none');
                    timeTextInput.setSelectionRange(3, 5);
                }
                break;
            case 'ArrowLeft':
            case 'Left':
                e.preventDefault();
                timeTextInput.setSelectionRange(0, 2);
                setTimePickerDisplay('none');
                break;
            case 'ArrowRight':
            case 'Right':
                e.preventDefault();
                timeTextInput.setSelectionRange(3, 5);
                setTimePickerDisplay('none');
                break;
            case 'ArrowUp':
            case 'Up':
                e.preventDefault();
                if (timeTextInput.selectionStart && timeTextInput.selectionEnd &&
                    timeTextInput.selectionStart >= 2 && timeTextInput.selectionStart <= 5) {
                    _changeMinutesBy(1, e.target);
                }
                else {
                    _changeHoursBy(1, e.target);
                }
                setTimePickerDisplay('none');
                break;
            case 'ArrowDown':
            case 'Down':
                e.preventDefault();
                if (timeTextInput.selectionStart && timeTextInput.selectionEnd &&
                    timeTextInput.selectionStart >= 2 && timeTextInput.selectionStart <= 5) {
                    _changeMinutesBy(-1, e.target);
                }
                else {
                    _changeHoursBy(-1, e.target);
                }
                setTimePickerDisplay('none');
                break;
            default:
                if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                }
                break;
        }
    };
    useEffect(function () {
        if (defaultValue !== value) {
            setDefaultValue(value);
            setInputValue(format(value, dateFormat));
            setTimeValue(format(value, timeFormat));
            setTimeDateValue(new Date(value));
        }
        var newTimeDateValue = new Date(timeDateValue);
        var setNewTimeDateValue = false;
        if (value.getDate() !== timeDateValue.getDate()) {
            newTimeDateValue.setDate(value.getDate());
            setNewTimeDateValue = true;
        }
        if (value.getMonth() !== timeDateValue.getMonth()) {
            newTimeDateValue.setDate(value.getDate());
            setNewTimeDateValue = true;
        }
        if (value.getFullYear() !== timeDateValue.getFullYear()) {
            newTimeDateValue.setFullYear(value.getFullYear());
            setNewTimeDateValue = true;
        }
        if (setNewTimeDateValue && !pickerDisplay) {
            setTimeDateValue(newTimeDateValue);
        }
    });
    if (typeof isDisabled !== 'boolean') {
        isDisabled = false;
    }
    var localeObj = ja;
    if (locale === 'en') {
        localeObj = en;
    }
    else if (locale === 'zh') {
        localeObj = zh;
    }
    if (type !== 'datetime' && type !== 'date' && type !== 'time') {
        type = 'datetime';
    }
    if (isVisible) {
        return (React.createElement("div", { className: "date-time-container", ref: wrapperRef },
            (type === 'datetime' || type === 'date') &&
                React.createElement("div", { className: "date-container" },
                    React.createElement("div", { className: "text-input-container", key: format(value, dateFormat) + "-" + dateError },
                        React.createElement("input", { type: "text", className: "kuc-input-text text-input", disabled: isDisabled, onFocus: function (e) {
                                setPickerDisplay('block');
                                setTimePickerDisplay('none');
                                if (showPickerError) {
                                    setHasSelection(false);
                                }
                                if (!showPickerError && hasSelection) {
                                    var temporary = new Date(parseStringToDate(e.target.value));
                                    var dateValue_1 = new Date(parseStringToDate(e.target.value));
                                    temporary.setSeconds(timeDateValue.getSeconds());
                                    temporary.setMinutes(timeDateValue.getMinutes());
                                    temporary.setHours(timeDateValue.getHours());
                                    temporary.setDate(temporary.getDate() - 1);
                                    dateValue_1.setSeconds(timeDateValue.getSeconds());
                                    dateValue_1.setMinutes(timeDateValue.getMinutes());
                                    dateValue_1.setHours(timeDateValue.getHours());
                                    setTimeDateValue(temporary);
                                    setTimeout(function () {
                                        setTimeDateValue(dateValue_1);
                                    }, 1);
                                }
                            }, value: inputValue, onBlur: function (e) {
                                var tempDate = parseStringToDate(e.target.value);
                                var returnDate = null;
                                if (!e.target.value) {
                                    var todayDate = new Date();
                                    todayDate.setSeconds(0);
                                    todayDate.setHours(timeDateValue.getHours());
                                    todayDate.setMinutes(timeDateValue.getMinutes());
                                    if (todayDate.getTime() !== value.getTime()) {
                                        returnDate = new Date(todayDate);
                                    }
                                    setHasSelection(false);
                                }
                                else if (tempDate instanceof Date && !isNaN(tempDate)) {
                                    returnDate = new Date(value);
                                    returnDate.setFullYear(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate());
                                    setShowPickerError(false);
                                }
                                else if (e.target.value) {
                                    setDateError('Invalid date');
                                    setShowPickerError(true);
                                }
                                var relatedTarget = e.relatedTarget ||
                                    e['explicitOriginalTarget'] ||
                                    document.activeElement; // IE11
                                var calendar = calendarRef.current;
                                if (relatedTarget !== calendar && !calendar.contains(relatedTarget)) {
                                    if (returnDate) {
                                        onChange(returnDate);
                                        setShowPickerError(false);
                                    }
                                    setPickerDisplay('none');
                                }
                            }, onKeyDown: function (e) {
                                if (e.key === 'Tab') {
                                    setPickerDisplay('none');
                                }
                            }, onChange: function (e) {
                                setInputValue(e.target.value);
                            } })),
                    (dateError && showPickerError) &&
                        React.createElement("div", { className: "label-error" },
                            React.createElement("span", null, dateError)),
                    !isDisabled &&
                        React.createElement(Calendar, { calRef: calendarRef, pickerDisplay: pickerDisplay, date: timeDateValue, locale: localeObj, hasSelection: hasSelection, onDateClick: function (calendarDate, previousDate) {
                                var tempDate;
                                if (previousDate) {
                                    tempDate = new Date(previousDate);
                                }
                                else {
                                    tempDate = new Date();
                                }
                                if (calendarDate) {
                                    if (value) {
                                        tempDate = new Date(value);
                                    }
                                    tempDate.setFullYear(calendarDate.getFullYear(), calendarDate.getMonth(), calendarDate.getDate());
                                    tempDate.setHours(timeDateValue.getHours());
                                    tempDate.setMinutes(timeDateValue.getMinutes());
                                    tempDate.setSeconds(0);
                                    onChange(tempDate);
                                    setInputValue(format(tempDate, dateFormat));
                                    setHasSelection(true);
                                    setShowPickerError(false);
                                }
                                else if (previousDate) {
                                    tempDate.setHours(timeDateValue.getHours());
                                    tempDate.setMinutes(timeDateValue.getMinutes());
                                    tempDate.setSeconds(0);
                                    onChange(tempDate);
                                    setInputValue('');
                                    setHasSelection(false);
                                    setShowPickerError(false);
                                }
                                setPickerDisplay('none');
                            } })),
            (type === 'datetime' || type === 'time') &&
                React.createElement("div", { className: "time-container" },
                    React.createElement("input", { type: "text", disabled: isDisabled, maxLength: 5, key: 1, className: "kuc-input-text text-input time", onClick: function (e) {
                            var timeTextInput = e.target;
                            if (timeTextInput.selectionStart &&
                                (timeTextInput.selectionStart >= 2 && timeTextInput.selectionStart <= 5)) {
                                timeTextInput.setSelectionRange(3, 5);
                            }
                            else {
                                timeTextInput.setSelectionRange(0, 2);
                            }
                            setTimePickerDisplay('flex');
                            setPickerDisplay('none');
                        }, onFocus: function (e) {
                            var timeInput = e.target;
                            setTimeout(function () {
                                timeInput.setSelectionRange(0, 2);
                                e.preventDefault();
                                e.stopPropagation();
                            }, 1);
                            setTimePickerDisplay('flex');
                            setPickerDisplay('none');
                        }, onBlur: function (e) {
                            var relatedTarget = e.relatedTarget ||
                                e['explicitOriginalTarget'] ||
                                document.activeElement; // IE11
                            var timePicker = timeRef.current;
                            if (relatedTarget !== timePicker && !timePicker.contains(relatedTarget)) {
                                setTimePickerDisplay('none');
                            }
                        }, value: timeValue, onChange: function (e) {
                            var timeTextInput = e.target;
                            var newTime = parseStringToTime(timeTextInput.value);
                            if (!newTime) {
                                newTime = new Date(timeDateValue);
                            }
                            else {
                                newTime.setDate(timeDateValue.getDate());
                                newTime.setMonth(timeDateValue.getMonth());
                                newTime.setFullYear(timeDateValue.getFullYear());
                            }
                            if (timeTextInput.selectionStart &&
                                timeTextInput.selectionStart >= 3 && timeTextInput.selectionStart <= 5) {
                                // minutes are being edited
                                var previousMinutes = void 0;
                                if (timeDateValue.getMinutes() > 10) {
                                    previousMinutes = ('' + timeDateValue.getMinutes())[1];
                                }
                                else {
                                    previousMinutes = ('' + timeDateValue.getMinutes());
                                }
                                if (parseInt(previousMinutes, 10) > 5) {
                                    previousMinutes = '0';
                                }
                                newTime.setMinutes(parseInt(previousMinutes + '' + newTime.getMinutes(), 10));
                                timeTextInput.value = format(newTime, 'HH:mm');
                                timeTextInput.setSelectionRange(3, 5);
                            }
                            else {
                                // hours are being edited
                                var previousHours = void 0;
                                if (timeDateValue.getHours() > 10) {
                                    previousHours = ('' + timeDateValue.getHours())[1];
                                }
                                else if (timeDateValue.getHours() === 10) {
                                    previousHours = ('' + timeDateValue.getHours())[0];
                                }
                                else {
                                    previousHours = ('' + timeDateValue.getHours());
                                }
                                if (parseInt(previousHours, 10) > 2) {
                                    previousHours = '0';
                                }
                                newTime.setHours(parseInt(previousHours + '' + newTime.getHours(), 10));
                                timeTextInput.value = format(newTime, 'HH:mm');
                                timeTextInput.setSelectionRange(0, 2);
                            }
                            newTime.setSeconds(0);
                            newTime.setMonth(timeDateValue.getMonth());
                            newTime.setDate(timeDateValue.getDate());
                            setTimeValue(format(newTime, timeFormat));
                            setTimeDateValue(new Date(newTime));
                            onChange(new Date(newTime));
                            setTimePickerDisplay('none');
                        }, onKeyDown: function (e) {
                            timeInputKeydownHandler(e);
                        } }),
                    !isDisabled &&
                        React.createElement(TimePicker, { timeRef: timeRef, pickerDisplay: timePickerDisplay, onTimeClick: function (timePickerDate) {
                                var tempDate = new Date();
                                if (timeDateValue)
                                    tempDate = new Date(timeDateValue);
                                tempDate.setDate(value.getDate());
                                tempDate.setMonth(value.getMonth());
                                tempDate.setHours(timePickerDate.getHours(), timePickerDate.getMinutes());
                                tempDate.setSeconds(0);
                                setTimeValue(format(tempDate, timeFormat));
                                setTimeDateValue(new Date(tempDate));
                                onChange(tempDate);
                                setTimePickerDisplay('none');
                            } }))));
    }
    else {
        return React.createElement("div", null);
    }
};
export default DateTime;
export { Calendar };
export * from './components/Locale';
