document.addEventListener("kuc:loaded", function () {
  const container = document.getElementById("sample-container");
  const dropdown = new Kuc.Dropdown({
    items: [
      {
        label: 'orange',
        value: 'Orange'
      },
      {
        label: 'apple',
        value: 'Apple'
      }
    ],
    value: 'Orange'
  });
  container.appendChild(dropdown);
});