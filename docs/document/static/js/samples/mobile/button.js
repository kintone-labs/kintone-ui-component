import React, { useEffect, useRef } from 'react';

export const MobileButtonComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const buttonNormal = new Kuc.MobileButton({
      text: "Normal",
      type: "normal",
      className: "kuc_normal_button",
    });
    const buttonSubmit = new Kuc.MobileButton({
      text: "Submit",
      type: "submit",
      className: "kuc_normal_button",
    });

    divEl.current.appendChild(buttonNormal);
    divEl.current.appendChild(buttonSubmit);
  }, []);

  return (
    <div className="sample-container" id="mobile-button">
      <div id="sample-container__components" className="mobile" ref={divEl}></div>
    </div>
  );
};