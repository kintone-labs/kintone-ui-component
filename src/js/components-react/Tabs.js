import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TabsReact = props => {

  const _onSelect = (index, last) => {
    if (props.onSelect) {
      props.onSelect(props.items[index], index, last);
    }
    return true;
  };

  const tabList = props.items.map((item, i) => {
    return (
      <Tab selectedClassName="kuc-tabs-container-selection" className="kuc-tabs-container" disabled={item.isDisabled} disabledClassName="kuc-tabs-disabled">
        {item.label}
      </Tab>
    );
  });

  const tabPanel = props.items.map((item, i) => {
    console.log("item.value : " + item.value);
    return (
      <TabPanel>
        <p dangerouslySetInnerHTML={{ __html: item.value }}></p>
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
      {tabPanel}
    </Tabs>
  );
};

TabsReact.propTypes = {
  items: PropTypes.array,
  isDisabled: PropTypes.bool,
  onSelect: PropTypes.func,
  value: PropTypes.number
};
export default TabsReact;
