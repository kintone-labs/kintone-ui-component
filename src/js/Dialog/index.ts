import Control, {ControlProps} from '../Control';
import {elements} from '../utils/util';
import IconButton from '../IconButton';

import '../../css/Dialog.css';

type DialogProps = ControlProps & {
    header?: string | HTMLElement;
    content?: string | HTMLElement;
    footer?: string | HTMLElement;
    showCloseButton?: boolean;
}
  
class Dialog extends Control {
    protected _props: DialogProps = {
        ...this._props,
        ...{
            header: '',
            content: '',
            footer: '',
            showCloseButton: false,
            isVisible: true
        }
    }
    private _headerDivEl: HTMLDivElement
    private _footerDivEl: HTMLDivElement
    private _bodyContentDivEl: HTMLDivElement

    private _closeButton: IconButton
    private _containerEl: HTMLElement

    constructor(params: DialogProps) {
        super();
    
        if (params) {
          this._props = {...this._props, ...params};
        }
         
        this.element = this._createDialogLayout();
        this.rerender(['isVisible']);
    }

    private _createDialogLayout(): HTMLElement {
        const wrapperDiv = document.createElement('div')

        this._headerDivEl = document.createElement('div');
        this._headerDivEl.className = 'kuc-dialog-header';
        this._headerDivEl.append(this._props.header);

        if(this._props.showCloseButton){
            var spanEl = document.createElement('span');
            spanEl.className = 'kuc-dialog-close-button';
            this._closeButton = new IconButton({type: 'close', shape: 'normal'});
            spanEl.appendChild(this._closeButton.render());
            this._closeButton.on('click', () => {
                this.hide();
            });
            this._headerDivEl.append(spanEl);
        }

        this._footerDivEl = document.createElement('div');
        this._footerDivEl.className = 'kuc-dialog-footer';
        this._footerDivEl.append(this._props.footer);

        this._bodyContentDivEl = document.createElement('div');
        this._bodyContentDivEl.className = 'kuc-dialog-body';   
        this._bodyContentDivEl.append(this._props.content);

        var wrapper = document.createElement('div'); 
        wrapper.className = 'kuc-dialog-wrapper';

        this._containerEl = document.createElement('div');
        this._containerEl.className = 'kuc-dialog-container';
    
        wrapper.append(this._headerDivEl, this._bodyContentDivEl, this._footerDivEl);        
        this._containerEl.append(wrapper);
        wrapperDiv.appendChild(this._containerEl);
        return wrapperDiv;
    }


    rerender(changedAttr?: string[]) {
        if (!changedAttr) return;
        
        if (changedAttr.indexOf('header') !== -1) {
            while (this._headerDivEl.childNodes.length > 1 && this._headerDivEl.firstChild) {
                this._headerDivEl.removeChild(this._headerDivEl.firstChild);
            }
           this._headerDivEl.prepend(this._props.header);
        }

        if (changedAttr.indexOf('footer') !== -1) {
            while (this._footerDivEl.firstChild) {
                this._footerDivEl.removeChild(this._footerDivEl.firstChild);
            }
           this._footerDivEl.append(this._props.footer);
        }

        if (changedAttr.indexOf('content') !== -1) {
            while (this._bodyContentDivEl.firstChild) {
                this._bodyContentDivEl.removeChild(this._bodyContentDivEl.firstChild);
            }
           this._bodyContentDivEl.append(this._props.content);
        }

        if (changedAttr.indexOf('isVisible') !== -1) {
            if(!this._props.isVisible){
                this._containerEl.classList.add('hidden')
            } else {
                this._containerEl.classList.remove('hidden')
            }
        }
    }

    setHeader(headerContent: string | HTMLElement): void {
        this._props.header = headerContent;
        this.rerender(['header']);
    }

    getHeader(): string | HTMLElement {
        return this._props.header;
    }

    setFooter(footerContent: string | HTMLElement): void {
        this._props.footer = footerContent;
        this.rerender(['footer']);
    }

    getFooter(): string | HTMLElement {
        return this._props.footer;
    }

    setContent(bodyContent: string | HTMLElement): void {
        this._props.content = bodyContent;
        this.rerender(['content']);
    }

    getContent(): string | HTMLElement {
        return this._props.content;
    }
    
}

export default Dialog;
