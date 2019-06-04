import React, { useState, useEffect } from 'react';
import { getWeekDayLabels, getDisplayingDays, isSameMonth, isToday, isSameDate } from './utils';
import { en } from './Locale';
import { format } from './Locale';
var previousDate;
var Calendar = function (_a) {
    var date = _a.date, _b = _a.locale, locale = _b === void 0 ? en : _b, _c = _a.pickerDisplay, pickerDisplay = _c === void 0 ? 'block' : _c, _d = _a.hasSelection, hasSelection = _d === void 0 ? false : _d, _e = _a.onDateClick, onDateClick = _e === void 0 ? function (date) { } : _e, calRef = _a.calRef;
    var today = new Date();
    var weekDayLabels = getWeekDayLabels(locale);
    var _f = useState(date ? new Date(date) : new Date()), displayDate = _f[0], setDisplayDate = _f[1];
    var displayingDays = getDisplayingDays(displayDate);
    if (!previousDate) {
        previousDate = new Date(date);
    }
    useEffect(function () {
        if (date) {
            if (!isSameDate(date, previousDate)) {
                setDisplayDate(new Date(date));
                previousDate = new Date(date);
            }
        }
    });
    return (React.createElement("div", { ref: calRef, className: "date-picker-container", style: { display: pickerDisplay }, tabIndex: -1, onBlur: function (e) {
            var relatedTarget = e.relatedTarget ||
                e['explicitOriginalTarget'] ||
                document.activeElement; // IE11
            if (calRef.current !== relatedTarget &&
                !calRef.current.contains(relatedTarget) &&
                pickerDisplay !== 'none') {
                onDateClick(null, null);
            }
        } },
        React.createElement("div", { className: "header" },
            React.createElement("div", { className: "month-year-container" },
                React.createElement("span", { className: "prev calendar-button-control", onClick: function () {
                        var newDate = new Date(displayDate);
                        newDate.setMonth(newDate.getMonth() - 1, 1);
                        setDisplayDate(newDate);
                    }, tabIndex: -1 }),
                React.createElement("span", { className: "label" }, format(displayDate, "calendartitle", {
                    locale: locale
                })),
                React.createElement("span", { className: "next calendar-button-control", onClick: function () {
                        var newDate = new Date(displayDate);
                        newDate.setMonth(newDate.getMonth() + 1, 1);
                        setDisplayDate(newDate);
                    }, tabIndex: -1 })),
            React.createElement("div", { className: "days-container" },
                weekDayLabels.map(function (label, index) {
                    var notWeekend = index !== 0 && index !== 6;
                    return (React.createElement("span", { className: notWeekend ? "wday-header" : "wday-header grayed-out", key: "wday-header-" + index }, label));
                }),
                displayingDays.map(function (day, index) {
                    var className = "day";
                    className += displayDate && isSameMonth(day, displayDate) ? "" : " grayed-out";
                    className += isToday(day) ? " today" : "";
                    className += date && isSameDate(day, date) && hasSelection ? " selected" : "";
                    return (React.createElement("span", { className: className + " calendar-button", key: "day-" + index, onClick: function () {
                            var returnDate = new Date(date);
                            returnDate.setFullYear(day.getFullYear(), day.getMonth(), day.getDate());
                            onDateClick(returnDate, null);
                            setDisplayDate(new Date(day));
                        }, tabIndex: 0 }, format(day, "d")));
                })),
            React.createElement("div", { className: "quick-selections-container" },
                React.createElement("span", { className: "today calendar-button-control", onClick: function () { setDisplayDate(new Date()); onDateClick(today, null); } }, locale.today),
                React.createElement("span", { className: "none calendar-button-control", onClick: function () { onDateClick(null, previousDate); }, tabIndex: -1 }, locale.none)))));
};
export default Calendar;
