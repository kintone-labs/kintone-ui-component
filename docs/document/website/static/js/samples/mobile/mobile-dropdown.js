document.addEventListener("kuc:loaded", function() {
  const script = `
    const dropdown = new Kuc.MobileDropdown({
      value: "Orange",
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
    document.body.appendChild(dropdown);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});