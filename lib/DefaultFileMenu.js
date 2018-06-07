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
 * Default file menu for the application.
 * @type {ReactClass}
 */
var DefaultFileMenu = function (_React$Component) {
    _inherits(DefaultFileMenu, _React$Component);

    function DefaultFileMenu() {
        _classCallCheck(this, DefaultFileMenu);

        return _possibleConstructorReturn(this, (DefaultFileMenu.__proto__ || Object.getPrototypeOf(DefaultFileMenu)).apply(this, arguments));
    }

    _createClass(DefaultFileMenu, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                appName = _props.appName,
                children = _props.children,
                onAbout = _props.onAbout;
            var electron = this.context.electron;

            var os = electron.remote.require('os');
            var isMac = os.platform() == 'darwin';

            return _react2.default.createElement(
                _MenuItem2.default,
                { id: 'file', label: appName },
                _react2.default.createElement(_MenuItem2.default, {
                    label: 'About ' + appName,
                    selector: 'orderFrontStandardAboutPanel',
                    onClick: onAbout,
                    role: 'about'
                }),
                children,
                _react2.default.createElement(_MenuItem2.default, { role: 'toggledevtools' }),
                isMac ? _react2.default.createElement(_MenuItem2.default.Separator, null) : null,
                isMac ? _react2.default.createElement(_MenuItem2.default, { label: 'Services', submenu: [] }) : null,
                isMac ? _react2.default.createElement(_MenuItem2.default.Separator, null) : null,
                isMac ? _react2.default.createElement(_MenuItem2.default, { role: 'close' }) : null,
                isMac ? _react2.default.createElement(_MenuItem2.default, { role: 'hide' }) : null,
                isMac ? _react2.default.createElement(_MenuItem2.default, { role: 'hideothers' }) : null,
                isMac ? _react2.default.createElement(_MenuItem2.default, { role: 'unhide' }) : null,
                isMac ? _react2.default.createElement(_MenuItem2.default.Separator, null) : null,
                _react2.default.createElement(_MenuItem2.default, { role: 'quit' })
            );
        }
    }]);

    return DefaultFileMenu;
}(_react2.default.Component);

DefaultFileMenu.propTypes = {
    appName: _propTypes2.default.string.isRequired,
    onAbout: _propTypes2.default.func.isRequired,
    children: _propTypes2.default.node
};

DefaultFileMenu.contextTypes = {
    electron: _propTypes2.default.object.isRequired
};

module.exports = DefaultFileMenu;