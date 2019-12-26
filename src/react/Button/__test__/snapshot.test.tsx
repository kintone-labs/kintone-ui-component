import React from 'react';
import {render} from '@testing-library/react';

const fs = require('fs');
import Button from '../index';
describe('Unit test Button react', () => {
  test('Render successfully without props', () => {
    const {container} = render(<Button />);
    fs.writeFileSync('./src/react/Button/__test__/snapshot/without_props.html', container.outerHTML);
  });

  test('Render successfully with full props', () => {
    const {container} = render(
      <Button text="Submit" type="submit" isDisabled isVisible />
    );
    fs.writeFileSync('./src/react/Button/__test__/snapshot/with_full_props.html', container.outerHTML);
  });

  test('Render successfully with invisible', () => {
    const {container} = render(
      <Button isVisible={false} />
    );
    fs.writeFileSync('./src/react/Button/__test__/snapshot/with_invisible.html', container.outerHTML);
  });
});