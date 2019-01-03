import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Table, RadioButton, Dropdown, Button, IconButton, MultipleChoice, NotifyPopup, Text, Spinner} from './src/js/components-react/index';

class App extends Component {
  constructor(props) {
    super(props);
    const fruits = [
      {
        label: 'Orange',
        value: 'orange'
      },
      {
        label: 'Banana',
        value: 'banana'
      }
    ];
    const color = [
      {
        label: 'Red',
        value: 'red'
      },
      {
        label: 'Green',
        value: 'green'
      }
    ];
    const items = [
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
    ];
    this.state = {
      table: {
        header: ['Radio', 'Dropdown', 'button', 'icon button', 'multi'],
        rowTemplate: [
          <RadioButton name="fruit" items={fruits} value={fruits[0].value} isVisible={true} isDisabled={false} />,
          <Dropdown items={color} isVisible={true} value={color[1].value} isDisabled={false} />,
          <Button text="button" isVisible={true} isDisabled={false} />,
          <IconButton />,
          <MultipleChoice items={items} value={[items[0].value]} onChange={(value) => {this.setState({value})}} />
        ],
        value: [[fruits[0].value, color[1].value, undefined, undefined, [items[0].value]]]
      },
      isPopupVisible: true,
      textFieldVal: '',
      isSpinnerShown: false,
    }
  }

  handleRowAdd = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }

  handleRowRemove = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }

  handleCellChange = (data) => {
    const table = this.state.table;
    table.value = data.tableValue;
    this.setState({ table: table });
    console.log('data: ', data);
  }

  handleCellClick = (data) => {
    console.log('data: ', data);
  }

  onPopupClose = () => {
    this.setState({ isPopupVisible: false });
  }

  render() {
    return (
      <div>
        <Table header={this.state.table.header} rowTemplate={this.state.table.rowTemplate}
          value={this.state.table.value} isVisible={true}
          onCellChange={this.handleCellChange}
          onRowAdd={this.handleRowAdd}
          onRowRemove={this.handleRowRemove}
          onCellClick={this.handleCellClick}
        />
        {/* <NotifyPopup text='Submit successfully' type='success' isVisible={this.state.isPopupVisible} onClose={this.onPopupClose}/> */}
        <Text value={this.state.textFieldVal} onChange={(value) => {this.setState({textFieldVal: value})}} />
        {/* <Spinner isVisible={this.state.isSpinnerShown}/> */}
      </div>
    );
  }
}
// Adding your customization into header space of kintone app
kintone.events.on("app.record.index.show", function(ev) {
    var kintoneSpaceElement = kintone.app.getHeaderSpaceElement();
    // render a ui component to testgrid cell
    ReactDOM.render(
      <App />, 
      kintoneSpaceElement
    );
});
