'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Default window menu to control the window.
 * @type {ReactClass}
 */
var DefaultWindowMenu = function (_React$Component) {
    _inherits(DefaultWindowMenu, _React$Component);

    function DefaultWindowMenu() {
        _classCallCheck(this, DefaultWindowMenu);

        return _possibleConstructorReturn(this, (DefaultWindowMenu.__proto__ || Object.getPrototypeOf(DefaultWindowMenu)).apply(this, arguments));
    }

    _createClass(DefaultWindowMenu, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;
            var electron = this.context.electron;

            var os = electron.remote.require('os');
            var isMac = os.platform() == 'darwin';

            return _react2.default.createElement(
                _MenuItem2.default,
                { role: 'window' },
                _react2.default.createElement(_MenuItem2.default, { role: 'minimize' }),
                children,
                isMac ? _react2.default.createElement(_MenuItem2.default.Separator, null) : null,
                isMac ? _react2.default.createElement(_MenuItem2.default, { role: 'front' }) : null
            );
        }
    }]);

    return DefaultWindowMenu;
}(_react2.default.Component);

DefaultWindowMenu.propTypes = {
    children: _propTypes2.default.node
};

DefaultWindowMenu.contextTypes = {
    electron: _propTypes2.default.object.isRequired
};

module.exports = DefaultWindowMenu;