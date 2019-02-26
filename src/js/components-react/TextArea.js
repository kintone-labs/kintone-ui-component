import React from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string,
    isVisible: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
  };

  constructor(props) {
    super(props);
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
  }

  _onMouseDown(ev) {
    const _this = this;
    const eventMouseMove = document.onmousemove;
    const eventMouseUp = document.onmouseup;
    document.onmousemove = (event) => {
      if (_this.currentX && _this.currentY) {
        let dx = event.clientX - _this.currentX;
        if (_this.state.textAreaWidth + dx < _this.mixTextAreaWidth) {
          dx = 0;
        }

        let dy = event.clientY - _this.currentY;
        if (_this.state.textAreaHeight + dy < _this.mixtTextAreaHeight) {
          dy = 0;
        }

        _this.setState(prevState =>({translateX: prevState.translateX + dx,
          translateY: prevState.translateY + dy,
          textAreaWidth: prevState.textAreaWidth + dx,
          textAreaHeight: prevState.textAreaHeight + dy
        }));
      }
      _this.currentX = event.clientX;
      _this.currentY = event.clientY;
    };
    document.onmouseup = () => {
      document.onmousemove = eventMouseMove;
      document.onmouseup = eventMouseUp;
      _this.currentX = null;
      _this.currentY = null;
    };
  }

  _onChange = (event) => {
    const value = event.target.value;
    this.props.onChange(value);
  };

  render() {
    if (this.props.isVisible === false) {
      return null;
    }

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

