import Control, {ControlProps} from '../Control'
import '../../css/DateTime.css'
import {en, format} from '../../react/DateTime/components/Locale'
import Locale from '../../react/DateTime/components/localizationData/locale-dto'
import {parseStringToDate, parseStringToTime} from '../../react/DateTime/components/utils'
import Calendar from './components/Calendar'

type DateTimeProps = ControlProps & {
  value?: Date
  type?: string
  locale?: Locale
  dateFormat?: string
  timeFormat?: string
  timeIntervals?: number
}

class DateTime extends Control {
  protected _props: DateTimeProps = {...this._props, ...{
    value: new Date(),
    type: 'datetime',
    locale: en,
    dateFormat: 'MM/dd/YYYY',
    timeFormat: 'HH:mm'
  }}
  protected element: HTMLElement
  private _dateContainer: HTMLElement
  private _dateTextInput: HTMLInputElement
  private _dateErrorDiv: HTMLElement
  private _calendar: Calendar

  constructor(params:DateTimeProps = {}) {
    super()
    if(params) {
      this._props = {...this._props, ...params}
    }
  }

  render() {
    this._renderContainer()
    switch (this._props.type) {
      case 'datetime':
        return this._renderDateTime()
      case 'date':
        return this._renderDate()
      case 'time':
        return this._renderTime()
      default:
        return this._renderDateTime()
    }
  }

  rerender(changedAttr?: Array<string>){
    super.rerender()
    if(changedAttr.indexOf('dateTextInput') !== -1) {
      // this._dateErrorDiv.style.display = 'none'
      if(this._props.value) {
        this._dateTextInput.value = format(this._props.value, 'MM/dd/YYYY', {
          locale: this._props.locale
        })
      }
			else {
        this._dateTextInput.value = ''
      }
		}
  }

  private _renderContainer() {
    const container = document.createElement('div')
    container.classList.add('date-time-container')
    this.element = container
  }

  private _renderDateInputErrorLabel() {
    const dateError = document.createElement('div')
    dateError.className = 'label-error'
    dateError.style.display = 'none'
    const span = document.createElement('span')
    span.textContent = 'Invalid date'
    dateError.appendChild(span)
    this._dateErrorDiv = dateError
    return dateError
  }

  private _renderDateTextInput() {
    const dateTextInputContainer = document.createElement('div')
    dateTextInputContainer.classList.add('text-input-container')
    const dateTextInput = document.createElement('input')
    dateTextInput.type = 'text'
    dateTextInput.classList.add('text-input')
    dateTextInput.value = format(this._props.value, this._props.dateFormat)
    
    // event handlers
    dateTextInput.onclick = () => {
      if(this._dateErrorDiv.style.display === 'block') {
        this._props.value = null
      }
      this._calendar.setValue(this._props.value)
      this._calendar.show()
    }
    dateTextInput.onfocus = () => {
      if(this._dateErrorDiv.style.display === 'none') {
        this.rerender(['dateTextInput'])
      }
    }
    dateTextInput.onblur = (e) => {
      this._onClickOutside(e)
    }
    //

    this._dateTextInput = dateTextInput
    dateTextInputContainer.appendChild(dateTextInput)
    return dateTextInputContainer
  }

  private _renderDate() { 
    const dateContainer = document.createElement('div')
    dateContainer.classList.add('date-container')
    dateContainer.appendChild(this._renderDateTextInput())
    this._dateContainer = dateContainer

    // render date input error
    this._renderDateInputErrorLabel()
    this._dateContainer.appendChild(this._dateErrorDiv)
    
    // render calendar
    const calendar = new Calendar({
      date:this._props.value,
      onClickOutside: this._onClickOutside,
      onDateClick: this._onCalendarDateClick
    })
    this._dateContainer.appendChild(calendar.render())
    this.element.appendChild(dateContainer)
    this._calendar = calendar

    return this.element
  }

  private _renderTime() {
    return this.element
  }

  private _renderDateTime() {
    const dateEl = this._renderDate()
    const timeEl = this._renderTime()
    const dateTimeEl = document.createElement('div')
    dateTimeEl.appendChild(dateEl)
    dateTimeEl.appendChild(timeEl)
    return this.element
  }

  private _checkDateInputError() {
    this._dateErrorDiv.style.display = 'none'
    if(this._dateTextInput.value === '') {
      this._props.value = null
    }
    else {
      let tempDate = parseStringToDate(this._dateTextInput.value)
      if (tempDate instanceof Date && !isNaN(tempDate as any)) {
        this._props.value = tempDate
      }
      else {
        this._dateErrorDiv.style.display = 'block'
      }
    }
  }

  private _onClickOutside = (e: FocusEvent) => {
    if(
      e.relatedTarget == null || 
      (
        !e.relatedTarget['classList'].contains('calendar-button') &&
        !e.relatedTarget['classList'].contains('date-picker-container') && 
        !e.relatedTarget['classList'].contains('day') &&
        e.relatedTarget !== this._dateTextInput
      )
    )
    {
      this._calendar.hide()
    }
    if(e.target === this._dateTextInput && 
      (e.relatedTarget == null || !e.relatedTarget['classList'].contains('day'))
    ) {
      this._checkDateInputError()
    }
  }

  private _onCalendarDateClick = (date: Date | null) => {
    this._dateErrorDiv.style.display = 'none'
    this._calendar.setValue(date)
    this._calendar.hide()

    // rerender DateTextInput
    this._props.value = date
    this.rerender(['dateTextInput'])
  }
}

export default DateTime
