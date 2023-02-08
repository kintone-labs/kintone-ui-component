document.addEventListener("kuc:loaded", function() {
  const script = `
    const datePicker = new Kuc.DatePicker({
      value: "2021-11-11"
    });
    document.body.appendChild(datePicker);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});
