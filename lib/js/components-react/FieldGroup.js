import React from 'react';
import PropTypes from 'prop-types';

var FieldGroupReact = function FieldGroupReact(props) {

  if (props.isVisible === false) {
    return null;
  }

  var _handleToggleClick = function _handleToggleClick() {
    var toggleState = props.toggle === 'expand' ? 'collapse' : 'expand';
    if (props.onToggle) {
      props.onToggle(toggleState);
    }
  };

  var _getClassName = function _getClassName() {
    return ['kuc-fieldgroup-label', 'label', props.toggle === 'expand' ? 'expand' : 'collapse'].join(' ').trim();
  };

  var _getArrowClassName = function _getArrowClassName() {
    return ['kuc-arrow', props.toggle === 'expand' ? 'down' : 'right'].join(' ').trim();
  };

  return React.createElement(
    'div',
    { className: 'kuc-fieldgroup' },
    React.createElement(
      'span',
      { role: 'button', tabIndex: '0', className: _getClassName(), onClick: _handleToggleClick },
      React.createElement('span', { className: _getArrowClassName() }),
      props.name
    ),
    React.createElement(
      'div',
      { className: 'kuc-fieldgroup-contents' },
      props.children
    )
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