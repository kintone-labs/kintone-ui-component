document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container");
  const datePicker = new Kuc.DatePicker({
    value: '2021-11-11'
  });
  container.appendChild(datePicker);
});