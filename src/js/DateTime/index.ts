import Control, {ControlProps} from '../Control'
import '../../css/DateTime.css'
import {en, format} from '../../react/DateTime/components/Locale'
import Locale from '../../react/DateTime/components/localizationData/locale-dto'
import {parseStringToDate, parseStringToTime} from '../../react/DateTime/components/utils'

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
  private _container: HTMLElement
  private _dateContainer: HTMLElement
  private _dateTextInput: HTMLElement
  private _dateErrorDiv: HTMLElement
  private _dateError: string = ''

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
    // check attribute changed to render related DOM element
  }

  private _renderContainer() {
    const container = document.createElement('div')
    container.classList.add('date-time-container')
    this._container = container
  }

  private _renderDateInputErrorLabel() {
    const dateError = document.createElement('div')
    dateError.className = 'label-error'
    const span = document.createElement('span')
    span.textContent = this._dateError
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

    this._dateTextInput = dateTextInput
    dateTextInputContainer.appendChild(dateTextInput)
    return dateTextInputContainer
  }

  private _renderDate() { 
    const dateContainer = document.createElement('div')
    dateContainer.classList.add('date-container')
    dateContainer.appendChild(this._renderDateTextInput())
    this._dateContainer = dateContainer
    this._container.appendChild(dateContainer)

    // TODO attach event listeners

    return this._container
  }

  private _renderTime() {
    return this._container
  }

  private _renderDateTime() {
    const dateEl = this._renderDate()
    const timeEl = this._renderTime()
    const dateTimeEl = document.createElement('div')
    dateTimeEl.appendChild(dateEl)
    dateTimeEl.appendChild(timeEl)
    return this._container
  }
}

export default DateTime
