document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const textarea = new Kuc.TextArea({});
  container.appendChild(textarea);
});