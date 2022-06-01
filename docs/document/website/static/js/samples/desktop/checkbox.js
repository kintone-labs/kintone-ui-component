document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const checkbox = new Kuc.Checkbox({
    className: "cus-checkbox",
    value: ["Orange"],
    items: [
      {
        label: "orange",
        value: "Orange"
      },
      {
        label: "apple",
        value: "Apple"
      }
    ]
  });
  container.appendChild(checkbox);
});