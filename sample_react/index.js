import { DateTime } from '../src/js/components-react/index';
import React from 'react';
import ReactDOM from 'react-dom';

class DateComp extends React.Component {
  render() {
    return (
      <DateTime dateValue='this means Date' type='date' isDisabled={false} isVisible={true} />
    );
  }
}

kintone.events.on('app.record.detail.show', function(event) {
  ReactDOM.render(
    <DateComp />,
    kintone.app.record.getSpaceElement('DATE_SPACE')
  );
});
