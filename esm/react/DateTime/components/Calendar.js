import '../../../js/polyfill';
import React, { useState, useEffect, useRef } from 'react';
import { getWeekDayLabels, getDisplayingDays, isSameMonth, isToday, isSameDate, getMonthLabels, getYearLabels } from './utils';
import { ja, en, format } from './Locale';
import { Dropdown } from '../../index';
import '../../../css/DropdownCalendar.css';
var previousDate;
var Calendar = function (_a) {
    var date = _a.date, _b = _a.locale, locale = _b === void 0 ? ja : _b, _c = _a.pickerDisplay, pickerDisplay = _c === void 0 ? 'block' : _c, _d = _a.hasSelection, hasSelection = _d === void 0 ? false : _d, onDateClick = _a.onDateClick, calRef = _a.calRef;
    var today = new Date();
    var weekDayLabels = getWeekDayLabels(locale);
    var _e = useState(date ? new Date(date) : new Date()), displayDate = _e[0], setDisplayDate = _e[1];
    var displayingDays = getDisplayingDays(displayDate);
    var dropDownsRowRef = useRef(null);
    var scrollToSeletedOptions = function () {
        var selectedItems = document.getElementsByClassName('kuc-list-item-selected');
        for (var i = 0; i < selectedItems.length; i++) {
            var item = selectedItems[i];
            if (item.parentNode) {
                item.parentNode.scrollTop = item.offsetTop - item.parentNode.offsetTop;
            }
        }
    };
    if (!previousDate) {
        previousDate = new Date(date);
    }
    useEffect(function () {
        if (date) {
            if (!isSameDate(date, previousDate)) {
                var newDate = new Date(date);
                setDisplayDate(newDate);
                previousDate = newDate;
            }
        }
    }, [date]);
    var _handleDropdownSelection = function (e) {
        if (dropDownsRowRef.current) {
            var selectedDropdownOuter = e.target.closest('.kuc-dropdown-outer');
            if (dropDownsRowRef.current.contains(e.target) && selectedDropdownOuter) {
                setTimeout(scrollToSeletedOptions, 100);
            }
        }
    };
    useEffect(function () {
        document.addEventListener('mousedown', _handleDropdownSelection);
        return function () { return document.removeEventListener('mousedown', _handleDropdownSelection); };
    });
    return (React.createElement("div", { role: "presentation", ref: calRef, className: "date-picker-container", style: { display: pickerDisplay }, tabIndex: -1, onBlur: function (e) {
            var relatedTarget = e.relatedTarget ||
                e.explicitOriginalTarget ||
                document.activeElement; // IE11
            if (calRef.current !== relatedTarget &&
                !calRef.current.contains(relatedTarget) &&
                pickerDisplay !== 'none') {
                onDateClick && onDateClick(null, null);
            }
        } },
        React.createElement("div", { className: "header" },
            React.createElement("div", { className: "month-year-container" },
                React.createElement("span", { role: "button", className: "prev calendar-button-control", onClick: function () {
                        var newDate = new Date(displayDate);
                        newDate.setMonth(newDate.getMonth() - 1, 1);
                        setDisplayDate(newDate);
                    }, onKeyUp: function () {
                        var newDate = new Date(displayDate);
                        newDate.setMonth(newDate.getMonth() - 1, 1);
                        setDisplayDate(newDate);
                    }, tabIndex: -1 }),
                React.createElement("div", { ref: dropDownsRowRef, className: "kuc-calendar-dropdown-row", tabIndex: -1 }, locale === en ?
                    React.createElement(React.Fragment, null,
                        React.createElement(Dropdown, { items: getMonthLabels(locale), value: getMonthLabels(locale)[displayDate.getMonth()].label, onChange: function (value) {
                                var newDate = new Date(displayDate);
                                newDate.setMonth(locale.monthNames.indexOf(value), 1);
                                setDisplayDate(newDate);
                                scrollToSeletedOptions();
                            } }),
                        React.createElement(Dropdown, { items: getYearLabels(displayDate.getFullYear().toString(), locale), value: format(displayDate, 'calendaryear', { locale: locale }), onChange: function (value) {
                                var newDate = new Date(displayDate);
                                newDate.setFullYear(parseInt(value, 10), displayDate.getMonth(), 1);
                                setDisplayDate(newDate);
                                scrollToSeletedOptions();
                            } }))
                    :
                        React.createElement(React.Fragment, null,
                            React.createElement(Dropdown, { items: getYearLabels(displayDate.getFullYear().toString(), locale), value: format(displayDate, 'calendaryear', { locale: locale }), onChange: function (value) {
                                    var newDate = new Date(displayDate);
                                    var currentYear = value;
                                    currentYear = currentYear.replace('年', '');
                                    currentYear = parseInt(value, 10);
                                    newDate.setFullYear(parseInt(currentYear, 10), displayDate.getMonth(), 1);
                                    setDisplayDate(newDate);
                                    scrollToSeletedOptions();
                                } }),
                            React.createElement(Dropdown, { items: getMonthLabels(locale), value: getMonthLabels(locale)[displayDate.getMonth()].label, onChange: function (value) {
                                    var newDate = new Date(displayDate);
                                    newDate.setMonth(locale.monthNames.indexOf(value), 1);
                                    setDisplayDate(newDate);
                                    scrollToSeletedOptions();
                                } }))),
                React.createElement("span", { role: "button", className: "next calendar-button-control", onClick: function () {
                        var newDate = new Date(displayDate);
                        newDate.setMonth(newDate.getMonth() + 1, 1);
                        setDisplayDate(newDate);
                    }, onKeyUp: function () {
                        var newDate = new Date(displayDate);
                        newDate.setMonth(newDate.getMonth() + 1, 1);
                        setDisplayDate(newDate);
                    }, tabIndex: -1 })),
            React.createElement("div", { className: "days-container" },
                weekDayLabels.map(function (label, index) {
                    var notWeekend = index !== 0 && index !== 6;
                    return (React.createElement("span", { className: notWeekend ? 'wday-header' : 'wday-header grayed-out', key: "wday-header-" + index }, label));
                }),
                displayingDays.map(function (day, index) {
                    var className = 'day';
                    className += displayDate && isSameMonth(day, displayDate) ? '' : ' grayed-out';
                    className += isToday(day) ? ' today' : '';
                    className += date && isSameDate(day, date) && hasSelection ? ' selected' : '';
                    return (React.createElement("span", { role: "button", className: className + " calendar-button", key: "day-" + index, onClick: function () {
                            var returnDate = new Date(date);
                            returnDate.setFullYear(day.getFullYear(), day.getMonth(), day.getDate());
                            onDateClick && onDateClick(returnDate, null);
                            setDisplayDate(new Date(day));
                        }, onKeyUp: function () {
                            var returnDate = new Date(date);
                            returnDate.setFullYear(day.getFullYear(), day.getMonth(), day.getDate());
                            onDateClick && onDateClick(returnDate, null);
                            setDisplayDate(new Date(day));
                        }, tabIndex: 0 }, format(day, 'd')));
                })),
            React.createElement("div", { className: "quick-selections-container" },
                React.createElement("span", { role: "button", tabIndex: 0, className: "today calendar-button-control", onClick: function () {
                        setDisplayDate(new Date());
                        onDateClick && onDateClick(today, null);
                    }, onKeyUp: function () {
                        setDisplayDate(new Date());
                        onDateClick && onDateClick(today, null);
                    } }, locale.today),
                React.createElement("span", { role: "button", className: "none calendar-button-control", onClick: function () {
                        onDateClick && onDateClick(null, previousDate);
                    }, onKeyUp: function () {
                        onDateClick && onDateClick(null, previousDate);
                    }, tabIndex: -1 }, locale.none)))));
};
export default Calendar;
