import React, {useState, useEffect, useRef, CSSProperties} from 'react';
import Message from '../constant/Message';
import {Item, AbstractSingleSelection} from '../index';
import { mdilChevronDown } from '@mdi/light-js'
import '../../css/font.css'
import '../../css/Dropdown.css';

type item = {
  value: string;
  label: string;
  isDisabled: boolean;
}
type DropdownProps = {
  setStyles?: CSSProperties;
  setClassName?: string;
  value: string;
  items: item[];
  isVisible?: boolean;
  isDisabled?: boolean;
  onChange: (value: string) => void;
}

const Dropdown = ({setStyles, setClassName, value, items, isVisible, isDisabled, onChange = () => {}}: DropdownProps) => {
  const [isVisibleItems, setVisibleItems] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const {_hasDuplicatedItems, _hasValidValue, _handleItemClick} = AbstractSingleSelection;

  const _showItems = () => {
    setVisibleItems(!isVisibleItems);
  };
  const _hideItems = () => {
    setVisibleItems(false);
  };

  const _handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setVisibleItems(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', _handleClickOutside);
    return () => document.removeEventListener('mousedown', _handleClickOutside);
  });

  const _getItemsStyle = () => {
    const display = isVisibleItems && !isDisabled ? {display: 'block'} : {display: 'none'};
    return display;
  };

  if (isVisible === false) {
    return null;
  }

  if (_hasDuplicatedItems(items)) {
    throw new Error(Message.common.SELECTTION_DUPLICATE_VALUE);
  }

  if (!_hasValidValue(items, value)) {
    throw new Error(Message.common.INVALID_ARGUMENT);
  }

  const listItemEl = items && items.map((item: item, i) => {
    return (
      <Item
        key={i}
        selected={value === item.value}
        onClick={(item_prop) => {
          _handleItemClick(item_prop, onChange); _hideItems();
        }}
        item={item}
        isDisabled={item.isDisabled}
      />
    );
  });

  let index = -1;
  items && items.forEach((item: item, i) => {
    if (item.value === value) {
      index = i;
    }
  });

  const _getClassName = [
    'kuc-dropdown',
    isDisabled ? 'kuc-dropdown-disable' : ''
  ];
  return (
    <div style={setStyles} className={`kuc-dropdown-container ${setClassName}`} ref={ref}>
      <div className="kuc-dropdown-sub-container">
        <div className="kuc-dropdown-outer" onClick={_showItems}>
          <div className={_getClassName.join(' ').trim()}>
            <div className="kuc-dropdown-selected">
              <span className="kuc-dropdown-selected-name">
                <span className="kuc-dropdown-selected-label">{index !== -1 && items[index].label}</span>
                <span className="icon-arrow-down">
                  <svg>
                    <path d={mdilChevronDown} />
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div style={_getItemsStyle()} className="kuc-list-outer">
          {listItemEl}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;