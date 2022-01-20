document.addEventListener("kuc:loaded", function() {
  const container = document.getElementById('sample-container');
  const timePicker = new Kuc.TimePicker({
    value: '11:30'
  });
  container.appendChild(timePicker);
});