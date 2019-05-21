import React, { useState, useEffect } from 'react'
import {getWeekDayLabels, getDisplayingDays, isSameMonth, isToday, isSameDate} from './utils'
import {en} from './Locale'
import {format} from './Locale'
import Locale from './localizationData/locale-dto';

type CalendarProps = {
	date: Date,
	locale?: Locale,
	pickerDisplay?: string,
	onDateClick?: (date:Date | null) => void
}

let previousDate:Date

const Calendar = ({
	date,
	locale = en, 
	pickerDisplay = 'block',
	onDateClick=(date: Date)=> {},
}: CalendarProps) => {
	const today = new Date();
	const weekDayLabels = getWeekDayLabels(locale);
	const [displayDate, setDisplayDate] = useState(new Date(date));
	const displayingDays = getDisplayingDays(displayDate);
	if (!date) {
		date = new Date()
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
		<div
			className="date-picker-container"
			style={{ display: pickerDisplay }}
		>
			<div className="header">
				<div className="month-year-container">
					<button className="prev calendar-button-control" onClick={()=>{
						let newDate = new Date(displayDate)
						newDate.setMonth(newDate.getMonth()-1,1)
						setDisplayDate(newDate)
					}} />
					<span className="label">
						{format(displayDate, "calendartitle", {
							locale: locale
						})}
					</span>
					<button className="next calendar-button-control" onClick={()=>{
						let newDate = new Date(displayDate)
						newDate.setMonth(newDate.getMonth()+1,1)
						setDisplayDate(newDate)
					}} />
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

					className += isSameMonth(day, displayDate) ? "" : " grayed-out";
					className += isToday(day) ? " today" : "";
					className += isSameDate(day, date) ? " selected" : "";
					return (
						<button className={`${className} calendar-button`} key={`day-${index}`} onClick={()=>{
							
							let returnDate = new Date(date)
							returnDate.setFullYear(day.getFullYear(), day.getMonth(), day.getDate())
							
							onDateClick(returnDate)
							setDisplayDate(new Date(day))
						}}
						>
							{format(day, "d")}
						</button>
					);
				})}
				</div>
				<div className="quick-selections-container">
					<button className="today calendar-button" onClick={()=>{setDisplayDate(new Date());onDateClick(today)}}>{locale.today}</button>
					<button className="none calendar-button" onClick={()=>{onDateClick(null)}}>{locale.none}</button>
				</div>
			</div>
		</div>
	);
}

export default Calendar