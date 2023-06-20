import React, { useEffect, useRef } from 'react';

export const MobileDatePickerComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const mobileDatePicker = new Kuc.MobileDatePicker({
        value: "2021-11-11"
    });

    divEl.current.appendChild(mobileDatePicker)
  }, []);

  return (
    <div className="sample-container" id="mobile-date-picker">
      <div id="sample-container__components" className="mobile" ref={divEl}></div>
    </div>
  );
};