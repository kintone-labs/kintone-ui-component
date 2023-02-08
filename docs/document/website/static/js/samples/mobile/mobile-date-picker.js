document.addEventListener("kuc:loaded", function() {
  const script = `
    const mobileDatePicker = new Kuc.MobileDatePicker({
      value: "2021-11-11"
    });
    document.body.appendChild(mobileDatePicker);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});
