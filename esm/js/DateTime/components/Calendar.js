import * as tslib_1 from "tslib";
import { getWeekDayLabels, getDisplayingDays, isSameMonth, isToday, isSameDate, parseStringToDate } from '../../../react/DateTime/components/utils';
import { ja, format } from '../../../react/DateTime/components/Locale';
import Control from '../../Control';
var Calendar = /** @class */ (function (_super) {
    tslib_1.__extends(Calendar, _super);
    function Calendar(params) {
        var _this = _super.call(this) || this;
        _this._props = {
            locale: ja,
            isDisabled: false,
            isVisible: false
        };
        _this._displayDate = new Date();
        if (params) {
            _this._props = tslib_1.__assign({}, _this._props, params);
        }
        return _this;
    }
    Calendar.prototype._renderCalendarContainer = function () {
        var calendarContainer = document.createElement('div');
        calendarContainer.className = 'date-picker-container';
        calendarContainer.style.display = this._props.isVisible ? 'block' : 'none';
        calendarContainer.tabIndex = 0;
        this.element = calendarContainer;
    };
    Calendar.prototype._renderCalendarHeader = function () {
        var calendarHeader = document.createElement('div');
        calendarHeader.className = 'header';
        this._calendarHeader = calendarHeader;
    };
    Calendar.prototype._renderMonthYearContainer = function () {
        var monthYearContainer = document.createElement('div');
        monthYearContainer.className = 'month-year-container';
        this._monthYearContainer = monthYearContainer;
    };
    Calendar.prototype._renderPreviousButton = function () {
        var _this = this;
        var span = document.createElement('span');
        span.className = 'prev calendar-button-control';
        span.onclick = function () {
            _this._displayDate.setMonth(_this._displayDate.getMonth() - 1);
            _this.rerender(['selectedDate']);
        };
        this._previousButton = span;
    };
    Calendar.prototype._renderDisplayDateLabel = function () {
        var span = document.createElement('span');
        span.className = 'label';
        span.textContent = format(this._displayDate, 'calendartitle', {
            locale: this._props.locale
        });
        this._displayLabel = span;
    };
    Calendar.prototype._renderNextButton = function () {
        var _this = this;
        var span = document.createElement('span');
        span.className = 'next calendar-button-control';
        span.onclick = function () {
            _this._displayDate.setMonth(_this._displayDate.getMonth() + 1);
            _this.rerender(['selectedDate']);
        };
        this._nextButton = span;
    };
    Calendar.prototype._renderDaysContainer = function () {
        var div = document.createElement('div');
        div.className = 'days-container';
        this._daysContainer = div;
    };
    Calendar.prototype._renderQuickSelectionsContainer = function () {
        var div = document.createElement('div');
        div.className = 'quick-selections-container';
        this._quickSelectionsContainer = div;
    };
    Calendar.prototype._renderTodayButton = function () {
        var span = document.createElement('span');
        span.className = 'today calendar-button-control';
        if (this._props.locale) {
            span.textContent = this._props.locale.today;
        }
        this._todayButton = span;
    };
    Calendar.prototype._renderNoneButton = function () {
        var span = document.createElement('span');
        span.className = 'none calendar-button-control';
        if (this._props.locale) {
            span.textContent = this._props.locale.none;
        }
        this._noneButton = span;
    };
    Calendar.prototype._renderWeekDaysLabels = function () {
        var weekDayLabels = getWeekDayLabels(this._props.locale);
        var weekDayLabelsSpans = [];
        weekDayLabels.forEach(function (label, index) {
            var notWeekend = index !== 0 && index !== 6;
            var labelSpan = document.createElement('span');
            labelSpan.className = notWeekend ? 'wday-header' : 'wday-header grayed-out';
            labelSpan.textContent = label;
            weekDayLabelsSpans.push(labelSpan);
        });
        this._weekDayLabelsSpans = weekDayLabelsSpans;
    };
    Calendar.prototype._renderDaysLabels = function () {
        var _this = this;
        var displayingDays = getDisplayingDays(this._displayDate);
        var displayDaysSpans = [];
        displayingDays.forEach(function (day) {
            var daySpan = document.createElement('span');
            var className = 'day';
            className += _this._displayDate && isSameMonth(day, _this._displayDate) ? '' : ' grayed-out';
            className += isToday(day) ? ' today' : '';
            className += _this._props.date && isSameDate(day, _this._props.date) ? ' selected' : '';
            daySpan.className = className;
            daySpan.tabIndex = 0;
            daySpan.textContent = format(day, 'd');
            daySpan.dataset.date = format(day, 'MM/dd/YYYY');
            _this._setOnclickForDaysLabels(daySpan);
            displayDaysSpans.push(daySpan);
        });
        this._displayDaysSpans = displayDaysSpans;
    };
    Calendar.prototype.render = function () {
        var _this = this;
        this._renderCalendarContainer();
        this._renderCalendarHeader();
        this._renderMonthYearContainer();
        this._renderPreviousButton();
        this._renderDisplayDateLabel();
        this._renderNextButton();
        this._renderDaysContainer();
        this._renderWeekDaysLabels();
        this._renderDaysLabels();
        this._renderQuickSelectionsContainer();
        this._renderTodayButton();
        this._renderNoneButton();
        // render calendar header elements
        this._calendarHeader.appendChild(this._monthYearContainer);
        this._monthYearContainer.appendChild(this._previousButton);
        this._monthYearContainer.appendChild(this._displayLabel);
        this._monthYearContainer.appendChild(this._nextButton);
        this.element.appendChild(this._calendarHeader);
        // render days elements
        this._weekDayLabelsSpans.forEach(function (weekLabel) {
            _this._daysContainer.appendChild(weekLabel);
        });
        this._displayDaysSpans.forEach(function (dayLabel) {
            _this._daysContainer.appendChild(dayLabel);
        });
        this.element.appendChild(this._daysContainer);
        // render calendar footer
        this._quickSelectionsContainer.appendChild(this._todayButton);
        this._quickSelectionsContainer.appendChild(this._noneButton);
        this._todayButton.onclick = function (e) {
            if (_this._props.onDateClick) {
                _this._props.onDateClick(new Date());
            }
        };
        this._noneButton.onclick = function (e) {
            if (_this._props.onDateClick) {
                _this._props.onDateClick(null);
            }
        };
        this.element.appendChild(this._quickSelectionsContainer);
        this.element.onblur = function (e) {
            if (_this._props.onClickOutside) {
                _this._props.onClickOutside(e);
            }
        };
        return this.element;
    };
    Calendar.prototype._setOnclickForDaysLabels = function (daySpan) {
        var _this = this;
        daySpan.onclick = function () {
            if (_this._props.onDateClick && daySpan.dataset.date) {
                _this._props.onDateClick(parseStringToDate(daySpan.dataset.date));
            }
        };
    };
    Calendar.prototype.setValue = function (date) {
        if (date) {
            this._props.date = date;
            this._displayDate = new Date(date);
            // rerender self
            this.rerender(['selectedDate']);
        }
    };
    Calendar.prototype.getValue = function () {
        return this._props.date;
    };
    Calendar.prototype.setLocale = function (locale) {
        this._props.locale = locale;
    };
    Calendar.prototype.rerender = function (changedAttr, options) {
        var _this = this;
        _super.prototype.rerender.call(this);
        if (changedAttr.indexOf('selectedDate') !== -1) {
            this._displayLabel.textContent = format(this._displayDate, 'calendartitle', {
                locale: this._props.locale
            });
            this._daysContainer.innerHTML = '';
            this._renderWeekDaysLabels();
            this._weekDayLabelsSpans.forEach(function (weekLabel) {
                _this._daysContainer.appendChild(weekLabel);
            });
            this._renderDaysLabels();
            this._displayDaysSpans.forEach(function (dayLabel) {
                _this._daysContainer.appendChild(dayLabel);
            });
        }
        if (changedAttr.indexOf('offsetLeft') !== -1 && options) {
            this.element.style.left = options['left'] + 'px';
        }
        if (changedAttr.indexOf('footerButtons') !== -1 && this._props.locale) {
            this._todayButton.textContent = this._props.locale.today;
            this._noneButton.textContent = this._props.locale.none;
        }
    };
    Calendar.prototype.getElement = function () {
        return this.element;
    };
    return Calendar;
}(Control));
export default Calendar;
