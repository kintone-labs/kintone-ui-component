
import {getWeekDayLabels,
  getDisplayingDays,
  isSameMonth,
  isToday,
  isSameDate,
  parseStringToDate,
  getMonthLabels,
  getYearLabels
} from '../../../react/DateTime/components/utils';
import {ja, en, format} from '../../../react/DateTime/components/Locale';
import Locale from '../../../react/DateTime/components/localizationData/locale-dto';
import Control, {ControlProps} from '../../Control';
import Dropdown from '../../Dropdown';
import '../../../css/DropdownCalendar.css';
type CalendarProps = ControlProps & {
  date?: Date | null;
  locale: Locale;
  onDateClick?: (date: Date | null) => void;
  onClickOutside?: (e: FocusEvent) => void;
}

class Calendar extends Control<CalendarProps> {
  protected element: HTMLElement
  private _calendarHeader: HTMLElement
  private _monthYearContainer: HTMLElement
  private _previousButton: HTMLElement
  private _nextButton: HTMLElement
  private _displayDate: Date = new Date()
  private _displayMonth: string
  private _displayYear: string
  private _monthYearDropdownsRow: HTMLElement
  private _displayMonthDropdown: Dropdown
  private _displayYearDropdown: Dropdown
  private _daysContainer: HTMLElement
  private _quickSelectionsContainer: HTMLElement
  private _todayButton: HTMLElement
  private _noneButton: HTMLElement
  private _weekDayLabelsSpans: HTMLElement[]
  private _displayDaysSpans: HTMLElement[]

  constructor(params: CalendarProps) {
    super();
    this._props = {
      locale: ja,
      isDisabled: false,
      isVisible: false
    };
    if (params) {
      this._props = {...this._props, ...params};
      if (this._props.date) this._displayDate = this._props.date;
    }
    this._displayMonth = format(this._displayDate, 'calendarmonth', {locale: this._props.locale});
    this._displayYear = format(this._displayDate, 'calendaryear', {locale: this._props.locale});
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
    const monthYearDropdownsRow = document.createElement('div');
    monthYearDropdownsRow.tabIndex = -1;
    monthYearDropdownsRow.classList.add('kuc-calendar-dropdown-row');
    this._monthYearDropdownsRow = monthYearDropdownsRow;
    this._monthYearContainer = monthYearContainer;
  }

  _renderPreviousButton() {
    const span = document.createElement('span');
    span.className = 'prev calendar-button-control';
    span.onclick = () => {
      this._displayDate.setMonth(this._displayDate.getMonth() - 1);
      this._displayMonth = this._displayDate.getMonth() + '';
      this.rerender(['monthYearDropdown']);
      this.rerender(['selectedDate']);
    };
    this._previousButton = span;
  }

  _scrollToSeletedOptions = () => {
    const selectedItems: HTMLCollectionOf<Element> = document.getElementsByClassName('kuc-list-item-selected');
    for (let i = 0; i < selectedItems.length; i++) {
      const item = selectedItems[i];
      (item.parentNode as HTMLElement).scrollTop = (item as HTMLElement).offsetTop - (item.parentNode as HTMLElement).offsetTop;
    }
  };

  _renderDisplayMonthDropdown() {
    const monthDropdown = new Dropdown({value: this._displayMonth, items: getMonthLabels(this._props.locale)});
    monthDropdown.on('listItemsShown', () => {
      this._scrollToSeletedOptions();
    });
    monthDropdown.on('change', (value) => {
      const newDate = new Date(this._displayDate);
      newDate.setMonth(this._props.locale.monthNames.indexOf(value), 1);
      this._displayMonth = value;
      this._displayDate = newDate;
      this._scrollToSeletedOptions();
      this.rerender(['selectedDate']);
    });
    this._displayMonthDropdown = monthDropdown;
  }

  _onChangeCreateYearDropdown(value: any) {
    const newDate = new Date(this._displayDate);
    const currentYear = Number(value.replace('年', ''));
    newDate.setFullYear(currentYear, this._displayDate.getMonth(), 1);
    this._displayYear = value;
    this._displayDate = newDate;
    this._displayYearDropdown.setItems(getYearLabels(this._displayYear, this._props.locale));
    this.rerender(['selectedDate']);
  }

  _renderDisplayYearDropdown() {
    const yearDropdown = new Dropdown({value: this._displayYear, items: getYearLabels(this._displayYear, this._props.locale)});
    yearDropdown.on('listItemsShown', () => {
      this._scrollToSeletedOptions();
    });
    this._displayYearDropdown = yearDropdown;
    this._displayYearDropdown.on('change', this._onChangeCreateYearDropdown.bind(this));
  }

  _renderNextButton() {
    const span = document.createElement('span');
    span.className = 'next calendar-button-control';
    span.onclick = () => {
      this._displayDate.setMonth(this._displayDate.getMonth() + 1);
      this.rerender(['monthYearDropdown']);
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
    span.className = 'today calendar-button-control';
    if (this._props.locale) {
      span.textContent = this._props.locale.today;
    }
    this._todayButton = span;
  }

  _renderNoneButton() {
    const span = document.createElement('span');
    span.className = 'none calendar-button-control';
    if (this._props.locale) {
      span.textContent = this._props.locale.none;
    }
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
    } else {
      this._monthYearDropdownsRow.appendChild(this._displayYearDropdown.render());
      this._monthYearDropdownsRow.appendChild(this._displayMonthDropdown.render());
    }
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
    this._todayButton.onclick = () => {
      if (this._props.onDateClick) {
        const currentDate = new Date();
        this._displayMonth = getMonthLabels(this._props.locale)[currentDate.getMonth()].label;
        this._displayYear = format(currentDate, 'calendaryear', {locale: this._props.locale});
        this._displayMonthDropdown.setValue(this._displayMonth);
        this._displayYearDropdown.setValue(this._displayYear);
        this._props.onDateClick(new Date());
      }
    };
    this._noneButton.onclick = (e) => {
      if (this._props.onDateClick) {
        this._props.onDateClick(null);
      }
    };
    this.element.appendChild(this._quickSelectionsContainer);

    this.element.onblur = (e) => {
      if (this._props.onClickOutside) {
        this._props.onClickOutside(e);
      }
    };

    return this.element;
  }

  _setOnclickForDaysLabels(daySpan: HTMLElement) {
    daySpan.onclick = () => {
      if (this._props.onDateClick && daySpan.dataset.date) {
        this._props.onDateClick(parseStringToDate(daySpan.dataset.date));
      }
    };
  }

  setValue(date: Date | undefined | null) {
    if (date) {
      this._displayDate = new Date(date);
    }
    this._props.date = date;
    this.rerender(['selectedDate', 'monthYearDropdown']);
  }

  getValue(): Date | null | undefined {
    return this._props.date;
  }

  setLocale(locale: Locale) {
    this._props.locale = locale;
  }

  rerender(changedAttr: string[], options?: Record<string, any>) {
    super.rerender();
    if (changedAttr.indexOf('selectedDate') !== -1) {
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
    if (changedAttr.indexOf('monthYearDropdown') !== -1) {
      this._displayMonth = format(this._displayDate, 'calendarmonth', {locale: this._props.locale});
      this._displayYear = format(this._displayDate, 'calendaryear', {locale: this._props.locale});
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
  }

  getElement() {
    return this.element;
  }
}

export default Calendar;
