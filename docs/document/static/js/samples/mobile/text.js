import React, { useEffect, useRef } from 'react';

export const MobileTextComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const mobileText = new Kuc.MobileText({ className: "cus-mobile-text"});

    divEl.current.appendChild(mobileText)
  }, []);

  return (
    <div className="sample-container" id="mobile-text">
      <div id="sample-container__components" className="mobile" ref={divEl}></div>
    </div>
  );
};