
import {getWeekDayLabels, 
				getDisplayingDays, 
				isSameMonth, 
				isToday, 
				isSameDate
			} from '../../../react/DateTime/components/utils'
import {en, format} from '../../../react/DateTime/components/Locale'
import Locale from '../../../react/DateTime/components/localizationData/locale-dto';
import Control, { ControlProps } from '../../Control';

type CalendarProps = ControlProps & {
	date?: Date,
	locale?: Locale,
	onDateClick?: (date:Date | null) => void
}

class Calendar extends Control {
	protected _props: CalendarProps = {
		isDisabled: false,
		isVisible: false
	}
	private _previousDate:Date
	private _calendarContainer: HTMLElement
	private _calendarHeader: HTMLElement
	private _monthYearContainer: HTMLElement
	private _previousButton: HTMLElement
	private _nextButton: HTMLElement

	constructor(params: CalendarProps) {
		super()
		if(params) {
			this._props = {...this._props, ...params}
		}
	}

	_renderCalendarContainer() {
		const calendarContainer = document.createElement('div')
		calendarContainer.className = 'date-picker-container'
		calendarContainer.style.display = this._props.isVisible ? 'block' : 'none'
		calendarContainer.tabIndex = 0
		this._calendarContainer = calendarContainer
	}

	_renderCalendarHeader() {
		const calendarHeader = document.createElement('div')
		calendarHeader.className = 'header'
		this._calendarHeader = calendarHeader
	}

	_renderMonthYearContainer() {
		const monthYearContainer = document.createElement('div')
		monthYearContainer.className = 'month-year-container'
		this._monthYearContainer = monthYearContainer
	}

	_renderPreviousButton() {
		const span = document.createElement('span')
		span.className = 'prev calendar-button-control'
		span.tabIndex = 0
		this._previousButton = span
	}

	_renderDisplayDateLabel() {
		const span = document.createElement('span')
		span.className = 'label'
		span.textContent = format(this., "calendartitle", {
			locale: locale
		})
		this._previousButton = span
	}
	
	_renderNextButton() {
		const span = document.createElement('span')
		span.className = 'next calendar-button-control'
		span.tabIndex = 0
		this._nextButton = span
	}

	render() {
		return 
	}

	rerender(changedAttr?: Array<string>){
    super.rerender()
    // check attribute changed to render related DOM element
	}
	
	getValue() {
		return this._props.date
	}
}

export default Calendar