import Control from '../Control';

class TabName extends Control {
  private isActive: boolean
  private tabName: string
  private tabIndex: number

  constructor({
    isActive = false,
    isDisabled = false,
    isVisible = true,
    tabName = '',
    tabIndex = 0,
    onClickTabItem = (tabIndex: number) => {

    }
  }) {
    super();
    this.isActive = isActive;
    this.isDisabled = isDisabled;
    this.isVisible = isVisible;
    this.tabName = tabName;
    this.tabIndex = tabIndex;

    let className = 'kuc-tabs-container';
    if (this.isActive) {
      className += ' kuc-tabs-container-selection';
    }

    if (this.isDisabled) {
      className += ' kuc-tabs-disabled';
      this.element = document.createElement('li');
      this.element.className = className;
      this.element.append(this.tabName);
    } else {
      this.element = document.createElement('li');
      this.element.className = className;
      this.element.append(this.tabName);
      this.on('click', () => onClickTabItem(this.tabIndex));
    }
    this.rerender();
  }

  rerender(changedAttr?: string[]) {
    super.rerender();
    if (!changedAttr) return;
    if (changedAttr.indexOf('isActive') !== -1) {
      let className = 'kuc-tabs-container';
      if (this.isActive) {
        className += ' kuc-tabs-container-selection';
      }
      this.element.className = className;
    }
  }

  select() {
    this.isActive = true;
    this.rerender(['isActive']);
  }

  deselect() {
    this.isActive = false;
    this.rerender(['isActive']);
  }
}

export default TabName;