import '../../css/DateTime.css';
import '../../css/Text.css';
import React, { useState, createRef, useEffect } from 'react';
import { en, ja, zh, format } from './components/Locale';
import { parseStringToDate, parseStringToTime } from './components/utils';
import Calendar from './components/Calendar';
import TimePicker from './components/TimePicker';
import Message from '../../constant/Message';
import '../../css/font.css';
var DateTime = function (_a) {
    var _b = _a.value, value = _b === void 0 ? new Date() : _b, _c = _a.isDisabled, isDisabled = _c === void 0 ? false : _c, _d = _a.isVisible, isVisible = _d === void 0 ? true : _d, onChange = _a.onChange, _e = _a.locale, locale = _e === void 0 ? 'ja' : _e, _f = _a.dateFormat, dateFormat = _f === void 0 ? 'MM/dd/YYYY' : _f, _g = _a.type, type = _g === void 0 ? 'datetime' : _g, _h = _a.timeFormat, timeFormat = _h === void 0 ? 'HH:mm' : _h;
    var localeObj = ja;
    if (locale === 'en') {
        localeObj = en;
    }
    else if (locale === 'zh') {
        localeObj = zh;
    }
    var _j = useState(value), defaultValue = _j[0], setDefaultValue = _j[1];
    var _k = useState('none'), pickerDisplay = _k[0], setPickerDisplay = _k[1];
    var _l = useState(false), showPickerError = _l[0], setShowPickerError = _l[1];
    var _m = useState(''), dateError = _m[0], setDateError = _m[1];
    var _o = useState('none'), timePickerDisplay = _o[0], setTimePickerDisplay = _o[1];
    var _p = useState(''), inputValue = _p[0], setInputValue = _p[1];
    var _q = useState(format(value, timeFormat)), timeValue = _q[0], setTimeValue = _q[1];
    var _r = useState(true), hasSelection = _r[0], setHasSelection = _r[1];
    var _s = useState(new Date(value)), timeDateValue = _s[0], setTimeDateValue = _s[1];
    var _t = useState(isDisabled), isDisableBtn = _t[0], setDisableBtn = _t[1];
    var _u = useState(type), typeDateTime = _u[0], setTypeDateTime = _u[1];
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
        onChange && onChange(newTime);
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
        onChange && onChange(new Date(newTime));
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
        else {
            var newTimeDateValue = new Date(timeDateValue);
            var setNewTimeDateValue = false;
            if (value.getDate() !== timeDateValue.getDate()) {
                newTimeDateValue.setDate(value.getDate());
                setNewTimeDateValue = true;
            }
            if (value.getMonth() !== timeDateValue.getMonth()) {
                newTimeDateValue.setMonth(value.getMonth());
                setNewTimeDateValue = true;
            }
            if (value.getFullYear() !== timeDateValue.getFullYear()) {
                newTimeDateValue.setFullYear(value.getFullYear());
                setNewTimeDateValue = true;
            }
            if (setNewTimeDateValue && pickerDisplay === 'none') {
                setTimeDateValue(newTimeDateValue);
            }
            if (!hasSelection) {
                setInputValue('');
            }
            else if (inputValue !== dateFormat) {
                var newInputValue = format(value, dateFormat);
                if (newInputValue === dateFormat) {
                    setInputValue(dateFormat);
                    setDateError(Message.datetime.INVALID_DATE);
                    setShowPickerError(true);
                }
                else if (!showPickerError) {
                    setInputValue(newInputValue);
                }
            }
            if (typeof isDisabled !== 'boolean') {
                setDisableBtn(false);
            }
            else {
                setDisableBtn(isDisabled);
            }
        }
    }, [dateFormat, defaultValue, hasSelection, pickerDisplay, timeDateValue, timeFormat, value, isDisabled, inputValue, showPickerError]);
    if (typeDateTime !== 'datetime' && typeDateTime !== 'date' && typeDateTime !== 'time') {
        setTypeDateTime('datetime');
    }
    if (isVisible) {
        return (React.createElement("div", { className: "date-time-container", ref: wrapperRef },
            (typeDateTime === 'datetime' || typeDateTime === 'date') &&
                React.createElement("div", { className: "date-container" },
                    React.createElement("div", { className: "text-input-container", key: "" + dateError },
                        React.createElement("input", { type: "text", className: "kuc-input-text text-input", disabled: isDisableBtn, onFocus: function (e) {
                                // if (showPickerError) {
                                //   setHasSelection(false);
                                // }
                                if (showPickerError || !hasSelection) {
                                    setPickerDisplay('block');
                                    return;
                                }
                                var temporary = new Date(parseStringToDate(e.target.value, dateFormat));
                                var dateValue = new Date(parseStringToDate(e.target.value, dateFormat));
                                temporary.setSeconds(timeDateValue.getSeconds());
                                temporary.setMinutes(timeDateValue.getMinutes());
                                temporary.setHours(timeDateValue.getHours());
                                temporary.setDate(temporary.getDate() - 1);
                                dateValue.setSeconds(timeDateValue.getSeconds());
                                dateValue.setMinutes(timeDateValue.getMinutes());
                                dateValue.setHours(timeDateValue.getHours());
                                setTimeDateValue(temporary);
                                setTimeout(function () {
                                    setPickerDisplay('block');
                                    setTimePickerDisplay('none');
                                    setTimeDateValue(dateValue);
                                }, 1);
                            }, value: inputValue, onBlur: function (e) {
                                var tempDate = parseStringToDate(e.target.value, dateFormat);
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
                                    setDateError(Message.datetime.INVALID_DATE);
                                    setShowPickerError(true);
                                }
                                var relatedTarget = e.relatedTarget ||
                                    e.explicitOriginalTarget ||
                                    document.activeElement; // IE11
                                var calendar = calendarRef.current;
                                if (relatedTarget !== calendar && !calendar.contains(relatedTarget)) {
                                    if (returnDate) {
                                        onChange && onChange(returnDate);
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
                    !isDisableBtn &&
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
                                    onChange && onChange(tempDate);
                                    if (!showPickerError) {
                                        setInputValue(format(tempDate, dateFormat));
                                    }
                                    setHasSelection(true);
                                    setShowPickerError(false);
                                }
                                else if (previousDate) {
                                    tempDate.setHours(timeDateValue.getHours());
                                    tempDate.setMinutes(timeDateValue.getMinutes());
                                    tempDate.setSeconds(0);
                                    onChange && onChange(tempDate);
                                    setInputValue('');
                                    setHasSelection(false);
                                    setShowPickerError(false);
                                }
                                setPickerDisplay('none');
                            } })),
            (typeDateTime === 'datetime' || typeDateTime === 'time') &&
                React.createElement("div", { className: "time-container" },
                    React.createElement("input", { type: "text", disabled: isDisableBtn, maxLength: 5, key: 1, className: "kuc-input-text text-input time", onClick: function (e) {
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
                                e.explicitOriginalTarget ||
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
                            onChange && onChange(new Date(newTime));
                            setTimePickerDisplay('none');
                        }, onKeyDown: function (e) {
                            timeInputKeydownHandler(e);
                        } }),
                    !isDisableBtn &&
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
                                onChange && onChange(tempDate);
                                setTimePickerDisplay('none');
                            } }))));
    }
    return React.createElement("div", null);
};
export default DateTime;
export { Calendar };
export { en, zh, ja, format, getSeperator, availableLocales } from './components/Locale';
