import React from 'react';
import '../css/font.css'
import '../../css/Tabs.css'
import Message from '../../constant/Message'

type TabsItem = {
  tabName: string;
  tabContent: any;
  isDisabled: boolean;
}

type TabsProps = {
  items: TabsItem[];
  value: number;
  onClickTabItem: (tabIndex: number) => void;
}

const Tabs = ({items, value, onClickTabItem}: TabsProps) => {
  if (value) {
    if (typeof value !== 'number') {
      throw new Error(Message.common.INVALID_ARGUMENT)
    }
    if (!items || value > items.length - 1 || value < 0) {
      throw new Error(Message.common.INVALID_ARGUMENT)
    }
  }
    const tabNames = (
        <ul className="kuc-tabs-tab-list">
        {
          items.map((item: TabsItem, tabIndex: number) => {
            if (!item.tabName) {
              throw new Error(Message.tabs.MISSING_TAB_NAME.replace('{{index}}', tabIndex.toString()))
            }
            let className = "kuc-tabs-container";
            if (value === tabIndex) {
              className += " kuc-tabs-container-selection";
            }

            if (item.isDisabled) {
              className += ' kuc-tabs-disabled';
              return (
                <li
                  className={className}
                  key={tabIndex}
                >
                  {item.tabName}
                </li>
              );
            }
            return (
              <li
                className={className}
                key={tabIndex}
                onClick={() => onClickTabItem(tabIndex)}
              >
                {item.tabName}
              </li>
            );
          })
        }
    </ul>
  );
  const tabContents = items.map((item: TabsItem, tabIndex: number) => {
    if (tabIndex !== value) return undefined;

    return (
      <div className="kuc-tabs-tab-contents" key={tabIndex}>
        <div>{item.tabContent}</div>
      </div>
    );

  });
  return (
    <div className="kuc-tabs-tabs">
      {tabNames}
      {tabContents}
    </div>
  );

};

export default Tabs;