import '../../css/DateTime.css';
import '../../css/Text.css';
import React, {useState, createRef} from 'react';
import {en, ja, zh, format} from './components/Locale';

import {parseStringToDate, parseStringToTime} from './components/utils';
import Calendar from './components/Calendar';
import TimePicker from './components/TimePicker';

type DateTimeConstructorParameters = {
  value?: Date;
  onChange?: Function;
  locale?: string;
  dateFormat?: string;
  type?: string;
  timeFormat?: string;
  isDisabled?: boolean;
  isVisible?: boolean
}

const DateTime = ({
  value =  new Date(),
  isDisabled = false,
  isVisible = true,
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
  const [inputValue, setInputValue] = useState(format(value, dateFormat));
  const [timeValue, setTimeValue] = useState('');
  const [hasSelection, setHasSelection] = useState(true)
  const timeDateValue = new Date(value);
  const wrapperRef: React.RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
  const calendarRef: React.RefObject<HTMLDivElement> = createRef<HTMLDivElement>();
  const timeRef: React.RefObject<HTMLDivElement> = createRef<HTMLDivElement>();

  if(typeof isDisabled !== 'boolean') {
    isDisabled = false
  }

  let localeObj = ja;
  if (locale === 'en') {
    localeObj = en;
  } else if (locale === 'zh') {
    localeObj = zh;
  }

  if (type !== 'datetime' && type !== 'date' && type !== 'time') {
    type = 'datetime'
  }

  if (isVisible) {
    return (
      <div className="date-time-container" ref={wrapperRef}>
        {
          (type === 'datetime' || type === 'date') &&
          <div className="date-container">
            <div className="text-input-container" key={`${format(value, dateFormat)}-${dateError}`}>
              <input
                type="text"
                className="kuc-input-text text-input"
                disabled={isDisabled}
                onFocus={() => {
                  setPickerDisplay('block');
                  setTimePickerDisplay('none');
                  // set input text to date if there is a selected date
                }}
                value={inputValue}
                onBlur={(e) => {
                  const tempDate = parseStringToDate(e.target.value);
                  if (!e.target.value) {
                    onChange(timeDateValue);
                    setShowPickerError(false);
                    setHasSelection(false);
                  } else if (tempDate instanceof Date && !isNaN(tempDate as any)) {
                    const returnDate = new Date(value);
                    returnDate.setFullYear(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate());
                    onChange(returnDate);
                    setShowPickerError(true);
                  } else if (e.target.value) {
                    setDateError('Invalid date');
                    setShowPickerError(true);
                  }

                  let relatedTarget = e.relatedTarget ||
                      e['explicitOriginalTarget'] ||
                      document.activeElement; // IE11
                  const calendar = calendarRef.current as HTMLDivElement
                  if(
                    relatedTarget !== calendar && !calendar.contains(relatedTarget as HTMLElement)
                  ) {
                    setPickerDisplay('none')
                  }
                }}
                onKeyDown={
                  (e) => {
                    if (e.key === 'Tab') {
                      setPickerDisplay('none');
                    }
                  }
                }
                onChange={(e)=>{
                  setInputValue(e.target.value)
                }}
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
                calRef={calendarRef}
                pickerDisplay={pickerDisplay}
                date={value}
                locale={localeObj}
                hasSelection={hasSelection}
                onDateClick={
                  (calendarDate: Date | null, previousDate: Date | null) => {
                    let tempDate: Date;
                    if(previousDate) {
                      tempDate = new Date(previousDate)
                    } else {
                      tempDate = new Date()
                    }
                    if (calendarDate) {
                      if (value) {
                        tempDate = new Date(value);
                      }
                      tempDate.setFullYear(calendarDate.getFullYear(), calendarDate.getMonth(), calendarDate.getDate());
                      tempDate.setHours(timeDateValue.getHours())
                      tempDate.setMinutes(timeDateValue.getMinutes())
                      onChange(tempDate);
                      setInputValue(format(tempDate, dateFormat))
                      setHasSelection(true)
                      setShowPickerError(false);
                    } else if(previousDate){
                      tempDate.setHours(timeDateValue.getHours())
                      tempDate.setMinutes(timeDateValue.getMinutes())
                      onChange(tempDate);
                      setInputValue('');
                      setHasSelection(false);
                      setShowPickerError(false);
                    }
                    setPickerDisplay('none');
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
              key={`${format(timeDateValue, timeFormat)}-${timeError}`}
              className="kuc-input-text text-input time"
              onFocus={() => {
                setTimePickerDisplay('flex');
                setPickerDisplay('none');
                setShowTimePickerError(false);
              }}
              defaultValue={timeDateValue && !timeError ? format(timeDateValue, timeFormat) : timeValue}
              onBlur={
                (e)=>{
                  let relatedTarget = e.relatedTarget ||
                      e['explicitOriginalTarget'] ||
                      document.activeElement; // IE11
                  const timePicker = timeRef.current as HTMLDivElement
                  if (relatedTarget !== timePicker && !timePicker.contains(relatedTarget as HTMLElement)) {
                    setTimeError('');
                    const tempDate = parseStringToTime(e.target.value);
  
                    if (tempDate instanceof Date && !isNaN(tempDate as any)) {
                      const returnDate = new Date(timeDateValue);
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
                timeRef={timeRef}
                pickerDisplay={timePickerDisplay}
                onTimeClick={
                  (timePickerDate: Date) => {
                    setTimeError('');
                    let tempDate = new Date();
                    if (timeDateValue) tempDate = new Date(timeDateValue);
                    tempDate.setDate(value.getDate())
                    tempDate.setMonth(value.getMonth())
                    tempDate.setHours(timePickerDate.getHours(), timePickerDate.getMinutes());
                    
                    setTimeValue(format(timeDateValue, timeFormat));
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
  }
  else {
    return <div></div>
  }
};

export default DateTime;
export {
  DateTimeConstructorParameters,
  Calendar
};
export * from './components/Locale';
