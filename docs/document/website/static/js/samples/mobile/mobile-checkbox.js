document.addEventListener("kuc:loaded", function() {
  const script = `
    const mobileCheckbox = new Kuc.MobileCheckbox({
      className: "cus-mobile-checkbox",
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
    document.body.appendChild(mobileCheckbox);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});