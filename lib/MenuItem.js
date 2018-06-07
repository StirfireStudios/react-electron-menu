'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TYPES = {
    NORMAL: 'normal',
    RADIO: 'radio',
    CHECKBOX: 'checkbox',
    SEPARATOR: 'separator',
    SUBMENU: 'submenu'
};

/**
 * Component to render a menu item.
 * @type {ReactClass}
 */

var MenuItem = function (_React$Component) {
    _inherits(MenuItem, _React$Component);

    function MenuItem() {
        _classCallCheck(this, MenuItem);

        return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
    }

    _createClass(MenuItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                props = _objectWithoutProperties(_props, ['children']);

            return _react2.default.createElement(
                'menu-item',
                props,
                children
            );
        }
    }]);

    return MenuItem;
}(_react2.default.Component);

MenuItem.TYPES = TYPES;
MenuItem.Separator = function () {
    return _react2.default.createElement(MenuItem, { type: TYPES.SEPARATOR });
};

MenuItem.propTypes = {
    label: _propTypes2.default.string,
    role: _propTypes2.default.string,
    type: _propTypes2.default.string,
    accelerator: _propTypes2.default.string,
    icon: _propTypes2.default.string,
    checked: _propTypes2.default.bool,
    enabled: _propTypes2.default.bool,
    onClick: _propTypes2.default.func,
    children: _propTypes2.default.node
};

MenuItem.contextTypes = {
    electron: _propTypes2.default.object.isRequired
};

module.exports = MenuItem;