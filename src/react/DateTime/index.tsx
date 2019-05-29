import '../../css/DateTime.css';
import React, {useState, useEffect, createRef} from 'react';
import {en, ja, zh, format} from './components/Locale';

import {parseStringToDate, parseStringToTime} from './components/utils';
import Calendar from './components/Calendar';
import TimePicker from './components/TimePicker';

type DateTimeConstructorParameters = {
  value: Date;
  onChange?: Function;
  locale?: string;
  dateFormat?: string;
  type?: string;
  timeFormat?: string;
  isDisabled?: boolean;
}

const DateTime = ({
  value =  new Date(),
  isDisabled = false,
  onChange = (newDate: Date) => {},
  locale = 'ja',
  dateFormat = 'MM/dd/YYYY',
  type = 'datetime',
  timeFormat = 'HH:mm'}: DateTimeConstructorParameters) => {
  const [pickerDisplay, setPickerDisplay] = useState('none');
  const [showPickerError, setShowPickerError] = useState(true);
  const [dateError, setDateError] = useState('');
  const [timePickerDisplay, setTimePickerDisplay] = useState('none');
  const [showTimePickerError, setShowTimePickerError] = useState(true);
  const [timeError, setTimeError] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const wrapperRef: React.RefObject<HTMLDivElement> = createRef<HTMLDivElement>();

  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside, true);
    return ()=>{
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  });

  const handleClickOutside = (event: any) => {
    if (wrapperRef && wrapperRef.current) {
      const node: any = wrapperRef.current;
      if (node.contains(event.target) && (pickerDisplay !== 'none' || timePickerDisplay !== 'none')) {
        // setPickerDisplay('none')
        // setTimePickerDisplay('none')
      }
    }
  };

  let localeObj = ja;
  if (locale === 'en') {
    localeObj = en;
  } else if (locale === 'zh') {
    localeObj = zh;
  }

  if (type !== 'datetime' && type !== 'date' && type !== 'time') {
    type = 'datetime'
  }

  return (
    <div className="date-time-container" ref={wrapperRef}>
      {
        (type === 'datetime' || type === 'date') &&
        <div className="date-container">
          <div className="text-input-container" key={`${format(value, dateFormat)}-${dateError}`}>
            <input
              type="text"
              className="text-input"
              disabled={isDisabled}
              onFocus={() => {
                setPickerDisplay('block');
                setShowPickerError(false);
                setTimePickerDisplay('none');
              }}
              defaultValue={value && !dateError ? format(value, dateFormat) : inputValue}
              onBlur={(e) => {
                if (e.relatedTarget == null ||
                (!(e.relatedTarget as HTMLElement).classList.contains('calendar-button') &&
                !(e.relatedTarget as HTMLElement).classList.contains('calendar-button-control') &&
                !(e.relatedTarget as HTMLElement).classList.contains('date-picker-container'))) {
                  setDateError('');
                  const tempDate = parseStringToDate(e.target.value);
                  if (!e.target.value) {
                    onChange(null);
                    setPickerDisplay('none');
                    setShowPickerError(true);
                  } else if (tempDate instanceof Date && !isNaN(tempDate as any)) {
                    const returnDate = new Date(value);
                    returnDate.setFullYear(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate());
                    onChange(returnDate);
                    setPickerDisplay('none');
                    setShowPickerError(true);
                  } else if (e.target.value) {
                    setInputValue(e.target.value);
                    setDateError('Invalid date');
                    setPickerDisplay('none');
                    setShowPickerError(true);
                  }
                }
              }}
              onKeyDown={
                (e) => {
                  if (e.key === 'Tab') {
                    setPickerDisplay('none');
                  }
                }
              }
            />
          </div>
          {
            (dateError && showPickerError) &&
            <div className="label-error">
              <span>{dateError}</span>
            </div>
          }
          {
            !isDisabled &&
            <Calendar
              pickerDisplay={pickerDisplay}
              date={value}
              locale={localeObj}
              onDateClick={
                (calendarDate: Date) => {
                  setDateError('');
                  if (calendarDate) {
                    let tempDate = new Date();
                    if (value) {
                      tempDate = new Date(value);
                    }
                    tempDate.setFullYear(calendarDate.getFullYear(), calendarDate.getMonth(), calendarDate.getDate());
                    onChange(tempDate);
                  } else {
                    onChange(null);
                    setInputValue('');
                  }
                  setPickerDisplay('none');
                  setShowPickerError(true);
                }
              }
            />
          }
        </div>

      }
      {
        (type === 'datetime' || type === 'time') &&
        <div className="time-container">
          <input
            type="text"
            disabled={isDisabled}
            key={`${format(value, timeFormat)}-${timeError}`}
            className="text-input"
            onFocus={() => {
              setTimePickerDisplay('flex');
              setPickerDisplay('none');
              setShowTimePickerError(false);
            }}
            defaultValue={value && !timeError ? format(value, timeFormat) : timeValue}
            onBlur={
              (e)=>{
                if (e.relatedTarget === null || !(e.relatedTarget as HTMLElement).classList.contains('kuc-time-list-item')) {
                  setTimeError('');
                  const tempDate = parseStringToTime(e.target.value);

                  if (tempDate instanceof Date && !isNaN(tempDate as any)) {
                    const returnDate = new Date(value);
                    returnDate.setHours(tempDate.getHours(), tempDate.getMinutes(), tempDate.getSeconds());
                    onChange(returnDate);
                    setTimePickerDisplay('none');
                    setShowTimePickerError(true);
                  } else if (e.target.value) {
                    setTimeValue(e.target.value);
                    setTimeError('Invalid time');
                    setTimePickerDisplay('none');
                    setShowTimePickerError(true);
                  } else {
                    setTimePickerDisplay('none');
                    setShowTimePickerError(true);
                  }
                }
              }
            }
            onKeyDown={
              (e) => {
                if (e.key === 'Tab') {
                  setTimePickerDisplay('none');
                  setShowTimePickerError(true);

                }
              }
            }
          />
          {
            (timeError && showTimePickerError) &&
            <div className="label-error">
              <span>{timeError}</span>
            </div>
          }
          {
            !isDisabled &&
            <TimePicker
              pickerDisplay={timePickerDisplay}
              locale={localeObj}
              onTimeClick={
                (timePickerDate: Date) => {
                  setTimeError('');
                  let tempDate = new Date();
                  if (value) tempDate = new Date(value);
                  tempDate.setHours(timePickerDate.getHours(), timePickerDate.getMinutes());
                  setTimeValue(format(value, timeFormat));
                  onChange(tempDate);
                  setTimePickerDisplay('none');
                  setShowTimePickerError(true);
                }
              }
            />
          }
        </div>
      }
    </div>
  );
};

export default DateTime;
export {
  DateTimeConstructorParameters,
  Calendar
};
export * from './components/Locale';
