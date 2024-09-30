import React, { useEffect, useRef } from 'react';

export const TimePickerComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const timePicker = new Kuc.TimePicker({
        value: "11:30"
    });

    divEl.current.appendChild(timePicker)
  }, []);

  return (
    <div className="sample-container" id="time-picker">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};