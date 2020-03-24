import Button from '../index';

describe('Unit test Button setType', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error');
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    console.error.mockImplementation(() => { });
  });
  afterEach(() => {
    // @ts-ignore
    console.error.mockRestore();
  });
  test('Function setType submit run successfully', () => {
    const button = new Button({type: 'normal'});
    const container = button.render();
    button.setType('submit');
    expect(container.classList.length).toBe(2);
    expect(['kuc-btn', 'submit'].every(c => container.classList.contains(c))).toBe(true);
  });

  test('Function setType normal run successfully', () => {
    const button = new Button({type: 'submit'});
    const container = button.render();
    button.setType('normal');
    expect(container.classList.length).toBe(2);
    expect(['kuc-btn', 'normal'].every(c => container.classList.contains(c))).toBe(true);
  });

  test('Function setType empty run successfully', () => {
    const button = new Button({type: 'submit'});
    const container = button.render();
    // @ts-ignore
    button.setType('');
    expect(container.classList.length).toBe(2);
    expect(['kuc-btn', 'normal'].every(c => container.classList.contains(c))).toBe(true);
  });

  test('Function setType null run successfully', () => {
    const button = new Button({type: 'submit'});
    const container = button.render();
    // @ts-ignore
    button.setType(null);
    expect(container.classList.length).toBe(2);
    expect(['kuc-btn', 'normal'].every(c => container.classList.contains(c))).toBe(true);
  });
});
