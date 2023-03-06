document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const firstContent = document.createElement("div");
  const textArea = new Kuc.TextArea({
    label: "Fruit",
    requiredIcon: true,
    value: "Apple",
    error: "Error",
    visible: true,
    disabled: false,
    placeholder: "",
  });
  firstContent.appendChild(textArea);

  const secondContent = document.createElement("div");
  const timePicker = new Kuc.TimePicker({
    value: "11:30"
  });
  secondContent.appendChild(timePicker);

  const thirdContent = document.createElement("div");
  thirdContent.innerText = "tab3_content"
  const tabs = new Kuc.Tabs({
  borderVisible: true,
  className: 'kuc-tabs-class',
  id: 'sample-id',
  items: [
    {
      label: 'A',
      content: firstContent,
      value: 'tab-textarea',
      disabled: false,
    },
    {
      label: 'B',
      content: secondContent,
      value: 'tab-time-picker',
      disabled: false,
    },
    {
      value: 'tab-string-pattern',
      label: 'C',
      content: thirdContent,
      disabled: false,
    },
  ],
  value: 'tab-textarea',
  visible: true,
});
  container.appendChild(tabs);
});