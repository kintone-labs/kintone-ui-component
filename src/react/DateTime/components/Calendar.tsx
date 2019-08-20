import React, {useState, useEffect, useRef} from 'react';
import {getWeekDayLabels, getDisplayingDays, isSameMonth, isToday, isSameDate, getMonthLabels, getYearLabels} from './utils';
import {ja, en, format} from './Locale';

import Locale from './localizationData/locale-dto';
import {Dropdown} from '../../index';
import '../../../css/DropdownCalendar.css';

type CalendarProps = {
  date: Date;
  locale?: Locale;
  pickerDisplay?: string;
  hasSelection?: boolean;
  onDateClick?: (date: Date | null, previousDate: Date | null) => void;
  calRef: any;
}

let previousDate: Date;

const Calendar = ({
  date,
  locale = ja,
  pickerDisplay = 'block',
  hasSelection = false,
  onDateClick = () => {},
  calRef
}: CalendarProps) => {
  const today = new Date();
  const weekDayLabels = getWeekDayLabels(locale);
  const [displayDate, setDisplayDate] = useState(date ? new Date(date) : new Date());
  const [displayMonth, setDisplayMonth] = useState(format(displayDate, 'calendarmonth', {locale: locale}));
  const [displayYear, setDisplayYear] = useState(format(displayDate, 'calendaryear', {locale: locale}));
  const displayingDays = getDisplayingDays(displayDate);
  const dropDownsRowRef = useRef<HTMLDivElement>(null);

  const scrollToSeletedOptions = () => {
    const styleScroll: any = {block: 'center'};
    const selectedItems: HTMLCollectionOf<Element> = document.getElementsByClassName('kuc-list-item-selected');
    for (let i = 0; i < selectedItems.length; i++) {
      const item = selectedItems[i];
      item.scrollIntoView(styleScroll);
    }
  };
  if (!previousDate) {
    previousDate = new Date(date);
  }
  useEffect(()=>{
    if (date) {
      if (!isSameDate(date, previousDate)) {
        setDisplayDate(new Date(date));
        previousDate = new Date(date);
      }
    }
  }, [date]);

  const _handleDropdownSelection = (e: any) => {
    if (dropDownsRowRef.current) {
      // if selected add class selected
      const selectedDropdownOuter = e.target.closest('.kuc-dropdown-outer');
      if(dropDownsRowRef.current.contains(e.target) && selectedDropdownOuter) {
        if(selectedDropdownOuter.classList.contains('selected')) {
          selectedDropdownOuter.classList.remove('selected')
        } else {
          _clearAllDropdownSelections();
          selectedDropdownOuter.classList.add('selected');
        }
      } else {
        _clearAllDropdownSelections();
      }
    }
  };

  const _clearAllDropdownSelections = () => {
    if(dropDownsRowRef.current) {
      // clear all selected children from selected class
      let outerList = dropDownsRowRef.current.getElementsByClassName('kuc-dropdown-outer');
      let outerListArray = [].slice.call(outerList);
      outerListArray.forEach((item: any) => {
        item.classList.remove('selected');
      })
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', _handleDropdownSelection);
    return () => document.removeEventListener('mousedown', _handleDropdownSelection);
  });

  return (
    <div
      ref={calRef}
      className="date-picker-container"
      style={{display: pickerDisplay}}
      tabIndex={-1}
      onBlur={(e)=>{
        const relatedTarget = e.relatedTarget ||
          e['explicitOriginalTarget'] ||
          document.activeElement; // IE11
        if (
          calRef.current !== relatedTarget &&
          !calRef.current.contains(relatedTarget as HTMLElement) &&
          pickerDisplay !== 'none'
        ) {
          onDateClick(null, null);
        }
      }}
    >
      <div className="header">
        <div className="month-year-container">
          <span
            className="prev calendar-button-control"
            onClick={()=>{
              const newDate = new Date(displayDate);
              newDate.setMonth(newDate.getMonth() - 1, 1);
              const newDisplayMonth = getMonthLabels(locale)[newDate.getMonth()].label;
              setDisplayMonth(newDisplayMonth);
              setDisplayDate(newDate);
              setDisplayYear(format(newDate, 'calendaryear', {locale}));
            }}
            tabIndex={-1}
          />
          <div ref={dropDownsRowRef} className="kuc-calendar-dropdown-row" tabIndex={-1}>
            {locale === en ?
              <React.Fragment>
                <Dropdown
                  items={getMonthLabels(locale)}
                  value={displayMonth}
                  onChange={(value) => {
                    const newDate = new Date(displayDate);
                    newDate.setMonth(locale.monthNames.indexOf(value), 1);
                    setDisplayMonth(value);
                    setDisplayDate(newDate);
                    setDisplayYear(newDate.getFullYear().toString());
                    scrollToSeletedOptions();
                  }}
                />
                <Dropdown
                  items={getYearLabels(displayYear, locale)}
                  value={displayYear}
                  onChange={(value) => {
                    const newDate = new Date(displayDate);
                    newDate.setFullYear(parseInt(value, 10), displayDate.getMonth(), 1);
                    setDisplayYear(value);
                    setDisplayDate(newDate);
                    scrollToSeletedOptions();
                  }}
                />
              </React.Fragment>
              :
              <React.Fragment>
                <Dropdown
                  items={getYearLabels(displayYear, locale)}
                  value={displayYear}
                  onChange={(value) => {
                    const newDate = new Date(displayDate);
                    let currentYear: any = value;
                    currentYear = currentYear.replace('年', '');
                    currentYear = parseInt(value, 10);
                    newDate.setFullYear(parseInt(currentYear, 10), displayDate.getMonth(), 1);
                    setDisplayYear(value);
                    setDisplayDate(newDate);
                    scrollToSeletedOptions();
                  }}
                />
                <Dropdown
                  items={getMonthLabels(locale)}
                  value={displayMonth}
                  onChange={(value) => {
                    const newDate = new Date(displayDate);
                    newDate.setMonth(locale.monthNames.indexOf(value), 1);
                    setDisplayMonth(value);
                    setDisplayDate(newDate);
                    setDisplayYear(newDate.getFullYear().toString() + '年');
                    scrollToSeletedOptions();
                  }}
                />
              </React.Fragment>
            }
          </div>
          <span
            className="next calendar-button-control"
            onClick={() => {
              const newDate = new Date(displayDate);
              newDate.setMonth(newDate.getMonth() + 1, 1);
              const newDisplayMonth = getMonthLabels(locale)[newDate.getMonth()].label;
              setDisplayMonth(newDisplayMonth);
              setDisplayDate(newDate);
              setDisplayYear(format(newDate, 'calendaryear', {locale}));
            }}
            tabIndex={-1}
          />
        </div>
        <div className="days-container">
          {weekDayLabels.map((label, index) => {
            const notWeekend = index !== 0 && index !== 6;
            return (
              <span
                className={
                  notWeekend ? 'wday-header' : 'wday-header grayed-out'
                }
                key={`wday-header-${index}`}
              >
                {label}
              </span>
            );
          })}
          {displayingDays.map((day, index) => {
            let className = 'day';

            className += displayDate && isSameMonth(day, displayDate) ? '' : ' grayed-out';
            className += isToday(day) ? ' today' : '';
            className += date && isSameDate(day, date) && hasSelection ? ' selected' : '';
            return (
              <span
                className={`${className} calendar-button`}
                key={`day-${index}`}
                onClick={()=>{

                  const returnDate = new Date(date);
                  returnDate.setFullYear(day.getFullYear(), day.getMonth(), day.getDate());

                  onDateClick(returnDate, null);
                  setDisplayDate(new Date(day));
                }}
                tabIndex={0}
              >
                {format(day, 'd')}
              </span>
            );
          })}
        </div>
        <div className="quick-selections-container">
          <span
            className="today calendar-button-control"
            onClick={()=>{
              setDisplayDate(new Date()); onDateClick(today, null);
            }}
          >{locale.today}
          </span>
          <span
            className="none calendar-button-control"
            onClick={()=>{
              onDateClick(null, previousDate);
            }}
            tabIndex={-1}
          >{locale.none}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;