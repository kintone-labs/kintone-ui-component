import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

var TabsReact = function TabsReact(props) {

  if (props.isVisible === false) {
    return null;
  }

  var _onSelect = function _onSelect(index, last) {
    if (props.onSelect) {
      return props.onSelect(props.items[index], index, last);
    }
    return true;
  };

  var tabList = props.items.map(function (item, i) {
    return React.createElement(
      Tab,
      {
        key: i,
        selectedClassName: 'kuc-tabs-container-selection',
        className: 'kuc-tabs-container',
        disabled: item.isDisabled,
        disabledClassName: 'kuc-tabs-disabled'
      },
      item.tabName
    );
  });

  var tabPanel = props.items.map(function (item, i) {
    return React.createElement(
      TabPanel,
      { key: i },
      item.tabContentJSX ? item.tabContentJSX : item.tabContent
    );
  });

  var selectedIndex = props.value ? props.value : 0;
  return React.createElement(
    Tabs,
    {
      className: 'kuc-tabs-tabs',
      onSelect: _onSelect,
      selectedIndex: selectedIndex
    },
    React.createElement(
      TabList,
      { className: 'kuc-tabs-tab-list' },
      tabList
    ),
    React.createElement(
      'div',
      { className: 'kuc-tabs-tab-contents' },
      tabPanel
    )
  );
};

TabsReact.propTypes = {
  items: PropTypes.array,
  onSelect: PropTypes.func,
  value: PropTypes.number,
  isVisible: PropTypes.bool
};
export default TabsReact;