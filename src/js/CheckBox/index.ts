import Control, {ControlProps} from '../Control'
import Item, {ItemData} from '../CheckBox/Item'
import AbstractMultiSelection from '../utils/AbstractMultiSelection'
import Message from '../../constant/Message'
import '../../css/CheckBox.css'

type CheckboxProps = ControlProps & {
    items?: Array<ItemData> 
    value?: Array<string>
    onChange?: (value?: Array<string>) => void
}

class CheckBox extends Control {
    protected _props: CheckboxProps = {
      ...this._props, ...{
        items: [],
        value: [],
        isDisabled: false,
        isVisible: true,
        
      }
    }

    private itemList: Array<Item> = []

    constructor(params?: CheckboxProps) {
        super()
        if(params && typeof params.isDisabled !== 'boolean') {
          delete params.isDisabled
        }
        if (params) {
          this._props = {...this._props, ...params}
        }
        
        if (this._validator()) {
          throw new Error(this._validator())
        }

        this._renderItemList()

        this.rerender(['isDisabled', 'isVisible'])
    }

    private _renderItemList() {
        this.element = document.createElement('div')
        this.element.className = 'kuc-input-checkbox'

        if(this._props.items) {
            this._props.items.forEach((item: ItemData, index:number) => {
                let itemComponent = new Item({
                    ...item,
                    isSelected: this._props.value ? this._props.value.some(value => value === item.value) : false,
                    onChange: this._handleItemChange.bind(this)
                })
                this.itemList.push(itemComponent)
                this.element.appendChild(itemComponent.render())
            })
        }
    }
    
    private _validator(): string | undefined {
        let err
        if (AbstractMultiSelection._hasDuplicatedItems(this._props.items)) {
            err = Message.common.SELECTTION_DUPLICATE_VALUE
        }
        
        if (this._props.items && this._props.value && 
            !AbstractMultiSelection._hasValidValue(this._props.items, this._props.value)
        ) {
            err = Message.common.INVALID_ARGUMENT
        }
        return err
    }

    setValue(value: Array<string>):void {
        if (!value && Array.isArray(value)) {
            throw new Error(Message.common.INVALID_ARGUMENT)
        }
        
        if (this._validator()) {
            throw new Error(this._validator())
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
        this._props.items.push(item)
        if (this._validator()) {
            throw new Error(this._validator())
        }
        this.rerender(['addItems'])
    }

    removeItem(index: number) {
        if (typeof index !== 'number') {
            throw new Error(Message.common.INVALID_ARGUMENT)
        }
        if(this._props.items && this._props.value) {
            if (index >= 0 && index < this._props.items.length) {
                const removeItem = this._props.items.splice(index, 1)
                this.itemList.splice(index, 1)
                this.element.childNodes[index].remove()
                let removeItemValue =removeItem[0].value ? removeItem[0].value: "";
                const selectedRemoveIndex = this._props.value.indexOf(removeItemValue)
                if(selectedRemoveIndex > -1) {
                    this._props.value.splice(selectedRemoveIndex, 1)
                }
            }
            else {
                throw new Error(Message.common.INVALID_ARGUMENT)
            }
        }
    }

    getItem(index: number): ItemData | undefined {
        if (typeof index !== 'number') {
            throw new Error(Message.common.INVALID_ARGUMENT)
        }

        if(this._props.items) {
            if (index >= 0 && index < this._props.items.length) {
                return this._props.items[index]
            } else {
                throw new Error(Message.common.INVALID_ARGUMENT)
            }
        }
        return undefined
    }

    getItems(): Array<ItemData> | undefined {
        return this._props.items
    }

    disableItem(value: string) {
        if (!value) {
            throw Message.common.INVALID_ARGUMENT
        }
        if(this._props.items) {
            this._props.items.forEach((item: ItemData, index: number) => {
                if (item.value === value) {
                    item.isDisabled = true
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
                    item.isDisabled = false
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
                onChange: this._handleItemChange.bind(this)
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

export default CheckBox
