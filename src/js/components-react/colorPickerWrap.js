import React, {PureComponent} from 'react';
import debounce from 'lodash/debounce';
import color from 'react-color/lib/helpers/color';

export const ColorWrap = (Picker) => {
  const COLOR_EMPTY = {
    hex: '',
    hsl: {a: '',
      h: '',
      l: '',
      s: '',
    },
    hsv: {a: '',
      h: '',
      s: '',
      v: '',
    },
    oldHue: '',
    rgb: {a: '',
      b: '',
      g: '',
      r: '',
    }
  };
  class ColorPicker extends PureComponent {

    constructor(props) {
      super();
      if (props.hasOwnProperty('color')) {
        this.state = {
          ...color.toState(props.color, 0),
        };
      } else {
        this.state = COLOR_EMPTY;
      }

      this.debounce = debounce((fn, data, event) => {
        fn(data, event);
      }, 100);
    }

    handleChange = (data, event) => {
      if (data.source === 'hex' && data.hex === '') {
        this.setState({
          color: '',
          change: true
        });
        return true;
      }
      const isValidColor = color.simpleCheckForValidColor(data);
      if (isValidColor) {
        const colors = color.toState(data, data.h || this.state.oldHue);
        this.setState({...colors, change: true});
        this.state.onChangeComplete && this.debounce(this.state.onChangeComplete, colors, event);
        this.props.onChangeComplete && this.debounce(this.props.onChangeComplete, colors, event);
      }
      return true;
    }

    handleSwatchHover = (data, event) => {
      const isValidColor = color.simpleCheckForValidColor(data);
      if (isValidColor) {
        const colors = color.toState(data, data.h || this.state.oldHue);
        this.setState(colors);
        this.props.onSwatchHover && this.props.onSwatchHover(colors, event);
      }
    }

    render() {
      const optionalEvents = {};
      if (this.props.onSwatchHover) {
        optionalEvents.onSwatchHover = this.handleSwatchHover;
      }

      let isColorSetted = this.state.hasOwnProperty('color');
      const isChanging = this.state.hasOwnProperty('change');

      if (isColorSetted === false) {
        if (!isChanging && (this.state.hasOwnProperty('hex')
          && this.props.hasOwnProperty('color') && this.props.color !== this.state.hex)) {
          // eslint-disable-next-line react/no-direct-mutation-state
          this.state.color = this.props.color;
        }
      }

      if (isChanging) {
        delete this.state.change;
      }

      isColorSetted = this.state.hasOwnProperty('color');
      if (isColorSetted) {
        if (this.state.color === '') {
          // eslint-disable-next-line react/no-direct-mutation-state
          this.state = {
            ...this.state,
            ...COLOR_EMPTY
          };
          if (isChanging) {
            isColorSetted = false;
          }
        } else {
          // eslint-disable-next-line react/no-direct-mutation-state
          this.state = {
            ...this.state,
            ...color.toState(this.state.color, 0),
          };
        }
        delete this.state.color;
      }
      this.props.color = this.state.hex;

      return (
        <Picker
          {...this.props}
          {...this.state}
          isColorSetted={isColorSetted}
          onChange={this.handleChange}
          {...optionalEvents}
          ref={c => (this.inner = c)}
        />
      );
    }
  }

  ColorPicker.propTypes = {
    ...Picker.propTypes,
  };

  ColorPicker.defaultProps = {
    ...Picker.defaultProps
  };

  return ColorPicker;
};

export default ColorWrap;
