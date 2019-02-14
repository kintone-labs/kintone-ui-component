import React from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    isVisible: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.moving = false;
    this.currentX = null;
    this.currentY = null;
    this.mixTextAreaWidth = 297;
    this.mixtTextAreaHeight = 123;
    this.state = {
      translateX: 0,
      translateY: 0,
      textAreaWidth: this.mixTextAreaWidth,
      textAreaHeight: this.mixtTextAreaHeight,
    };
    window.onmouseup = event => this._onMouseUp(event);
    window.onmousemove = event => this._onMouseMove(event);
  }

  _onMouseDown(event) {
    event.stopPropagation();
    this.moving = true;
  }

  _onMouseUp() {
    this.moving = false;
    this.currentX = null;
    this.currentY = null;
  }

  _onMouseMove(event) {
    this.moving && this._onMove(event);
  }

  _onMove(event) {
    if (this.currentX && this.currentY) {
      let dx = event.clientX - this.currentX;
      if (this.state.textAreaWidth + dx < this.mixTextAreaWidth) {
        dx = 0;
      }

      let dy = event.clientY - this.currentY;
      if (this.state.textAreaHeight + dy < this.mixtTextAreaHeight) {
        dy = 0;
      }
      this.setState(prevState =>({translateX: prevState.translateX + dx,
        translateY: prevState.translateY + dy,
        textAreaWidth: prevState.textAreaWidth + dx,
        textAreaHeight: prevState.textAreaHeight + dy
      }));
    }
    this.currentX = event.clientX;
    this.currentY = event.clientY;
  }

  _onChange = (event) => {
    const value = event.target.value;
    this.props.onChange(value);
  };

  render() {
    return (
      <div
        className="kuc-textarea-outer"
        style={{width: this.state.textAreaWidth + 'px', height: this.state.textAreaHeight + 'px'}}
      >
        <textarea
          value={this.props.value}
          className="kuc-textarea"
          onClick={this.props.onClick}
          onChange={this._onChange}
          disabled={this.props.isDisabled}
          style={{width: this.state.textAreaWidth + 'px', height: this.state.textAreaHeight + 'px'}}
        />
        <div
          className="kuc-textarea-resize"
          style={{transform: `translate(${this.state.translateX}px, ${this.state.translateY}px)`}}
          onMouseDown={event => this._onMouseDown(event)}
        />
      </div>
    );
  }
}
TextArea.defaultProps = {
  onChange: f => f
};

