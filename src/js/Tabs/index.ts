import Control, {ControlProps} from "../Control";
import TabName from "./TabName";
import Message from '../../constant/Message'

import '../../css/Tabs.css'

type Tab = {
  tabName: string
  tabContent?: string | HTMLElement
  isDisabled?: boolean
}

type TabsProps = ControlProps & {
  items?: Array<Tab>,
  value?: number
}

class Tabs extends Control {
  protected _props: TabsProps = {
    ...this._props, ...{
      items: [],
      value: 0,
      isDisabled: false,
      isVisible: true
    }
  }
  private tabNamesElement: HTMLUListElement
  private tabNames: Array<TabName> = []
  private tabContentElement: HTMLDivElement 

  constructor(params?: TabsProps) {
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

    this.element = document.createElement('div')
    this.element.className = 'kuc-tabs-tabs'
    
    this._renderTabNames()

    this._renderTabContent()

    this.rerender()
  }

  private _validator(): string | undefined {
    let err
    if (this._props.items) {
      this._props.items.forEach((item: Tab, index: number) => {
        if (!item.tabName) {
          err = Message.tabs.MISSING_TAB_NAME.replace('{{index}}', index.toString())
        }
      })
    }
    if (this._props.value) {
      if (!this._props.items || this._props.value > this._props.items.length - 1 || this._props.value < 0) {
        err = Message.common.INVALID_ARGUMENT
      }
    }
    return err
  }

  private _renderTabNames() {
    this.tabNamesElement = document.createElement('ul')
    this.tabNamesElement.className = 'kuc-tabs-tab-list'
    this._props.items && this._props.items.forEach((item: Tab, index:number) => {
      let tabComponent = new TabName({
        tabName: item.tabName,
        tabIndex: index,
        onClickTabItem: (tabIndex: number) => {
          this.setValue(tabIndex)
        },
        isActive: index === this._props.value,
        isDisabled: item.isDisabled
      })

      this.tabNames.push(tabComponent)
      this.tabNamesElement.appendChild(tabComponent.render())
    })
    this.element.appendChild(this.tabNamesElement)
  }

  private _renderTabContent() {
    let tabContentWrapper = document.createElement('div')
    tabContentWrapper.className = 'kuc-tabs-tab-contents'
    this.element.appendChild(tabContentWrapper)

    this.tabContentElement = document.createElement('div')
    if(this._props.items && this._props.value){
      this.tabContentElement.append(this._props.items[this._props.value].tabContent || '');
    }
    tabContentWrapper.appendChild(this.tabContentElement)
  }

  rerender(changedAttr?: Array<string>){
    super.rerender()
    if (!changedAttr || !this._props.items) return;
    if (changedAttr.indexOf('value') !== -1) {
      this.tabNames.forEach((tabNames: TabName, index: number) => {
        if (index === this._props.value) {
          tabNames.select()
        }
        else {
          tabNames.deselect()
        }
      })
      while (this.tabContentElement.firstChild) {
        this.tabContentElement.removeChild(this.tabContentElement.firstChild);
      }
      if(this._props.value){
        this.tabContentElement.append(this._props.items[this._props.value].tabContent || '')
      }
    }

    if (changedAttr.indexOf('addItems') !== -1) {
      let tabComponent = new TabName({
        tabName: this._props.items[this._props.items.length - 1].tabName,
        tabIndex: this._props.items.length - 1,
        onClickTabItem: (tabIndex: number) => {
          this.setValue(tabIndex)
        },
        isActive: this._props.items.length - 1 === this._props.value
      })

      this.tabNames.push(tabComponent)
      this.tabNamesElement.appendChild(tabComponent.render())
    }

    if (changedAttr.indexOf('removeItems') !== -1) {
      while (this.tabNamesElement.firstChild) {
        this.tabNamesElement.removeChild(this.tabNamesElement.firstChild);
      }
      this._props.items.forEach((item: Tab, index:number) => {
        let tabComponent = new TabName({
          tabName: item.tabName,
          tabIndex: index,
          onClickTabItem: (tabIndex: number) => {
            this.setValue(tabIndex)
          },
          isActive: index === this._props.value
        })

        this.tabNames.push(tabComponent)
        this.tabNamesElement.append(tabComponent.render())
      })
      while (this.tabContentElement.firstChild) {
        this.tabContentElement.removeChild(this.tabContentElement.firstChild);
      }
      if(this._props.value){
        this.tabContentElement.append(this._props.items[this._props.value].tabContent || '')
      }
    }
  }

  setValue(value: number):void {
    if (!value && value !== 0) {
      throw new Error(Message.common.INVALID_ARGUMENT)
    }
    this._props.value = value
    if (this._validator()) {
      throw new Error(this._validator())
    }
    this.rerender(['value'])
  }

  getValue(): number {
    
    return this._props.value ? this._props.value : 0
  }

  addItem(item: Tab) {
    if (!item) {
      throw Message.common.INVALID_ARGUMENT
    }
    if (!item.tabName) {
      throw Message.tabs.MISSING_NEW_ITEM_TABNAME
    }
   this._props.items && this._props.items.push(item)
    if (this._validator()) {
      throw new Error(this._validator())
    }
    this.rerender(['addItems'])
  }

  removeItem(index: number) {
    if (typeof index !== 'number') {
      throw new Error(Message.common.INVALID_ARGUMENT)
    }
    if (index >= 0 && this._props.items && index < this._props.items.length) {
      this._props.items.splice(index, 1)
      this.rerender(['removeItems'])
    }
    else {
      throw new Error(Message.common.INVALID_ARGUMENT)
    }
  }

  getItems(): Array<Tab> {
    return this._props.items ? this._props.items :[]
  }

  disableItem(tabName: string) {
    if (!tabName) {
      throw Message.common.INVALID_ARGUMENT
    }
   this._props.items && this._props.items.forEach((item: Tab, index: number) => {
      if (item.tabName === tabName) {
        this.tabNames[index].disable()
      }
    })
  }

  enableItem(tabName: string) {
    if (!tabName) {
      throw Message.common.INVALID_ARGUMENT
    }
    this._props.items && this._props.items.forEach((item: Tab, index: number) => {
      if (item.tabName === tabName) {
        this.tabNames[index].enable()
      }
    })
  }

}

export {TabsProps}
export default Tabs