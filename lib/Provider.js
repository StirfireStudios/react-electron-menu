'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FAKE_ELECTRON = {
    remote: {
        Menu: function Menu() {
            return { items: [] };
        },
        MenuItem: function MenuItem() {
            return {};
        },
        getCurrentWindow: function getCurrentWindow() {
            return null;
        }
    }
};

/**
 * Provide electron API to children so that this module
 * can also work in web application.
 *
 * @type {ReactClass}
 */

var Provider = function (_React$Component) {
    _inherits(Provider, _React$Component);

    function Provider() {
        _classCallCheck(this, Provider);

        return _possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
    }

    _createClass(Provider, [{
        key: 'getChildContext',
        value: function getChildContext() {
            var electron = this.props.electron;


            return {
                electron: electron
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var children = this.props.children;

            return _react2.default.Children.only(children);
        }
    }]);

    return Provider;
}(_react2.default.Component);

Provider.propTypes = {
    children: _propTypes2.default.node.isRequired,
    electron: _propTypes2.default.object.isRequired
};

Provider.defaultProps = {
    electron: FAKE_ELECTRON
};

Provider.childContextTypes = {
    electron: _propTypes2.default.object.isRequired
};

module.exports = Provider;