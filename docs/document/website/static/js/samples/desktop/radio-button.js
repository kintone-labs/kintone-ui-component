document.addEventListener("kuc:loaded", function() {
  const script = `
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
    document.body.appendChild(radioButton);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});