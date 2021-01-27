import React, {useState, useEffect, useRef} from 'react';
import Message from '../constant/Message';
import {Item, AbstractSingleSelection} from '../index';
import {mdilChevronDown} from '@mdi/light-js';
import '../../css/font.css';
import '../../css/Dropdown.css';

type item = {
  value: string;
  label?: string;
  isDisabled?: boolean;
}
type DropdownProps = {
  value?: string;
  items?: item[];
  isVisible?: boolean;
  isDisabled?: boolean;
  onChange?: (value: string) => void;
}

const Dropdown = ({value, items, isVisible, isDisabled, onChange}: DropdownProps) => {
  const [isVisibleItems, setVisibleItems] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const {_hasDuplicatedItems, _hasValidItems, _hasValidValue, _handleItemClick} = AbstractSingleSelection;

  const _caclListOuterPosition = (listItemEl: HTMLDivElement) => {
    let position = -6;
    const currentPosition = listItemEl.offsetTop + listItemEl.offsetHeight;

    const parentEl = ref.current || document.createElement('div');
    if (currentPosition >= window.innerHeight) {
      position -= (listItemEl.offsetHeight + parentEl.offsetHeight);
    }
    return position;
  };

  const _showItems = (e: React.MouseEvent) => {
    setVisibleItems(!isVisibleItems);
    const element = ref.current || document.createElement('div');
    const listItemEl = element.getElementsByClassName('kuc-list-outer')[0] as HTMLDivElement;
    listItemEl.setAttribute('style', `display: block;`);
    listItemEl.setAttribute('style', `margin-top: ${_caclListOuterPosition(listItemEl)}px;`);
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
  if (!_hasValidItems(items) || !_hasValidValue(items, value)) {
    throw new Error(Message.common.INVALID_ARGUMENT);
  }


  const listItemEl = items && items.map((data: item, i) => {
    return (
      <Item
        key={i}
        selected={value === data.value}
        onClick={(item_prop) => {
          _handleItemClick(item_prop, onChange); _hideItems();
        }}
        item={data}
        isDisabled={data.isDisabled}
      />
    );
  });

  let index = -1;
  items && items.forEach((data: item, i) => {
    if (data.value === value) {
      index = i;
    }
  });

  const className = [
    'kuc-dropdown',
    isDisabled ? 'kuc-dropdown-disable' : ''
  ];
  return (
    <div className="kuc-dropdown-container" ref={ref}>
      <div className="kuc-dropdown-sub-container">
        <div className="kuc-dropdown-outer" onClick={_showItems} role="presentation">
          <div className={className.join(' ').trim()}>
            <div className="kuc-dropdown-selected">
              <span className="kuc-dropdown-selected-name">
                <span className="kuc-dropdown-selected-label">{index !== -1 && items && items[index].label}</span>
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