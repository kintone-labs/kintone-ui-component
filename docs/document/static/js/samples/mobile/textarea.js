import React, { useEffect, useRef } from 'react';

export const MobileTextAreaComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const mobileTextArea = new Kuc.MobileTextArea({
      className: "mobile-textarea",
    });

    divEl.current.appendChild(mobileTextArea)
  }, []);

  return (
    <div className="sample-container display-block-mobile" id="mobile-textarea">
      <div id="sample-container__components" className="mobile" ref={divEl}></div>
    </div>
  );
};