document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const attachment = new Kuc.Attachment({});
  container.appendChild(attachment);
});
