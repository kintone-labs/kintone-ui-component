document.addEventListener("kuc:loaded", function () {
  const script = `
    const dateTimePicker = new Kuc.DateTimePicker({
      value: "2021-11-11T11:30:00"
    });
    document.body.appendChild(dateTimePicker);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});