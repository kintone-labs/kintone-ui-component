document.addEventListener("kuc:loaded", function() {
  const script = `
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
    document.body.appendChild(checkbox);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});