document.addEventListener("kuc:loaded", function () {
  const container = document.getElementById("sample-container__components");
  const combobox = new Kuc.Combobox({
    items: [
      { label: "Banana", value: "banana" },
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple" },
    ],
    value: "orange",
  });
  container.appendChild(combobox);
});
