document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const mobileText = new Kuc.MobileText({});
  container.appendChild(mobileText);
});