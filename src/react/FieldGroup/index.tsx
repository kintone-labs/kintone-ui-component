import React from 'react';
import '../../css/font.css';
import '../../css/FieldGroup.css';

type FieldGroupProps = {
  content?: any;
  name?: string;
  toggle?: string;
  onToggle?: (toggle: string) => void;
  isVisible?: boolean;
  children?: any;
}

const FieldGroup = ({content, name, toggle, onToggle, isVisible, children}: FieldGroupProps) => {
  if (isVisible === false) {
    return null;
  }
  if (children) {
    content = children;
  }
  const _handleToggleClick = () => {
    const toggleState = toggle === 'expand' ? 'collapse' : 'expand';
    onToggle && onToggle(toggleState);
  };

  const _getClassName = () => {
    return [
      'kuc-fieldgroup-label',
      'label',
      toggle === 'expand' ? 'expand' : 'collapse'
    ].join(' ').trim();
  };

  const _getArrowClassName = () => {
    return [
      'kuc-arrow',
      toggle === 'expand' ? 'down' : 'right'
    ].join(' ').trim();
  };

  return (
    <div className="kuc-fieldgroup">
      <div className="kuc-fieldgroup-container">
        <span role="button" tabIndex={0} className={_getClassName()} onClick={_handleToggleClick}>
          <span className={_getArrowClassName()} />
          <span>{name}</span>
        </span>
        <div className="kuc-fieldgroup-contents">
          {
            content
          }
        </div>
      </div>
    </div>
  );
};

export default FieldGroup;