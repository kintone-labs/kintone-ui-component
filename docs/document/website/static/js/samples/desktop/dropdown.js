document.addEventListener("kuc:loaded", function () {
  const script = `
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
    document.body.appendChild(dropdown);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});