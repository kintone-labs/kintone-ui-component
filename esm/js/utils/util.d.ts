declare class Elements {
    private elArr;
    constructor(selector: string | HTMLElement);
    on(eventName: string, callbackFunction: EventListener): this;
    each(callbackFunction: (el: HTMLElement) => void): void;
    data(dataKey: number, dataValue: any): string | false | this | null;
    attr(attrKey: string, attrValue: any): string | this | null;
    removeAttr(attrKey: string): this;
    val(value: any): any;
    html(value: any): string | this | null;
    focus(): void;
    remove(): void;
    trigger(eventName: string): void;
    addClass(className: string): this;
    removeClass(class_name: string): this;
    hasClass(class_name: string): boolean;
    append(elements: Elements[] | HTMLElement[] | Elements | HTMLElement): this;
    appendTo(elements: Elements[] | HTMLElement[] | Elements | HTMLElement): this;
    prepend(elements: Elements[] | HTMLElement[] | Elements | HTMLElement): this;
}
declare const elements: (selector: any) => Elements;
declare const helper: {
    elements: (selector: any) => Elements;
};
export { elements };
export default helper;
