document.addEventListener("kuc:loaded", function () {
  const container = document.getElementById("sample-container__components");
  const dateTimePicker = new Kuc.DateTimePicker({
    value: "2021-11-11T11:30:00"
  });
  container.appendChild(dateTimePicker);
});