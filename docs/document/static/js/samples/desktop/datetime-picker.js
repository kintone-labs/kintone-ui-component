import React, { useEffect, useRef } from 'react';

export const DateTimePickerComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const dateTimePicker = new Kuc.DateTimePicker({
        value: "2021-11-11T11:30:00"
    });

    divEl.current.appendChild(dateTimePicker)
  }, []);

  return (
    <div className="sample-container" id="datetime-picker">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};