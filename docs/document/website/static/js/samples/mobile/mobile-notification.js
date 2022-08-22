document.addEventListener("kuc:loaded", function () {
  const script = `
    const mobileNotification = new Kuc.MobileNotification({
      text: "Error!"
    });

    mobileNotification.open();
  `;

  document.querySelector('.sample-container #iframe').contentWindow.eval(script);
});
