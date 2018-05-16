var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';

var NotifyPopup = function (_React$Component) {
    _inherits(NotifyPopup, _React$Component);

    function NotifyPopup() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NotifyPopup);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NotifyPopup.__proto__ || Object.getPrototypeOf(NotifyPopup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            isVisible: _this.props.isVisible
        }, _this._handleClosePopup = function () {
            if (_this.props.isDisabled) {
                return false;
            }

            _this.setState({ isVisible: false });
        }, _this._onClick = function () {
            if (_this.props.isDisabled) {
                return false;
            }

            _this.props.onClick();
            return true;
        }, _this._getStyleByType = function () {
            var style = {
                bgClass: '',
                color: ''
            };
            switch (_this.props.type) {
                case 'success':
                    style.bgClass = 'bg-success';
                    style.color = 'green';
                    break;
                case 'infor':
                    style.bgClass = 'bg-infor';
                    style.color = 'blue';
                    break;

                default:
                    style.bgClass = 'bg-danger';
                    style.color = 'red';
            }
            return style;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(NotifyPopup, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref2) {
            var isVisible = _ref2.isVisible;

            this.setState({ isVisible: isVisible });
        }
    }, {
        key: '_getClassName',
        value: function _getClassName() {

            var className = ['kuc-notify', this.state.isVisible === false ? '' : 'show', this._getStyleByType().bgClass];
            return className.join(' ').trim();
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: this._getClassName() },
                    React.createElement(
                        'div',
                        {
                            className: 'kuc-notify-title',
                            onClick: this._onClick
                        },
                        this.props.text
                    ),
                    React.createElement(
                        'div',
                        { className: 'kuc-close-button' },
                        React.createElement(IconButton, {
                            onClick: this._handleClosePopup,
                            type: 'close',
                            color: this._getStyleByType().color
                        })
                    )
                )
            );
        }
    }]);

    return NotifyPopup;
}(React.Component);

NotifyPopup.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    isVisible: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    onChange: PropTypes.func
};
NotifyPopup.defaultProps = {
    onClick: function onClick(f) {
        return f;
    }
};
export default NotifyPopup;