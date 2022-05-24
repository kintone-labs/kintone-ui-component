document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const mobileRadioButton = new Kuc.MobileRadioButton({
    className: "cus-mobile-radio-button",
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
  container.appendChild(mobileRadioButton);
});