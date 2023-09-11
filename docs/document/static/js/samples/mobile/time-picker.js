import React, { useEffect, useRef } from 'react';

export const MobileTimePickerComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const mobileTimePicker = new Kuc.MobileTimePicker({
        value: "11:30"
    });

    divEl.current.appendChild(mobileTimePicker)
  }, []);

  return (
    <div className="sample-container" id="mobile-time-picker">
      <div id="sample-container__components" className="mobile" ref={divEl}></div>
    </div>
  );
};