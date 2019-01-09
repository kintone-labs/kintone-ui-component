import React from 'react';
import PropTypes from 'prop-types';
export var Item = function Item(props) {
  var _onClick = function _onClick() {
    if (props.isDisabled) {
      return false;
    }
    props.onClick(props.item);
    return true;
  };

  var _onChange = function _onChange() {
    if (props.isDisabled) {
      return false;
    }
    props.onChange(props.item);
    return true;
  };

  var generateGUID = function generateGUID() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };

  if (props.isVisible === false) {
    return null;
  }

  if (props.type === 'checkbox' || props.type === 'radio') {
    var id = new Date().getTime() + '-' + generateGUID() + '-' + generateGUID() + generateGUID();
    return React.createElement(
      'span',
      { className: props.className },
      React.createElement('input', {
        name: props.name,
        id: id,
        disabled: props.isDisabled,
        type: props.type,
        checked: props.selected,
        onChange: _onChange
      }),
      React.createElement(
        'label',
        { htmlFor: id },
        props.item.label
      )
    );
  }
  var className = ['kuc-list-item', props.selected ? 'kuc-list-item-selected' : '', props.isDisabled ? 'kuc-list-item-disable' : ''];
  return React.createElement(
    'div',
    {
      onClick: _onClick,
      className: className.join(' ').trim(),
      disabled: props.isDisabled
    },
    React.createElement(
      'span',
      { className: 'kuc-icon-check' },
      React.createElement('i', { className: 'fa fa-check', 'aria-hidden': 'true' })
    ),
    React.createElement(
      'span',
      { className: 'kuc-list-item-label' },
      props.item.label
    )
  );
};
Item.propTypes = {
  item: PropTypes.object,
  isVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string
};
Item.defaultProps = {
  onClick: function onClick(f) {
    return f;
  }
};
export default Item;