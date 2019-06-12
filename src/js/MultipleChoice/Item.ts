import Control, {ControlProps} from '../Control';

import '../../css/base.css';
import '../../css/Item.css';

type ItemData = {
    value: string
    label: string
    isDisabled?: boolean
}

type ItemProps = ControlProps & {
    value: string
    label: string
    className?: string;
    isDisabled?: boolean 
    isSelected?: boolean;
    onClick?: (item: Item) => void;
}

class Item extends Control {
    protected _props: ItemProps = {
      ...this._props, ...{
        isSelected: false,
        isDisabled: false,
        className: "",
      }
    }

    constructor(params: ItemProps) {
        super()
        if (params) {
          this._props = {...this._props, ...params}
        }
    
        let className = "kuc-list-item";

        if (this._props.isSelected) {
            className += " kuc-list-item-selected";
        }

        if (this._props.isDisabled) {
            className += " kuc-list-item-disable";
        }
       
        this.element = document.createElement('div');
        this.element.className = className;
        const spanIconCheckElement = document.createElement('span');
        spanIconCheckElement.className = 'kuc-icon-check';
        const iElement = document.createElement('i');
        iElement.className = 'fa fa-check';
        iElement.setAttribute('aria-hidden', 'true');
        spanIconCheckElement.appendChild(iElement);
        const spanListItemLabelElement = document.createElement('span');
        spanListItemLabelElement.className = 'kuc-list-item-label'; 
        spanListItemLabelElement.append(this._props.label);
        this.element.appendChild(spanIconCheckElement);
        this.element.appendChild(spanListItemLabelElement);

        this.on('click',(e) => {
            this._props.isSelected = !this._props.isSelected;
            this._props.onClick(this)
            this.rerender(['isSelected'])
        });
        
        this.rerender()
    }
    rerender(changedAttr?: Array<string>){
        super.rerender()
        if (!changedAttr) return;
        let className = "kuc-list-item";
        if (changedAttr.indexOf('isSelected') !== -1) {
            if (this._props.isSelected) {
                className += " kuc-list-item-selected";
            }
        }
        if (changedAttr.indexOf('isDisabled') !== -1) {
            if (this._props.isDisabled) {
                className += " kuc-list-item-disable"
            }
        }
        this.element.className = className
    }

    enable(){
        super.enable();
        this.rerender(['isSelected', 'isDisabled'])
    }

    disable(){
        super.disable();
        this.rerender(['isSelected', 'isDisabled'])
    }

    getValue(){
        return this._props.value;
    }

    select() {
        this._props.isSelected = true
        this.rerender(['isSelected', 'isDisabled'])
    }

    deselect() {
        this._props.isSelected = false
        this.rerender(['isSelected', 'isDisabled'])
    }

}

export default Item;
export {ItemData};