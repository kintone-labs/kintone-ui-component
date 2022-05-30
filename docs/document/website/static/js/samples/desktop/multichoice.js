document.addEventListener("kuc:loaded", function () {
  const container = document.getElementById("sample-container__components");
  const multiChoice = new Kuc.MultiChoice({
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
  container.appendChild(multiChoice);
});