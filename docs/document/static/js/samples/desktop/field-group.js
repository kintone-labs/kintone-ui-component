import React, { useEffect, useRef } from 'react';

export const DropdownComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const text = new Kuc.Text({
        label: 'Text',
        value: 'orange'
    });
    const fieldGroup = new Kuc.FieldGroup({
        className: 'options-class',
        id: 'options-id',
        label: 'FieldGroup',
        disabled: false,
        expanded: false,
        visible: true,
        content: text
    });

    fieldGroup.addEventListener('change', event => {
        console.log(event);
    });

    divEl.current.appendChild(fieldGroup)
  }, []);

  return (
    <div className="sample-container" id="field-group">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};
