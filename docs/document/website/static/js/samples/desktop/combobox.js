document.addEventListener("kuc:loaded", function () {
  const script = `
    const combobox = new Kuc.Combobox({
      items: [
        { label: "Banana", value: "banana" },
        { label: "Orange", value: "orange" },
        { label: "Apple", value: "apple" },
      ],
      value: "orange",
    });
    document.body.appendChild(combobox);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});
