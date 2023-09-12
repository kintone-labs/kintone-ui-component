import React, { useEffect, useRef } from 'react';

export const MobileDateTimePickerComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const mobileDateTimePicker = new Kuc.MobileDateTimePicker({
        value: "2021-11-11"
    });

    divEl.current.appendChild(mobileDateTimePicker)
  }, []);

  return (
    <div className="sample-container" id="mobile-datetime-picker">
      <div id="sample-container__components" className="mobile" ref={divEl}></div>
    </div>
  );
};