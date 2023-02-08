document.addEventListener("kuc:loaded", function() {
  const script = `
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
    document.body.appendChild(mobileRadioButton);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});