document.addEventListener("kuc:loaded", function() {
  const script = `
    const mobileTimePicker = new Kuc.MobileTimePicker({
      value: "11:30"
    });
    document.body.appendChild(mobileTimePicker);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});