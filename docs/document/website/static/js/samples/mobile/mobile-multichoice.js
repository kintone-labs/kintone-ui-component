document.addEventListener("kuc:loaded", function() {
  const script = `
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
    document.body.appendChild(multiChoice);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});