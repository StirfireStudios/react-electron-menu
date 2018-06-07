'use strict';

var MenuItem = require('./MenuItem');
var WindowMenu = require('./WindowMenu');
var PopupMenu = require('./PopupMenu');
var Provider = require('./Provider');
var DefaultFileMenu = require('./DefaultFileMenu');
var DefaultEditMenu = require('./DefaultEditMenu');
var DefaultWindowMenu = require('./DefaultWindowMenu');

module.exports = {
    Provider: Provider,
    MenuItem: MenuItem,
    // Menu types
    WindowMenu: WindowMenu,
    PopupMenu: PopupMenu,
    // Default menus
    DefaultFileMenu: DefaultFileMenu,
    DefaultEditMenu: DefaultEditMenu,
    DefaultWindowMenu: DefaultWindowMenu
};