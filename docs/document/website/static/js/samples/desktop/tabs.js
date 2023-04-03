document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");

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
  container.appendChild(tabs);
});