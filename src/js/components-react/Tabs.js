import React from 'react';
import PropTypes from 'prop-types';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

const TabsReact = props => {

  if (props.isVisible === false) {
    return null;
  }

  const _onSelect = (index, last) => {
    if (props.onSelect) {
      props.onSelect(props.items[index], index, last);
    }
    return true;
  };

  const tabList = props.items.map((item, i) => {
    return (
      <Tab
        key={i}
        selectedClassName="kuc-tabs-container-selection"
        className="kuc-tabs-container"
        disabled={item.isDisabled}
        disabledClassName="kuc-tabs-disabled"
      >
        {item.tabName}
      </Tab>
    );
  });

  const tabPanel = props.items.map((item, i) => {
    return (
      <TabPanel key={i}>
        <span dangerouslySetInnerHTML={{__html: item.tabContent}} />
      </TabPanel>
    );
  });

  return (
    <Tabs
      className="kuc-tabs-tabs"
      onSelect={_onSelect}
      defaultIndex={props.value}
    >
      <TabList className="kuc-tabs-tab-list">{tabList}</TabList>
      <div className="kuc-tabs-tab-contents">
        {tabPanel}
      </div>
    </Tabs>
  );
};

TabsReact.propTypes = {
  items: PropTypes.array,
  isDisabled: PropTypes.bool,
  onSelect: PropTypes.func,
  value: PropTypes.number,
  isVisible: PropTypes.bool
};
export default TabsReact;
