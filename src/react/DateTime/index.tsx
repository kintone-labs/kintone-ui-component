import "../css/DateTime.css";
import React, { useState, useEffect, createRef } from "react";
import {en} from './components/Locale'
import {format} from './components/Locale'
import {parseStringToDate, parseStringToTime} from './components/utils'
import Locale from './components/localizationData/locale-dto';
import Calendar from './components/Calendar'
import TimePicker from "./components/TimePicker";

type DateTimeConstructorParameters = {
	date: Date 
	onChange?: Function
	locale?: Locale
	dateFormat?: string
	mode?: string
	timeFormat?: string
}

const DateTime = ({date, onChange=(date: Date)=> {} ,locale = en, dateFormat="MM/dd/YYYY", mode="date", timeFormat="HH:mm"}:DateTimeConstructorParameters) => {
	const [pickerDisplay, setPickerDisplay] = useState("none")
	const [dateError, setDateError] = useState("")
	const [timePickerDisplay, setTimePickerDisplay] = useState("none")
	const [timeError, setTimeError] = useState("")
	const [inputValue, setInputValue] = useState("")
	const [timeValue, setTimeValue] = useState("")
	const wrapperRef: React.RefObject<HTMLDivElement> = createRef<HTMLDivElement>();

	useEffect(()=>{
		document.addEventListener('mousedown', handleClickOutside, true);
		return(()=>{
			document.removeEventListener('mousedown', handleClickOutside, true);
		})
	})

	const handleClickOutside = (event: any) => {
		if (wrapperRef && wrapperRef.current) {
			let node:any = wrapperRef.current;
			if (node.contains(event.target) && (pickerDisplay !== 'none' || timePickerDisplay !== 'none' )) {
				//setPickerDisplay('none')
				//setTimePickerDisplay('none')
			}
		}
	}

	return (
		<div className="date-time-container" ref={wrapperRef}>
			<div className="date-container">
				<div className="text-input-container" key={`${format(date, dateFormat)}-${dateError}`}>
					<input
						type="text"
						className="text-input"
						onFocus={() => {
							setPickerDisplay("block")
							setTimePickerDisplay("none")
						}}
						defaultValue={date && !dateError ? format(date, dateFormat) : inputValue}
						onBlur={
							(e)=>{
								if (e.relatedTarget == null 
									|| (
										!e.relatedTarget['classList'].contains('calendar-button') && 
										!e.relatedTarget['classList'].contains('calendar-button-control') &&
										!e.relatedTarget['classList'].contains('date-picker-container')
										)
								) {
									setDateError("")
									let tempDate = parseStringToDate(e.target.value)
									if(!e.target.value) {
										onChange(null)
										setPickerDisplay("none")
									} 
									else if (tempDate instanceof Date && !isNaN(tempDate as any)) {
										let returnDate = new Date(date)
										returnDate.setFullYear(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())
										onChange(returnDate)
										setPickerDisplay("none")
									}
									else if (e.target.value) {
										setInputValue(e.target.value)
										setDateError("Invalid date")
										setPickerDisplay("none")
									}
								}
							}
						}
						onKeyDown= {
							(e) => {
								if (e.key === 'Tab') {
									setPickerDisplay("none")
								}
							}
						}
					/>
				</div>
				{
					dateError && 
					<div className="label-error">
						<span>{dateError}</span>
					</div>
				}
				<Calendar 
					pickerDisplay={pickerDisplay} 
					date={date} 
					locale={locale} 
					onDateClick={
						(calendarDate: Date) => {
							setDateError("")
							if (calendarDate) {
								let tempDate = new Date()
								if (date) {
									tempDate = new Date(date)
								}
								tempDate.setFullYear(calendarDate.getFullYear(), calendarDate.getMonth(), calendarDate.getDate())
								onChange(tempDate)
							}
							else {
								onChange(null)
								setInputValue("")
							}
							setPickerDisplay("none")
						}
					}
				/>
			</div>
			{
				(mode==='datetime' || mode==='time') && 
				<div className="time-container">
					<input
						type="text"
						key={`${format(date, timeFormat)}-${timeError}`}
						className="text-input"
						onFocus={() => {
							setTimePickerDisplay("flex")
							setPickerDisplay("none")
						}}
						defaultValue={date && !timeError ? format(date, timeFormat) : timeValue}
						onBlur={
							(e)=>{
								if (e.relatedTarget === null || !e.relatedTarget['classList'].contains('kuc-time-list-item')) {
									setTimeError("")
									let tempDate = parseStringToTime(e.target.value)
									
									if (tempDate instanceof Date && !isNaN(tempDate as any)) {
										let returnDate = new Date(date)
										returnDate.setHours(tempDate.getHours(), tempDate.getMinutes(), tempDate.getSeconds())
										onChange(returnDate)
									}
									else if (e.target.value) {
										setTimeValue(e.target.value)
										setTimeError("Invalid time")
										setTimePickerDisplay("none")
									}
								}
							}
						}
						onKeyDown= {
							(e) => {
								if (e.key === 'Tab') {
									setTimePickerDisplay("none")
									return
								}
							}
						}
					/>
					{
						timeError && 
						<div className="label-error">
							<span>{timeError}</span>
						</div>
					}
					<TimePicker 
						pickerDisplay={timePickerDisplay} 
						locale={locale} 
						onTimeClick={
							(timePickerDate: Date) => {
								setTimeError("")
								let tempDate = new Date()
								if (date) tempDate = new Date(date)
								tempDate.setHours(timePickerDate.getHours(), timePickerDate.getMinutes())
								setTimeValue(format(date, timeFormat))
								onChange(tempDate)
								setTimePickerDisplay("none")
							}
						}
					/>
				</div>	
			}
		</div>
	);
}

export default DateTime;
export {
	DateTimeConstructorParameters,
	Calendar
}
export * from './components/Locale'
