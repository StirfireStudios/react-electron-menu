'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Menu2 = require('./Menu');

var _Menu3 = _interopRequireDefault(_Menu2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Menu that only render for current window.
 * @type {ReactClass}
 */
var WindowMenu = function (_Menu) {
    _inherits(WindowMenu, _Menu);

    function WindowMenu(props, context) {
        _classCallCheck(this, WindowMenu);

        var _this = _possibleConstructorReturn(this, (WindowMenu.__proto__ || Object.getPrototypeOf(WindowMenu)).call(this, props, context));

        _this.onFocus = _this.onFocus.bind(_this);
        _this.onBlur = _this.onBlur.bind(_this);
        return _this;
    }

    _createClass(WindowMenu, [{
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
        value: function componentWillUnmount() {
            var electron = this.context.electron;

            var win = electron.remote.getCurrentWindow();

            if (win) {
                this.clearListeners(win);
                if (win.isFocused()) this.onBlur();
            }
        }

        /**
         * Clear listener for a window.
         * @param {Window} win
         */

    }, {
        key: 'clearListeners',
        value: function clearListeners(win) {
            win.removeListener('focus', this.onFocus);
            win.removeListener('blur', this.onBlur);
        }

        /**
         * Update the menu for the window.
         */

    }, {
        key: 'onMenuUpdated',
        value: function onMenuUpdated() {
            var electron = this.context.electron;

            var win = electron.remote.getCurrentWindow();

            if (!win) {
                return;
            }

            this.clearListeners(win);

            win.on('focus', this.onFocus);
            win.on('blur', this.onBlur);

            if (win.isFocused() || document.hasFocus()) {
                this.onFocus();
            }
        }

        /**
         * When window is focused.
         */

    }, {
        key: 'onFocus',
        value: function onFocus() {
            var electron = this.context.electron;

            var menu = this.getMenu();

            electron.remote.Menu.setApplicationMenu(menu);
        }

        /**
         * When window is focused.
         */

    }, {
        key: 'onBlur',
        value: function onBlur() {
            var electron = this.context.electron;

            var currentMenu = electron.remote.Menu.getApplicationMenu();

            if (currentMenu == this.menu) {
                electron.remote.Menu.setApplicationMenu(null);
            }
        }
    }]);

    return WindowMenu;
}(_Menu3.default);

WindowMenu.contextTypes = _Menu3.default.contextTypes;

module.exports = WindowMenu;