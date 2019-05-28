import "../css/DateTime.css";
import React, { useState, useEffect, createRef } from "react";
import {en, ja, zh} from './components/Locale'
import {format} from './components/Locale'
import {parseStringToDate, parseStringToTime} from './components/utils'
import Calendar from './components/Calendar'
import TimePicker from "./components/TimePicker";

type DateTimeConstructorParameters = {
	date: Date 
	onChange?: Function
	locale?: string
	dateFormat?: string
	mode?: string
	timeFormat?: string
}

const DateTime = ({date, onChange=(date: Date)=> {} ,locale = 'ja', dateFormat="MM/dd/YYYY", mode="date", timeFormat="HH:mm"}:DateTimeConstructorParameters) => {
	const [pickerDisplay, setPickerDisplay] = useState("none")
	const [showPickerError, setShowPickerError] = useState(true)
	const [dateError, setDateError] = useState("")
	const [timePickerDisplay, setTimePickerDisplay] = useState("none")
	const [showTimePickerError, setShowTimePickerError] = useState(true)
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

	let localeObj = ja
	if (locale === 'en') {
		localeObj = en
	}
	else if (locale === 'zh') {
		localeObj = zh
	}

	return (
		<div className="date-time-container" ref={wrapperRef}>
			{
				(mode === 'datetime' || mode === 'date') &&
				<div className="date-container">
					<div className="text-input-container" key={`${format(date, dateFormat)}-${dateError}`}>
						<input
							type="text"
							className="text-input"
							onFocus={() => {
								setPickerDisplay("block")
								setShowPickerError(false)
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
											setShowPickerError(true)
										} 
										else if (tempDate instanceof Date && !isNaN(tempDate as any)) {
											let returnDate = new Date(date)
											returnDate.setFullYear(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())
											onChange(returnDate)
											setPickerDisplay("none")
											setShowPickerError(true)
										}
										else if (e.target.value) {
											setInputValue(e.target.value)
											setDateError("Invalid date")
											setPickerDisplay("none")
											setShowPickerError(true)
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
						(dateError && showPickerError) &&
						<div className="label-error">
							<span>{dateError}</span>
						</div>
					}
					<Calendar 
						pickerDisplay={pickerDisplay} 
						date={date} 
						locale={localeObj} 
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
								setShowPickerError(true)
							}
						}
					/>
				</div>
				
			}
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
							setShowTimePickerError(false)
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
										setTimePickerDisplay("none")
										setShowTimePickerError(true)
									}
									else if (e.target.value) {
										setTimeValue(e.target.value)
										setTimeError("Invalid time")
										setTimePickerDisplay("none")
										setShowTimePickerError(true)
									}
									else {
										setTimePickerDisplay("none")
										setShowTimePickerError(true)
									}
								}
							}
						}
						onKeyDown= {
							(e) => {
								if (e.key === 'Tab') {
									setTimePickerDisplay("none")
									setShowTimePickerError(true)
									return
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
					<TimePicker 
						pickerDisplay={timePickerDisplay} 
						locale={localeObj} 
						onTimeClick={
							(timePickerDate: Date) => {
								setTimeError("")
								let tempDate = new Date()
								if (date) tempDate = new Date(date)
								tempDate.setHours(timePickerDate.getHours(), timePickerDate.getMinutes())
								setTimeValue(format(date, timeFormat))
								onChange(tempDate)
								setTimePickerDisplay("none")
								setShowTimePickerError(true)
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
