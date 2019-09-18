import Control, {ControlProps} from '../Control'
import Item from '../MultipleChoice/Item'
import {ItemData} from '../MultipleChoice/Item'
import AbstractMultiSelection from '../utils/AbstractMultiSelection'
import Message from '../../constant/Message'

import '../../css/MultipleChoice.css'

type MultipleChoiceProps = ControlProps & {
    items?: Array<ItemData>
    value?: Array<string>
    onChange: (value: Array<string> | undefined) => void
}

class MultipleChoice extends Control {
    protected _props: MultipleChoiceProps = {
      ...this._props, ...{
        items: [],
        value: [],
        isDisabled: false,
        isVisible: true
      }
    }

    private itemList: Array<Item> = []

    constructor(params: MultipleChoiceProps) {
        super()
        if(typeof params.isDisabled !== 'boolean') {
          delete params.isDisabled
        }
        if (params) {
          this._props = {...this._props, ...params}
        }
    
        if (this._validator(this._props.items, this._props.value)) {
          throw new Error(this._validator(this._props.items, this._props.value))
        }

        this._renderItemList()

        this.rerender(['isDisabled', 'isVisible'])
    }

    private _renderItemList() {
        this.element = document.createElement('div')
        this.element.className = 'kuc-multiple-list kuc-list-outer'

        if(this._props.items) {
            this._props.items.forEach((item: ItemData, index:number) => {
                let itemComponent = new Item({
                    ...item,
                    isSelected: this._props.value ? this._props.value.some(value => value === item.value) : false,
                    onClick: this._handleItemChange.bind(this)
                })
                
                this.itemList.push(itemComponent)
                this.element.appendChild(itemComponent.render())
            })
        }
    }
    
    private _validator(items?: ItemData[], value?: string[]): string | undefined {
        let err
        if (items && AbstractMultiSelection._hasDuplicatedItems(items)) {
            err = Message.common.SELECTTION_DUPLICATE_VALUE
        }
        
        if (items && value && 
            !AbstractMultiSelection._hasValidValue(items, value)
        ) {
            err = Message.common.INVALID_ARGUMENT
        }
        return err
    }

    setValue(value: Array<string>):void {
        if (!value && Array.isArray(value)) {
            throw new Error(Message.common.INVALID_ARGUMENT)
        }
        if (this._validator(this._props.items, value)) {
            throw new Error(this._validator(this._props.items, value))
        }
        this._props.value = value;
        this.rerender(['value'])
    }

    getValue(): Array<string> | undefined {
        return this._props.value
    }

    addItem(item: ItemData) {
        if (!item) {
            throw Message.common.INVALID_ARGUMENT
        }
        if(!this._props.items) {
            this._props.items = []
        }
        const itemsToCheck = this._props.items.concat(item);
        if (this._validator(itemsToCheck)) {
            throw new Error(this._validator(itemsToCheck))
        }
        this._props.items = itemsToCheck;
        this.rerender(['addItems'])
    }

    removeItem(index: number) {
        if (typeof index !== 'number') {
            throw new Error(Message.common.INVALID_ARGUMENT)
        }

        if (this._props.items && index >= 0 && index < this._props.items.length) {
            const removeItem = this._props.items.splice(index, 1)
            this.itemList.splice(index, 1)
            this.element.childNodes[index].remove()
            const removeItemValue = removeItem[0].value
            if(this._props.value) {
                const selectedRemoveIndex = this._props.value.indexOf(removeItemValue)
                if(selectedRemoveIndex > -1) {
                    this._props.value.splice(selectedRemoveIndex, 1)
                }
            }
        }
        else {
            throw new Error(Message.common.INVALID_ARGUMENT)
        }
    }

    getItem(index: number): ItemData {
        if (typeof index !== 'number') {
            throw new Error(Message.common.INVALID_ARGUMENT)
        }

        if (this._props.items && index >= 0 && index < this._props.items.length) {
            return this._props.items[index]
        } else {
            throw new Error(Message.common.INVALID_ARGUMENT)
        }
    }

    setItems(items: Array<ItemData>) {
        if (!items || !Array.isArray(items)) {
            throw new Error(Message.common.INVALID_ARGUMENT)
        }
        // It isn't need to check hasValidValue
        if (this._validator(items)) {
            throw new Error(this._validator(items))
        }
        this._props.items = items
        this.itemList = []
        this._props.value = []
        this._renderItemList()
        this.rerender(['isDisabled'])
    }

    getItems(): Array<ItemData> | undefined{
        return this._props.items
    }

    disableItem(value: string) {
        if (!value) {
            throw Message.common.INVALID_ARGUMENT
        }
        if(this._props.items) {
            this._props.items.forEach((item: ItemData, index: number) => {
                if (item.value === value) {
                    item.isDisabled = true;
                    this.itemList[index].disable()
                }
            })
        }
    }

    enableItem(value: string) {
        if (!value) {
            throw Message.common.INVALID_ARGUMENT
        }
        if(this._props.items) {
            this._props.items.forEach((item: ItemData, index: number) => {
                if (item.value === value) {
                    item.isDisabled = false;
                    this.itemList[index].enable()
                }
            })
        }
    }

    rerender(changedAttr?: Array<string>){
        if (!changedAttr) return;
        if (changedAttr.indexOf('value') !== -1) {
            this.itemList.forEach((item: Item, index: number) => {
                if(this._props.value) {
                    const isInclude = this._props.value.includes(item.getValue())
                    if (isInclude) {
                        item.select()
                    }
                    else {
                        item.deselect()
                    }
                }
            })
        }

        if (changedAttr.indexOf('addItems') !== -1 && this._props.items) {
            let selected = false;
            if(this._props.value && this._props.value.indexOf(this._props.items[this._props.items.length - 1].value)) {
                selected = true
            }
            let itemComponent = new Item({
                ...this._props.items[this._props.items.length - 1],
                isSelected: selected,
                onClick: this._handleItemChange.bind(this)
            })
            this.itemList.push(itemComponent)
            this.element.appendChild(itemComponent.render())
        }

        if (changedAttr.indexOf('isDisabled') !== -1) {
            if (this._props.isDisabled) {
                this.itemList.forEach((item: Item, index: number) => {
                    if(this._props.items && !this._props.items[index].isDisabled){
                        item.disable()
                    }
                })
            } else {
                this.itemList.forEach((item: Item, index: number) => {
                    if(this._props.items && !this._props.items[index].isDisabled){
                        item.enable()
                    }
                })
            }
        }
        
        if (changedAttr.indexOf('isVisible') !== -1) {
            if (!this._props.isVisible) {
                this.element.style.display = 'none';
              } else {
                this.element.style.display = '';
            }
        }
    }
    
    private _handleItemChange(itemComponent: Item){
        const selectedValue = itemComponent.getValue()
        if(this._props.value) {
            const isInclude = this._props.value.includes(selectedValue)
            if(isInclude) {
                const selectedIndex = this._props.value.indexOf(selectedValue)
                this._props.value.splice(selectedIndex, 1)
            } else {
                this._props.value.push(selectedValue)
            }
            
            if(typeof this._props.onChange == 'function' ){
                this._props.onChange(this.getValue())
            }
        }
    }

    on(eventName: string, callback: (params?: any) => void) {
        if(eventName == "change"){
            this._props.onChange = callback
            return;
        }
        super.on(eventName, callback);
    }
}

export default MultipleChoice
  