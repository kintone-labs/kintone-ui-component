document.addEventListener("kuc:loaded", function() {
  const script = `
    const mobileButtonNormal = new Kuc.MobileButton({
      text: "Normal",
      type: "normal",
      className: "kuc_normal_button"
    });

    const mobileButtonSubmit = new Kuc.MobileButton({
      text: "Submit",
      type: "submit",
      className: "kuc_submit_button"
    });
    document.body.appendChild(mobileButtonNormal);
    document.body.appendChild(mobileButtonSubmit);
  `;
  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});