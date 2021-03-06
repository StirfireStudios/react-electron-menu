'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Menu2 = require('./Menu');

var _Menu3 = _interopRequireDefault(_Menu2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Menu shown at a specific position.
 * @type {ReactClass}
 */
var PopupMenu = function (_Menu) {
    _inherits(PopupMenu, _Menu);

    function PopupMenu() {
        _classCallCheck(this, PopupMenu);

        return _possibleConstructorReturn(this, (PopupMenu.__proto__ || Object.getPrototypeOf(PopupMenu)).apply(this, arguments));
    }

    _createClass(PopupMenu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.onMenuUpdated();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.onMenuUpdated();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'onMenuUpdated',
        value: function onMenuUpdated() {
            var _props = this.props,
                x = _props.x,
                y = _props.y;
            var electron = this.context.electron;

            var win = electron.remote.getCurrentWindow();

            if (!win) {
                return;
            }

            var menu = this.getMenu();
            menu.popup(win, x, y);
        }
    }]);

    return PopupMenu;
}(_Menu3.default);

PopupMenu.propTypes = _extends({}, _Menu3.default.propTypes, {
    x: _propTypes2.default.number,
    y: _propTypes2.default.number
});

PopupMenu.contextTypes = _Menu3.default.contextTypes;

module.exports = PopupMenu;