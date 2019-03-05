import React from 'react';
import PropTypes from 'prop-types';


const FieldGroupReact = (props) => {

  if (props.isVisible === false) {
    return null;
  }

  const _handleToggleClick = () => {
    const toggleState = props.toggle === 'expand' ? 'collapse' : 'expand';
    if (props.onToggle) {
      props.onToggle(toggleState);
    }
  };

  const _getClassName = () => {
    return [
      'kuc-fieldgroup-label',
      'label',
      props.toggle === 'expand' ? 'expand' : 'collapse'
    ].join(' ').trim();
  };

  const _getArrowClassName = () => {
    return [
      'kuc-arrow',
      props.toggle === 'expand' ? 'down' : 'right'
    ].join(' ').trim();
  }

  return (
    <div className="kuc-fieldgroup">
      <span role="button" tabIndex="0" className={_getClassName()} onClick={_handleToggleClick}>
        <span className={_getArrowClassName()} />
        {props.name}
      </span>
      <div className="kuc-fieldgroup-contents">
        {
          props.children
        }
      </div>
    </div>
  );
};

FieldGroupReact.propTypes = {
  name: PropTypes.string,
  toggle: PropTypes.string,
  items: PropTypes.array,
  onToggle: PropTypes.func,
  isVisible: PropTypes.bool,
  content: PropTypes.any,
  children: PropTypes.any
};

export default FieldGroupReact;