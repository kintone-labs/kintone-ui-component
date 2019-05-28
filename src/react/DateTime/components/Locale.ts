import en from './localizationData/en'
import zh from './localizationData/zh'
import ja from './localizationData/ja'

const seperators = ["/", "-", " ", ":"]

const getSeperator = (dateFormatString: string) => {
    let seperator = ""
    seperators.forEach((char)=>{
        if (dateFormatString.indexOf(char) !== -1) {
            seperator = char
        }
    })
    return seperator
}

const getDateData = (dateObj: any, dateCode: string, locale: any) => {
    switch (dateCode) {
        case 'E': 
            return locale.weekDayShort[dateObj.day]
        case 'EE':
            return locale.weekDayMedium[dateObj.day]
        case 'EEEE':
            return locale.weekDay[dateObj.day]
        case 'd':
            return `${dateObj.date}`
        case 'dd':
            if (dateObj.date < 10) return `0${dateObj.date}`
            return `${dateObj.date}`
        case 'MM':
            if (dateObj.month+1 < 10) return `0${dateObj.month+1}`
            return `${dateObj.month+1}`
        case 'MMM':
            return locale.monthNamesShort[dateObj.month]
        case 'MMMM':
            return locale.monthNames[dateObj.month]
        case 'YYYY':
            return `${dateObj.year}`
        case 'HH':
            if (dateObj.hour < 10) return `0${dateObj.hour}`
            return `${dateObj.hour}`
        case 'H':
            return `${dateObj.hour}`
        case 'mm':
            if (dateObj.minute < 10) return `0${dateObj.minute}`
            return `${dateObj.minute}`
        case 'm':
            return `${dateObj.minute}`
        case 'calendartitle':
            if (locale.name === 'jp' || locale.name === 'cn') return `${dateObj.year}年${dateObj.month+1}月`
            return `${locale.monthNames[dateObj.month]} ${dateObj.year}`
        default:
            break;
    }
}

const format = (dirtyDate: Date, dateFormat: string, option: any = {}): string => {
    try {
        let dateObj = {
            millisecond: dirtyDate.getMilliseconds(),
            second: dirtyDate.getSeconds(),
            minute: dirtyDate.getMinutes(),
            hour: dirtyDate.getHours(),
            date: dirtyDate.getDate(),
            day: dirtyDate.getDay(),
            month: dirtyDate.getMonth(),
            year: dirtyDate.getFullYear()
        }
        if (dateFormat === 'calendartitle') {
            return getDateData(dateObj, 'calendartitle', option.locale)
        }
        let seperator = getSeperator(dateFormat)
        let formattedDate = dateFormat.split(seperator)
        formattedDate = formattedDate.map((item)=>{
            return getDateData(dateObj, item, option.locale)
        })
        return formattedDate.join(seperator)
    } catch (error) {
        return dateFormat
    }
}

const Locale: any = {
    en: en,
    zh: zh,
    ja: ja,
    format: format
}

export default Locale
export {
    en,
    zh,
    ja,
    format
}