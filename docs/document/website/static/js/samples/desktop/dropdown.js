document.addEventListener("kuc:loaded", function () {
  const container = document.getElementById("sample-container__components");
  const dropdown = new Kuc.Dropdown({
    items: [
      {
        label: "orange",
        value: "Orange"
      },
      {
        label: "apple",
        value: "Apple"
      }
    ],
    value: "Orange"
  });
  container.appendChild(dropdown);
});