import React, { useEffect, useRef } from 'react';

export const MobileRadioButtonComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const mobileRadioButton = new Kuc.MobileRadioButton({
        className: "cus-mobile-radio-button",
        value: "Orange",
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

    divEl.current.appendChild(mobileRadioButton)
  }, []);

  return (
    <div className="sample-container" id="mobile-radio-button">
      <div id="sample-container__components" className="mobile" ref={divEl}></div>
    </div>
  );
};