import React from 'react';
import PropTypes from 'prop-types';
export const Item = (props) => {
  const _onClick = () => {
    if (props.isDisabled) {
      return false;
    }
    props.onClick(props.item);
    return true;
  };

  const onChange = () => {
    if (props.isDisabled) {
      return false;
    }
    props.onChange(props.item);
    return true;
  };

  const generateGUID = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  if (props.isVisible === false) {
    return null;
  }

  if (props.type === 'checkbox' || props.type === 'radio') {
    const id = new Date().getTime() + '-' + generateGUID() + '-' + generateGUID() + generateGUID();
    return (
      <span className={props.className}>
        <input
          name={props.name}
          id={id}
          disabled={props.isDisabled}
          type={props.type}
          checked={props.selected}
          onChange={onChange}
        />
        <label htmlFor={id}>{props.item.label}
        </label>
      </span>
    );
  }
  const className = ['kuc-list-item',
    props.selected ? 'kuc-list-item-selected' : '',
    props.isDisabled ? 'kuc-list-item-disable' : ''
  ];
  return (
    <div
      onClick={_onClick}
      className={className.join(' ').trim()}
      disabled={props.isDisabled}
    >
      <span className="kuc-icon-check"><i className="fa fa-check" aria-hidden="true" /></span>
      <span className="kuc-list-item-label">{props.item.label}</span>
    </div>
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
  onClick: f => f
};
export default Item;