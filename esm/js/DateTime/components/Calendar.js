import { __assign, __extends } from "tslib";
import { getWeekDayLabels, getDisplayingDays, isSameMonth, isToday, isSameDate, parseStringToDate, getMonthLabels, getYearLabels } from '../../../react/DateTime/components/utils';
import { ja, en, format } from '../../../react/DateTime/components/Locale';
import Control from '../../Control';
import Dropdown from '../../Dropdown';
import '../../../css/DropdownCalendar.css';
var Calendar = /** @class */ (function (_super) {
    __extends(Calendar, _super);
    function Calendar(params) {
        var _this = _super.call(this) || this;
        _this._displayDate = new Date();
        _this._scrollToSeletedOptions = function () {
            var selectedItems = document.getElementsByClassName('kuc-list-item-selected');
            for (var i = 0; i < selectedItems.length; i++) {
                var item = selectedItems[i];
                item.parentNode.scrollTop = item.offsetTop - item.parentNode.offsetTop;
            }
        };
        _this._props = {
            locale: ja,
            isDisabled: false,
            isVisible: false
        };
        if (params) {
            _this._props = __assign(__assign({}, _this._props), params);
            if (_this._props.date)
                _this._displayDate = _this._props.date;
        }
        _this._displayMonth = format(_this._displayDate, 'calendarmonth', { locale: _this._props.locale });
        _this._displayYear = format(_this._displayDate, 'calendaryear', { locale: _this._props.locale });
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
        var monthYearDropdownsRow = document.createElement('div');
        monthYearDropdownsRow.tabIndex = -1;
        monthYearDropdownsRow.classList.add('kuc-calendar-dropdown-row');
        this._monthYearDropdownsRow = monthYearDropdownsRow;
        this._monthYearContainer = monthYearContainer;
    };
    Calendar.prototype._renderPreviousButton = function () {
        var _this = this;
        var span = document.createElement('span');
        span.className = 'prev calendar-button-control';
        span.onclick = function () {
            _this._displayDate.setMonth(_this._displayDate.getMonth() - 1);
            _this._displayMonth = _this._displayDate.getMonth() + '';
            _this.rerender(['monthYearDropdown']);
            _this.rerender(['selectedDate']);
        };
        this._previousButton = span;
    };
    Calendar.prototype._renderDisplayMonthDropdown = function () {
        var _this = this;
        var monthDropdown = new Dropdown({ value: this._displayMonth, items: getMonthLabels(this._props.locale) });
        monthDropdown.on('listItemsShown', function () {
            _this._scrollToSeletedOptions();
        });
        monthDropdown.on('change', function (value) {
            var newDate = new Date(_this._displayDate);
            newDate.setMonth(_this._props.locale.monthNames.indexOf(value), 1);
            _this._displayMonth = value;
            _this._displayDate = newDate;
            _this._scrollToSeletedOptions();
            _this.rerender(['selectedDate']);
        });
        this._displayMonthDropdown = monthDropdown;
    };
    Calendar.prototype._onChangeCreateYearDropdown = function (value) {
        var newDate = new Date(this._displayDate);
        var currentYear = Number(value.replace('年', ''));
        newDate.setFullYear(currentYear, this._displayDate.getMonth(), 1);
        this._displayYear = value;
        this._displayDate = newDate;
        this._displayYearDropdown.setItems(getYearLabels(this._displayYear, this._props.locale));
        this.rerender(['selectedDate']);
    };
    Calendar.prototype._renderDisplayYearDropdown = function () {
        var _this = this;
        var yearDropdown = new Dropdown({ value: this._displayYear, items: getYearLabels(this._displayYear, this._props.locale) });
        yearDropdown.on('listItemsShown', function () {
            _this._scrollToSeletedOptions();
        });
        this._displayYearDropdown = yearDropdown;
        this._displayYearDropdown.on('change', this._onChangeCreateYearDropdown.bind(this));
    };
    Calendar.prototype._renderNextButton = function () {
        var _this = this;
        var span = document.createElement('span');
        span.className = 'next calendar-button-control';
        span.onclick = function () {
            _this._displayDate.setMonth(_this._displayDate.getMonth() + 1);
            _this.rerender(['monthYearDropdown']);
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
        this._renderDisplayMonthDropdown();
        this._renderDisplayYearDropdown();
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
        this._monthYearContainer.appendChild(this._monthYearDropdownsRow);
        if (this._props.locale === en) {
            this._monthYearDropdownsRow.appendChild(this._displayMonthDropdown.render());
            this._monthYearDropdownsRow.appendChild(this._displayYearDropdown.render());
        }
        else {
            this._monthYearDropdownsRow.appendChild(this._displayYearDropdown.render());
            this._monthYearDropdownsRow.appendChild(this._displayMonthDropdown.render());
        }
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
        this._todayButton.onclick = function () {
            if (_this._props.onDateClick) {
                var currentDate = new Date();
                _this._displayMonth = getMonthLabels(_this._props.locale)[currentDate.getMonth()].label;
                _this._displayYear = format(currentDate, 'calendaryear', { locale: _this._props.locale });
                _this._displayMonthDropdown.setValue(_this._displayMonth);
                _this._displayYearDropdown.setValue(_this._displayYear);
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
            this._displayDate = new Date(date);
        }
        this._props.date = date;
        this.rerender(['selectedDate', 'monthYearDropdown']);
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
        if (changedAttr.indexOf('monthYearDropdown') !== -1) {
            this._displayMonth = format(this._displayDate, 'calendarmonth', { locale: this._props.locale });
            this._displayYear = format(this._displayDate, 'calendaryear', { locale: this._props.locale });
            this._displayMonthDropdown.setValue(this._displayMonth);
            this._displayYearDropdown.setValue(this._displayYear);
        }
        if (changedAttr.indexOf('offsetLeft') !== -1 && options) {
            this.element.style.left = options.left + 'px';
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
