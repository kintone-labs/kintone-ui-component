document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const radioButton = new Kuc.RadioButton({
    className: "cus-radio-button",
    value: "Orange",
    items: [
      {
        label: "orange",
        value: "Orange"
      },
      {
        label: "apple",
        value: "Apple"
      }
    ]
  });

  container.appendChild(radioButton);
});