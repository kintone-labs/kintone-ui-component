import React, { useEffect, useRef } from 'react';

export const TabsComponent = () =>  {
  const divEl = useRef();
  useEffect(() => {
    const textArea = new Kuc.TextArea({
        label: "TextArea",
        value: "This is sample."
      });

      const timePicker = new Kuc.TimePicker({
        label: "Time",
        value: "11:30"
      });

      const contentText = "This is a sample.";

      const tabs = new Kuc.Tabs({
      borderVisible: true,
      className: 'kuc-tabs-class',
      id: 'sample-id',
      items: [
        {
          label: 'A',
          content: textArea,
          value: 'a',
          disabled: false
        },
        {
          label: 'B',
          content: timePicker,
          value: 'b',
          disabled: false
        },
        {
          label: 'C',
          content: contentText,
          value: 'c',
          disabled: false
        }
      ],
      value: 'a',
      visible: true
    });

    divEl.current.appendChild(tabs)
  }, []);

  return (
    <div className="sample-container" id="tabs">
      <div id="sample-container__components" ref={divEl}></div>
    </div>
  );
};