import React, { useEffect, useRef } from 'react';

export const DropdownComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const dropdown = new Kuc.Dropdown({
        items: [
          {
            label: "orange",
            value: "Orange"
          },
          {
            label: "apple",
            value: "Apple"
          }
        ],
        value: "Orange"
      });

    divEl.current.appendChild(dropdown)
  }, []);

  return (
    <div className="sample-container" id="dropdown">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};