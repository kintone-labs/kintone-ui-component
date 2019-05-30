import React, { useState, useEffect } from 'react'
import {getWeekDayLabels, getDisplayingDays, isSameMonth, isToday, isSameDate} from './utils'
import {en} from './Locale'
import {format} from './Locale'
import Locale from './localizationData/locale-dto';

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
	const [displayDate, setDisplayDate] = useState(new Date(date));
	const displayingDays = getDisplayingDays(displayDate);
	let initialDate = date ? new Date(date) : null;

	if (!previousDate) {
		previousDate = new Date(date)
	}
	useEffect(()=>{
		if (date) {
			if (!isSameDate(date,previousDate)) {
				console.log()
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
						setDisplayDate(newDate)
					}} tabIndex={-1} />
					<span className="label">
						{format(displayDate, "calendartitle", {
							locale: locale
						})}
					</span>
					<span className="next calendar-button-control" onClick={()=>{
						let newDate = new Date(displayDate)
						newDate.setMonth(newDate.getMonth()+1,1)
						setDisplayDate(newDate)
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
					<span className="today calendar-button" onClick={()=>{setDisplayDate(new Date());onDateClick(today, null)}}>{locale.today}</span>
					<span className="none calendar-button" onClick={()=>{onDateClick(null, previousDate);}} tabIndex={-1}>{locale.none}</span>
				</div>
			</div>
		</div>
	);
}

export default Calendar