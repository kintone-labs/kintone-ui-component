document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const multiChoice = new Kuc.MobileMultiChoice({
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