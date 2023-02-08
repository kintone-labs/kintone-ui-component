document.addEventListener("kuc:loaded", function () {
  const script = `
    const mobileDateTimePicker = new Kuc.MobileDateTimePicker({
      value: "2021-11-11"
    });
    document.body.appendChild(mobileDateTimePicker);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});
