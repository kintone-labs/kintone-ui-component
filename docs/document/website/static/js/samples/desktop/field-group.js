document.addEventListener('kuc:loaded', function () {
    const container = document.getElementById('sample-container__components');

    const text = new Kuc.Text({
        label: 'Text',
        value: 'orange'
    });
    const fieldGroup = new Kuc.FieldGroup({
        className: 'options-class',
        id: 'options-id',
        label: 'FieldGroup',
        disabled: false,
        expanded: false,
        visible: true,
        content: text
    });

    fieldGroup.addEventListener('change', event => {
        console.log(event);
    });
    container.appendChild(fieldGroup);
  });