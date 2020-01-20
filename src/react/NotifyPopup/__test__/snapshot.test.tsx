import React from 'react';
import {render} from '@testing-library/react';

const fs = require('fs');
import NotifyPopup from '../index';
describe('Unit test NotifyPopup react', () => {
  test('Render successfully without props', () => {
    const {container} = render(<NotifyPopup />);
    fs.writeFileSync('./src/react/NotifyPopup/__test__/snapshot/without_props.html', container.outerHTML);
  });

  test('Render successfully with full props', () => {
    const {container} = render(
      <NotifyPopup text="NotifyPopup" type="info" isVisible />
    );
    fs.writeFileSync('./src/react/NotifyPopup/__test__/snapshot/with_full_props.html', container.outerHTML);
  });

  test('Render successfully with invisible', () => {
    const {container} = render(
      <NotifyPopup isVisible={false} />
    );
    fs.writeFileSync('./src/react/NotifyPopup/__test__/snapshot/with_invisible.html', container.outerHTML);
  });
});