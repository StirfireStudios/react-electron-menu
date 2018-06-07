'use strict';

/*
    The method of using react-test-renderer is really bad,
    but I don't know another one.
 */
var React = require('react');
var ReactTestRenderer = require('react-test-renderer');
var Provider = require('./Provider');

/**
 * Render a set of react children to a menu
 * @param  {ReactElement} el
 * @param  {Object} electron
 * @return {Menu} menu?
 */
function renderToMenu(el, electron) {
    var Menu = electron.remote.Menu;


    var renderer = ReactTestRenderer.create(React.createElement(
        Provider,
        { electron: electron },
        el
    ));
    var json = renderer.toJSON();

    var children = json.children;
    var template = jsonToMenu(children);

    return Menu.buildFromTemplate(template);
}

/**
 * Convert an array of json from ReactTestRenderer into a menu template
 * @param {JSON} json
 * @return {Object} menuItem?
 */
function jsonToMenu(json) {
    return json.map(function (o) {
        return jsonToMenuItem(o);
    }).filter(function (o) {
        return Boolean(o);
    });
}

/**
 * Convert a json from ReactTestRenderer into a menu item template.
 * @param {JSON} json
 * @return {Object} menuItem?
 */
function jsonToMenuItem(json) {
    if (json.type != 'menu-item') {
        return null;
    }

    var item = json.props;

    item.click = item.onClick;
    delete item.onClick;

    item.submenu = item.submenu || (json.children ? jsonToMenu(json.children) : undefined);

    return item;
}

module.exports = {
    renderToMenu: renderToMenu
};