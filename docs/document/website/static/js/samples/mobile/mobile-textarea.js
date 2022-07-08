document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const mobileTextArea = new Kuc.MobileTextArea({});
  container.appendChild(mobileTextArea);
});