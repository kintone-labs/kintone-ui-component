// Adding your customization into header space of kintone app
kintone.events.on("app.record.index.show", function() {
    const radioBtn = new kintoneUIComponent.RadioButton({
        items: [{label: 'Orange', value: 'orange1'}, {label: 'Banana', value: 'banana1'}],
        value: 'orange1',
        name: 'Fruit'
    })
    const dropdown = new kintoneUIComponent.Dropdown({
        items: [{label: 'Red', value: 'red'}, {label: 'Green', value: 'green'}],
        value: 'green'
    })
    const button = new kintoneUIComponent.Button({
        text: 'Submit',
        type: 'submit'
    })
    const mulChoice = new kintoneUIComponent.MultipleChoice({
        items: [
             {
                 label: 'Orange',
                 value: 'Orange',
                 isDisabled: false
             },
             {
                 label: 'Banana',
                 value: 'Banana',
                 isDisabled: true
             },
             {
                 label: 'Lemon',
                 value: 'Lemon',
                 isDisabled: true
             },
      ],
      value: ['Orange', 'Banana']
    })
    var table = new kintoneUIComponent.Table({
        rowTemplate: [radioBtn, dropdown, button, mulChoice],
        header: ['Fruit', 'Color', 'Button', 'Mulchoice']
    });
    var body = document.getElementsByTagName("BODY")[0];
    // var notifyPopup = new kintoneUIComponent.NotifyPopup({
    //     text: 'Submit sucessffully',
    //     type: 'success'
    // });
    // body.appendChild(notifyPopup.render());
    body.appendChild(table.render());
    // var text = new kintoneUIComponent.Text({value: 'input text'});
    // body.appendChild(text.render());
    window.testTable = table;
    // window.textTest = text;
});
