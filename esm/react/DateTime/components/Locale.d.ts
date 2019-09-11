import en from './localizationData/en';
import zh from './localizationData/zh';
import ja from './localizationData/ja';
declare const getSeperator: (dateFormatString: string) => string;
declare const format: (dirtyDate: Date, dateFormat: string, option?: any) => string;
declare const availableLocales = "ja, en, zh";
declare const Locale: any;
export default Locale;
export { en, zh, ja, format, getSeperator, availableLocales };
