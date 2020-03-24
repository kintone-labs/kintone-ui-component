import IconButton from '../index';

describe('Unit test IconButton setType', () => {

  test('Function setType insert run successfully', () => {
    const iconButton = new IconButton({type: 'remove'});
    const container = iconButton.render();
    iconButton.setType('insert');
    expect(container.children[0].children[0].getAttribute('d'))
      .toBe('M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
  });

  test('Function setType remove run successfully', () => {
    const iconButton = new IconButton({type: 'close'});
    const container = iconButton.render();
    iconButton.setType('remove');
    expect(container.children[0].children[0].getAttribute('d'))
      .toBe('M19,13H5V11H19V13Z');
  });

  test('Function setType close run successfully', () => {
    const iconButton = new IconButton({type: 'file'});
    const container = iconButton.render();
    iconButton.setType('close');
    expect(container.children[0].children[0].getAttribute('d'))
      .toBe('M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z');
  });

  test('Function setType file run successfully', () => {
    const iconButton = new IconButton({type: 'right'});
    const container = iconButton.render();
    iconButton.setType('file');
    expect(container.children[0].children[0].getAttribute('d'))
      .toBe('M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2H6Z');
  });

  test('Function setType right run successfully', () => {
    const iconButton = new IconButton({type: 'left'});
    const container = iconButton.render();
    iconButton.setType('right');
    expect(container.children[0].children[0].getAttribute('d'))
      .toBe('M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z');
  });

  test('Function setType left run successfully', () => {
    const iconButton = new IconButton({type: 'right'});
    const container = iconButton.render();
    iconButton.setType('left');
    expect(container.children[0].children[0].getAttribute('d'))
      .toBe('M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z');
  });

  test('Function setSize run successfully with empty', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    // @ts-ignore
    iconButton.setType('');
    expect(container.children[0].children[0].getAttribute('d'))
      .toBe('M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
  });

  test('Function setSize run successfully with null', () => {
    const iconButton = new IconButton({});
    const container = iconButton.render();
    // @ts-ignore
    iconButton.setType(null);
    expect(container.children[0].children[0].getAttribute('d'))
      .toBe('M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
  });

});