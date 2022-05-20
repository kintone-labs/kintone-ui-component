document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const mobileTimePicker = new Kuc.MobileTimePicker({
    value: "11:30"
  });
  mobileTimePicker.style.margin = "0px 0px 0px -43px"
  container.appendChild(mobileTimePicker);
});