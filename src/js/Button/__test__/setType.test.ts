import Button from '../index';

describe('Unit test Button setType', () => {
  test('Function setType submit run successfully', () => {
    const button = new Button({type: 'normal'});
    const container = button.render();
    button.setType('submit');
    expect(container.className).toBe('kuc-btn submit');
  });

  test('Function setType normal run successfully', () => {
    const button = new Button({type: 'submit'});
    const container = button.render();
    button.setType('normal');
    expect(container.className).toBe('kuc-btn normal');
  });

  test('Function setType empty run successfully', () => {
    const button = new Button({type: 'submit'});
    const container = button.render();
    // @ts-ignore
    button.setType('');
    expect(container.className).toBe('kuc-btn normal');
  });

  test('Function setType null run successfully', () => {
    const button = new Button({type: 'submit'});
    const container = button.render();
    // @ts-ignore
    button.setType(null);
    expect(container.className).toBe('kuc-btn normal');
  });
});
