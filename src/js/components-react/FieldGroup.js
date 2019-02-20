import React from 'react';
import PropTypes from 'prop-types';


const FieldGroupReact = (props) => {

  const _handleToggleClick = () => {
    const toggleState = props.toggle === 'expand' ? 'collapse' : 'expand';
    if (props.onToggle) {
      props.onToggle(toggleState);
    }
  };

  const _getClassName = () => {
    return [
      'kuc-fieldgroup-label',
      props.toggle === 'expand' ? 'expand' : 'collapse'
    ].join(' ').trim();
  };

  const _getFieldItems = () => props.items && props.items.map((item, i) => {
    return (
      <p key={i} dangerouslySetInnerHTML={{__html: item.value}} />
    );
  });

  return (
    <div className="kuc-fieldgroup">
      <span role="button" tabIndex="0" className={_getClassName()} onClick={_handleToggleClick}>
        {props.name}
      </span>
      <div className="kuc-fieldgroup-contents">
        {_getFieldItems()}
      </div>
    </div>
  );
};

FieldGroupReact.propTypes = {
  name: PropTypes.string,
  toggle: PropTypes.string,
  items: PropTypes.array,
  onToggle: PropTypes.func
};

export default FieldGroupReact;