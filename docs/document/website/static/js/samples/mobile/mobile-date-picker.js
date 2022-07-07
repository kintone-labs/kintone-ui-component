document.addEventListener("kuc:loaded", function() {
    const container = document.getElementById("sample-container__components");
    const mobileDatePicker = new Kuc.MobileDatePicker({
      value: "2021-11-11"
    });
    container.appendChild(mobileDatePicker);
  });
