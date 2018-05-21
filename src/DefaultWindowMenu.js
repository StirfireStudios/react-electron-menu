import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

/**
 * Default window menu to control the window.
 * @type {ReactClass}
 */
class DefaultWindowMenu extends React.Component {
    render() {
        const { children } = this.props;
        const { electron } = this.context;
        const os = electron.remote.require('os');
        const isMac = (os.platform() == 'darwin');

        return (
            <MenuItem role="window">
                <MenuItem role="minimize" />
                {children}
                {isMac ? <MenuItem.Separator /> : null}
                {isMac ? <MenuItem role="front" /> : null}
            </MenuItem>
        );
    }
}

DefaultWindowMenu.propTypes = {
    children: PropTypes.node,
};

DefaultWindowMenu.contextTypes = {
    electron: PropTypes.object.isRequired
};

module.exports = DefaultWindowMenu;