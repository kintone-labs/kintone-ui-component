document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const datePicker = new Kuc.DatePicker({
    value: "2021-11-11"
  });
  container.appendChild(datePicker);
});