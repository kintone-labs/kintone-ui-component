document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const text = new Kuc.Text({});
  container.appendChild(text);
});