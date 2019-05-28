
import {getWeekDayLabels,
  getDisplayingDays,
  isSameMonth,
  isToday,
  isSameDate,
  parseStringToDate
} from '../../../react/DateTime/components/utils';
import {ja, format} from '../../../react/DateTime/components/Locale';
import Locale from '../../../react/DateTime/components/localizationData/locale-dto';
import Control, {ControlProps} from '../../Control';

type CalendarProps = ControlProps & {
  date?: Date;
  locale?: Locale;
  onDateClick?: (date: Date | null) => void;
  onClickOutside?: (e: FocusEvent) => void;
}

class Calendar extends Control {
  protected _props: CalendarProps = {
    locale: ja,
    isDisabled: false,
    isVisible: false
  }

  protected element: HTMLElement
  private _calendarHeader: HTMLElement
  private _monthYearContainer: HTMLElement
  private _previousButton: HTMLElement
  private _nextButton: HTMLElement
  private _displayDate: Date = new Date()
  private _displayLabel: HTMLElement
  private _daysContainer: HTMLElement
  private _quickSelectionsContainer: HTMLElement
  private _todayButton: HTMLElement
  private _noneButton: HTMLElement
  private _weekDayLabelsSpans: HTMLElement[]
  private _displayDaysSpans: HTMLElement[]

  constructor(params: CalendarProps) {
    super();
    if (params) {
      this._props = {...this._props, ...params};
    }
  }

  _renderCalendarContainer() {
    const calendarContainer = document.createElement('div');
    calendarContainer.className = 'date-picker-container';
    calendarContainer.style.display = this._props.isVisible ? 'block' : 'none';
    calendarContainer.tabIndex = 0;
    this.element = calendarContainer;
  }

  _renderCalendarHeader() {
    const calendarHeader = document.createElement('div');
    calendarHeader.className = 'header';
    this._calendarHeader = calendarHeader;
  }

  _renderMonthYearContainer() {
    const monthYearContainer = document.createElement('div');
    monthYearContainer.className = 'month-year-container';
    this._monthYearContainer = monthYearContainer;
  }

  _renderPreviousButton() {
    const span = document.createElement('span');
    span.className = 'prev calendar-button-control';
    span.onclick = () => {
      this._displayDate.setMonth(this._displayDate.getMonth() - 1);
      this.rerender(['selectedDate']);
    };
    this._previousButton = span;
  }

  _renderDisplayDateLabel() {
    const span = document.createElement('span');
    span.className = 'label';
    span.textContent = format(this._displayDate, 'calendartitle', {
      locale: this._props.locale
    });
    this._displayLabel = span;
  }

  _renderNextButton() {
    const span = document.createElement('span');
    span.className = 'next calendar-button-control';
    span.onclick = () => {
      this._displayDate.setMonth(this._displayDate.getMonth() + 1);
      this.rerender(['selectedDate']);
    };
    this._nextButton = span;
  }

  _renderDaysContainer() {
    const div = document.createElement('div');
    div.className = 'days-container';
    this._daysContainer = div;
  }

  _renderQuickSelectionsContainer() {
    const div = document.createElement('div');
    div.className = 'quick-selections-container';
    this._quickSelectionsContainer = div;
  }

  _renderTodayButton() {
    const span = document.createElement('span');
    span.className = 'today calendar-button';
    span.textContent = this._props.locale.today;
    this._todayButton = span;
  }

  _renderNoneButton() {
    const span = document.createElement('span');
    span.className = 'none calendar-button';
    span.textContent = this._props.locale.none;
    this._noneButton = span;
  }

  _renderWeekDaysLabels() {
    const weekDayLabels = getWeekDayLabels(this._props.locale);
    const weekDayLabelsSpans: HTMLElement[] = [];
    weekDayLabels.forEach((label, index) => {
      const notWeekend = index !== 0 && index !== 6;
      const labelSpan = document.createElement('span');
      labelSpan.className = notWeekend ? 'wday-header' : 'wday-header grayed-out';
      labelSpan.textContent = label;
      weekDayLabelsSpans.push(labelSpan);
    });
    this._weekDayLabelsSpans = weekDayLabelsSpans;
  }

  _renderDaysLabels() {
    const displayingDays = getDisplayingDays(this._displayDate);
    const displayDaysSpans: HTMLElement[] = [];
    displayingDays.forEach((day) => {
      const daySpan = document.createElement('span');
      let className = 'day';
      className += this._displayDate && isSameMonth(day, this._displayDate) ? '' : ' grayed-out';
      className += isToday(day) ? ' today' : '';
      className += this._props.date && isSameDate(day, this._props.date) ? ' selected' : '';
      daySpan.className = className;
      daySpan.tabIndex = 0;
      daySpan.textContent = format(day, 'd');
      daySpan.dataset.date = format(day, 'MM/dd/YYYY');
      this._setOnclickForDaysLabels(daySpan);
      displayDaysSpans.push(daySpan);
    });
    this._displayDaysSpans = displayDaysSpans;
  }

  render() {
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
    this._weekDayLabelsSpans.forEach((weekLabel)=>{
      this._daysContainer.appendChild(weekLabel);
    });
    this._displayDaysSpans.forEach((dayLabel)=>{
      this._daysContainer.appendChild(dayLabel);
    });
    this.element.appendChild(this._daysContainer);

    // render calendar footer
    this._quickSelectionsContainer.appendChild(this._todayButton);
    this._quickSelectionsContainer.appendChild(this._noneButton);
    this._todayButton.onclick = (e) => {
      if (this._props.onDateClick) {
        this._props.onDateClick(new Date());
      }
    };
    this._noneButton.onclick = (e) => {
      if (this._props.onDateClick) {
        this._props.onDateClick(null);
      }
    };
    this.element.appendChild(this._quickSelectionsContainer);

    // TODO event handler
    this.element.onblur = (e) => {
      if (this._props.onClickOutside) {
        this._props.onClickOutside(e);
      }
    };

    return this.element;
  }

  _setOnclickForDaysLabels(daySpan: HTMLElement) {
    daySpan.onclick = () => {
      if (this._props.onDateClick) {
        this._props.onDateClick(parseStringToDate(daySpan.dataset.date));
      }
    };
  }

  setValue(date: Date | null) {
    this._props.date = date;
    if (date !== null) {
      this._displayDate = new Date(date);
    }
    // rerender self
    this.rerender(['selectedDate']);
  }

  getValue(): Date {
    return this._props.date;
  }

  setLocale(locale: Locale) {
    this._props.locale = locale;
  }

  rerender(changedAttr?: string[], options?: object) {
    super.rerender();
    if (changedAttr.indexOf('selectedDate') !== -1) {
      this._displayLabel.textContent = format(this._displayDate, 'calendartitle', {
        locale: this._props.locale
      });
      this._daysContainer.innerHTML = '';
      this._renderWeekDaysLabels();
      this._weekDayLabelsSpans.forEach((weekLabel)=>{
        this._daysContainer.appendChild(weekLabel);
      });
      this._renderDaysLabels();
      this._displayDaysSpans.forEach((dayLabel)=>{
        this._daysContainer.appendChild(dayLabel);
      });
    }
    if (changedAttr.indexOf('offsetLeft') !== -1) {
      this.element.style.left = options.left + 'px';
    }
    if (changedAttr.indexOf('footerButtons') !== -1) {
      this._todayButton.textContent = this._props.locale.today;
      this._noneButton.textContent = this._props.locale.none;
    }
  }
}

export default Calendar;