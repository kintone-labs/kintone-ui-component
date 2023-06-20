kintone.events.on('app.record.index.show', event => {
  const Kuc = Kucs['1.x.x'];

  const header = kintone.app.getHeaderMenuSpaceElement();

  const buttonSubmit = new Kuc.Button({
    text: 'Submit',
    type: 'submit'
  });
  buttonSubmit.addEventListener('click', event => {
    console.log(event);
  });

  const buttonAlert = new Kuc.Button({
    text: 'Alert',
    type: 'alert'
  });
  buttonAlert.addEventListener('click', event => {
    console.log(event);
  });

  header.appendChild(buttonSubmit);
  header.appendChild(buttonAlert);
});
