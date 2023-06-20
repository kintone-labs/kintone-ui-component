import React, { useEffect, useRef } from 'react';

export const ComboboxComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const combobox = new Kuc.Combobox({
        items: [
          { label: "Banana", value: "banana" },
          { label: "Orange", value: "orange" },
          { label: "Apple", value: "apple" },
        ],
        value: "orange",
      });

    divEl.current.appendChild(combobox)
  }, []);

  return (
    <div className="sample-container" id="combobox">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};