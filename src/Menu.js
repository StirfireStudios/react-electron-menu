import React from 'react';
import PropTypes from 'prop-types';
import { renderToMenu } from './render';

/**
 * Component to render a menu.
 * @type {ReactClass}
 */
class Menu extends React.Component {

    /**
     * Get current menu.
     * @return {Menu}
     */
    getMenu() {
        const { electron } = this.context;
        const { children } = this.props;
        this.menu = renderToMenu(<div>{children}</div>, electron);

        return this.menu;
    }

    render() {
        return null;
    }
}

Menu.propTypes = {
    children: PropTypes.node.isRequired
};

Menu.contextTypes = {
    electron: PropTypes.object.isRequired
};

module.exports = Menu;