import React from 'react';
import {mdiCheckBold} from '@mdi/js';
import '../../css/font.css';
import '../../css/Item.css';

type item = {
  value: string;
  label?: string;
  isDisabled?: boolean;
}

type ItemProps = {
  item: item;
  isVisible?: boolean;
  isDisabled?: boolean;
  selected: boolean;
  onClick?: (data: item) => void;
  onChange?: (data: item) => void;
  name?: string;
  type?: string;
  className?: string;
};

const Item = (props: ItemProps) => {
  const _onClick = () => {
    if (props.isDisabled === true) {
      return false;
    }
    props.onClick && props.onClick(props.item);
    return true;
  };

  const _onChange = () => {
    if (props.isDisabled === true) {
      return false;
    }
    props.onChange && props.onChange(props.item);
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
          disabled={props.isDisabled === true}
          type={props.type}
          checked={props.selected}
          onChange={_onChange}
        />
        <label htmlFor={id}>{props.item.label || ''}
        </label>
      </span>
    );
  }
  const className = ['kuc-list-item',
    props.selected ? 'kuc-list-item-selected' : '',
    props.isDisabled === true ? 'kuc-list-item-disable' : ''
  ];
  return (
    <div onClick={_onClick} className={className.join(' ').trim()} role="presentation">
      <span className="kuc-icon-check">
        <svg>
          <path d={mdiCheckBold} />
        </svg>
      </span>
      <span className="kuc-list-item-label">{props.item.label || ''}</span>
    </div>
  );
};
export default Item;