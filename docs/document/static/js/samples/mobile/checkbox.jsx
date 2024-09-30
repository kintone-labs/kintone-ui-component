import React, { useEffect, useRef } from 'react';

export const MobileCheckboxComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const mobileCheckbox = new Kuc.MobileCheckbox({
        className: "cus-mobile-checkbox",
        value: ["Orange"],
        items: [
          {
            label: "orange",
            value: "Orange"
          },
          {
            label: "apple",
            value: "Apple"
          }
        ]
      });

    divEl.current.appendChild(mobileCheckbox)
  }, []);

  return (
    <div className="sample-container" id="mobile-checkbox">
      <div id="sample-container__components" className="mobile" ref={divEl}></div>
    </div>
  );
};