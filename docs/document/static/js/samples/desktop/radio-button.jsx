import React, { useEffect, useRef } from 'react';

export const RadioButtonComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const radioButton = new Kuc.RadioButton({
        className: "cus-radio-button",
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

    divEl.current.appendChild(radioButton)
  }, []);

  return (
    <div className="sample-container" id="radio-button">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};