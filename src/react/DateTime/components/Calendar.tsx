import React, { useState, useEffect } from 'react'
import { getWeekDayLabels, getDisplayingDays, isSameMonth, isToday, isSameDate, getMonthLabels, getYearLabels } from './utils'
import {en} from './Locale'
import {format} from './Locale'
import Locale from './localizationData/locale-dto';
import { Dropdown } from '../../index'
import '../../../css/DropdownCalendar.css'

type CalendarProps = {
	date: Date,
	locale?: Locale,
	pickerDisplay?: string,
	hasSelection?: boolean,
	onDateClick?: (date:Date | null, previousDate:Date | null) => void,
	calRef: any
}

let previousDate:Date

const Calendar = ({
	date,
	locale = en,
	pickerDisplay = 'block',
	hasSelection = false,
	onDateClick=(date: Date)=> {},
	calRef
}: CalendarProps) => {
	const today = new Date();
	const weekDayLabels = getWeekDayLabels(locale);
	const [displayDate, setDisplayDate] = useState(date?new Date(date):new Date());
	const [displayMonth, setDisplayMonth] = useState(format(displayDate, 'calendarmonth', { locale: locale }))
	const [displayYear, setDisplayYear] = useState(format(displayDate, 'calendaryear', { locale: locale }))
	const displayingDays = getDisplayingDays(displayDate);
	const scrollToSeletedOptions = (isMonth: boolean) => {
		let styleScroll: any = { block: "center" }
		if (isMonth) {
			document.getElementsByClassName('kuc-list-item-selected')[0].scrollIntoView(styleScroll)
		}
		document.getElementsByClassName('kuc-list-item-selected')[1].scrollIntoView(styleScroll)
	}
	if (!previousDate) {
		previousDate = new Date(date)
	}
	useEffect(()=>{
		if (date) {
			if (!isSameDate(date,previousDate)) {
				setDisplayDate(new Date(date))
				previousDate = new Date(date)
			}
		}
	})

	return (
		<div ref={calRef}
			className="date-picker-container"
			style={{ display: pickerDisplay }}
			tabIndex={-1}
			onBlur={(e)=>{
				let relatedTarget = e.relatedTarget ||
					e['explicitOriginalTarget'] ||
					document.activeElement; // IE11
				if(
					calRef.current !== relatedTarget &&
					!calRef.current.contains(relatedTarget as HTMLElement) &&
					pickerDisplay !== 'none'
				) {
					onDateClick(null, null)
				}
			}}
		>
			<div className="header">
				<div className="month-year-container">
					<span className="prev calendar-button-control" onClick={()=>{
						let newDate = new Date(displayDate)
						newDate.setMonth(newDate.getMonth()-1,1)
						let newDisplayMonth = getMonthLabels(locale)[newDate.getMonth()].label
						setDisplayMonth(newDisplayMonth)
						setDisplayDate(newDate)
						setDisplayYear(newDate.getFullYear().toString())
					}} tabIndex={-1} />
					<div className="kuc-calendar-dropdown-row" tabIndex={-1}>
						<Dropdown items={getMonthLabels(locale)} value={displayMonth}
							onChange={(value) => {
								let newDate = new Date(displayDate)
								newDate.setMonth(locale.monthNames.indexOf(value), 1)
								setDisplayMonth(value)
								setDisplayDate(newDate)
								setDisplayYear(newDate.getFullYear().toString())
								scrollToSeletedOptions(true)
							}}></Dropdown>
						<Dropdown items={getYearLabels(displayYear)} value={displayYear}
							onChange={(value) => {
								let newDate = new Date(displayDate)
								newDate.setFullYear(parseInt(value), displayDate.getMonth(), 1)
								setDisplayYear(value)
								setDisplayDate(newDate)
								setDisplayYear(newDate.getFullYear().toString())
								scrollToSeletedOptions(false)
							}}></Dropdown>
					</div>
					<span className="next calendar-button-control" onClick={() => {
						let newDate = new Date(displayDate)
						newDate.setMonth(newDate.getMonth() + 1, 1)
						let newDisplayMonth = getMonthLabels(locale)[newDate.getMonth()].label
						setDisplayMonth(newDisplayMonth)
						setDisplayDate(newDate)
						setDisplayYear(newDate.getFullYear().toString())
					}} tabIndex={-1} />
				</div>
				<div className="days-container">
					{weekDayLabels.map((label, index) => {
						const notWeekend = index !== 0 && index !== 6;
						return (
							<span
								className={
									notWeekend ? "wday-header" : "wday-header grayed-out"
								}
								key={`wday-header-${index}`}
							>
								{label}
							</span>
						);
					})}
					{displayingDays.map((day, index) => {
						let className = "day";

						className += displayDate && isSameMonth(day, displayDate) ? "" : " grayed-out";
						className += isToday(day) ? " today" : "";
						className += date && isSameDate(day, date) && hasSelection ? " selected" : "";
						return (
							<span className={`${className} calendar-button`} key={`day-${index}`} onClick={()=>{

								let returnDate = new Date(date)
								returnDate.setFullYear(day.getFullYear(), day.getMonth(), day.getDate())

								onDateClick(returnDate, null)
								setDisplayDate(new Date(day))
							}}
								tabIndex={0} >
								{format(day, "d")}
							</span>
						);
					})}
				</div>
				<div className="quick-selections-container">
					<span className="today calendar-button-control" onClick={()=>{setDisplayDate(new Date());onDateClick(today, null)}}>{locale.today}</span>
					<span className="none calendar-button-control" onClick={()=>{onDateClick(null, previousDate);}} tabIndex={-1}>{locale.none}</span>
				</div>
			</div>
		</div>
	);
}

export default Calendar