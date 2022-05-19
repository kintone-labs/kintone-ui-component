document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const mobileTimePicker = new Kuc.MobileTimePicker({
    value: "11:30"
  });
  container.appendChild(mobileTimePicker);
});