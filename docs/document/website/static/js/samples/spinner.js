document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById("sample-container__components");
  const spinner = new Kuc.Spinner({
    text: "now loading..."
  });
  spinner.open();
  spinner.addEventListener("click", ()=>{
    spinner.close();
  })
  container.appendChild(spinner);
});
