document.addEventListener("kuc:loaded", function() {
  const script = `
    const timePicker = new Kuc.TimePicker({
      value: "11:30"
    });
    const div = document.createElement("div");
    div.style.padding = "20px"
    div.appendChild(timePicker);
    document.body.appendChild(div);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});