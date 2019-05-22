import React from 'react';
import '../vendor/Tabs.css'

type TabsItem = {
    tabName: string
    tabContent: any
    isDisabled: boolean
}

type TabsProps = {
    items: Array<TabsItem>
    value: number
    onClickTabItem: (tabIndex: number) => void
}

const Tabs = ({items, value, onClickTabItem}: TabsProps) => {
    const tabNames = (
        <ul className="kuc-tabs-tab-list">
        {
            items.map((item: TabsItem, tabIndex: number) => {
                let className = "kuc-tabs-container";
                if (value === tabIndex) {
                    className += " kuc-tabs-container-selection";
                }

                if (item.isDisabled) {
                    className += " kuc-tabs-disabled";
                    return (
                        <li className={className} 
                            key={tabIndex}>
                            {item.tabName}
                        </li>
                    );
                } else {
                    return (
                        <li className={className} 
                            key={tabIndex}
                            onClick={() => onClickTabItem(tabIndex)}
                        >
                            {item.tabName}
                        </li>
                    );
                }  
            })
        }
        </ul>
    );
    const tabContents = items.map((item: TabsItem, tabIndex: number) => {
        if (tabIndex !== value) return undefined;
        else {
            return (
                <div className="kuc-tabs-tab-contents" key={tabIndex}>
                    <div>{item.tabContent}</div>
                </div>
            );
        }
    });
    return (
        <div className="kuc-tabs-tabs">
            {tabNames}
            {tabContents}
        </div>
    );
  
}

export default Tabs;