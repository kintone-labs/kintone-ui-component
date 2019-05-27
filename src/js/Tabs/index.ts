import Control, {ControlProps} from "../Control";
import TabName from "./TabName";

type Tab = {
    tabName: string
    tabContent?: string | HTMLElement
    isDisabled?: boolean
}

type TabsProps = ControlProps & {
    items: Array<Tab>,
    value: number
}

class Tabs extends Control {
    private tabNamesElement: HTMLUListElement
    private tabNames: Array<TabName> = []
    private tabContentElement: HTMLDivElement 
    private items: Array<Tab>
    private value: number

    constructor({
        items = [],
        value = 0,
        isDisabled = false,
        isVisible = true
    }: TabsProps = {
        items: [] as Tab[],
        value: 0,
        isDisabled: false,
        isVisible: true
    }) {
        super()

        this.items = items
        this.value = value
        this.isDisabled = isDisabled
        this.isVisible = isVisible

        this.element = document.createElement('div')
        this.element.className = 'kuc-tabs-tabs'
        this.tabNamesElement = document.createElement('ul')
        this.tabNamesElement.className = 'kuc-tabs-tab-list'

        this.items.forEach((item: Tab, index:number) => {
            let tabComponent = new TabName({
                tabName: item.tabName,
                tabIndex: index,
                onClickTabItem: (tabIndex: number) => {
                    this.setValue(tabIndex)
                },
                isActive: index === this.value
            })

            this.tabNames.push(tabComponent)
            this.tabNamesElement.appendChild(tabComponent.render())
        })
        this.element.appendChild(this.tabNamesElement)

        let tabContentWrapper = document.createElement('div')
        tabContentWrapper.className = 'kuc-tabs-tab-contents'
        this.element.appendChild(tabContentWrapper)

        this.tabContentElement = document.createElement('div')
        this.tabContentElement.append(this.items[this.value].tabContent || '')
        tabContentWrapper.appendChild(this.tabContentElement)

        this.rerender()
    }

    rerender(changedAttr?: Array<string>){
        super.rerender()
        if (!changedAttr) return;
        if (changedAttr.indexOf('value') !== -1) {
            this.tabNames.forEach((tabNames: TabName, index: number) => {
                if (index === this.value) {
                    tabNames.select()
                }
                else {
                    tabNames.deselect()
                }
            })
            this.tabContentElement.innerHTML = ''
            this.tabContentElement.append(this.items[this.value].tabContent || '')
        }

        if (changedAttr.indexOf('addItems') !== -1) {
            let tabComponent = new TabName({
                tabName: this.items[this.items.length - 1].tabName,
                tabIndex: this.items.length - 1,
                onClickTabItem: (tabIndex: number) => {
                    this.setValue(tabIndex)
                },
                isActive: this.items.length - 1 === this.value
            })

            this.tabNames.push(tabComponent)
            this.tabNamesElement.appendChild(tabComponent.render())
        }

        if (changedAttr.indexOf('removeItems') !== -1) {
            this.tabNamesElement.innerHTML = ''
            this.items.forEach((item: Tab, index:number) => {
                let tabComponent = new TabName({
                    tabName: item.tabName,
                    tabIndex: index,
                    onClickTabItem: (tabIndex: number) => {
                        this.setValue(tabIndex)
                    },
                    isActive: index === this.value
                })
    
                this.tabNames.push(tabComponent)
                this.tabNamesElement.appendChild(tabComponent.render())
            })
            this.tabContentElement.innerHTML = ''
            this.tabContentElement.append(this.items[this.value].tabContent || '')
        }
    }

    setValue(value: number):void {
        this.value = value
        this.rerender(['value'])
    }

    getValue(): number {
        return this.value
    }

    addItem(item: Tab) {
        this.items.push(item)
        this.rerender(['addItems'])
    }

    removeItem(index: number) {
        this.items.splice(index, 1)
        this.rerender(['removeItems'])
    }

    getItems(): Array<Tab> {
        return this.items
    }

    disableItem(tabName: string) {
        this.items.forEach((item: Tab, index: number) => {
            if (item.tabName === tabName) {
                this.tabNames[index].disable()
            }
        })
    }
}

export {TabsProps}
export default Tabs