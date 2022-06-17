document.addEventListener("kuc:loaded", function () {
  const container = document.getElementById("sample-container__components");
  const mobileDateTimePicker = new Kuc.MobileDateTimePicker({
    value: "2021-11-11"
  });
  container.appendChild(mobileDateTimePicker);
});
