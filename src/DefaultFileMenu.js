import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

/**
 * Default file menu for the application.
 * @type {ReactClass}
 */
class DefaultFileMenu extends React.Component {
    render() {
        const { appName, children, onAbout } = this.props;
        const { electron } = this.context;
        const os = electron.remote.require('os');
        const isMac = (os.platform() == 'darwin');

        return (
            <MenuItem id="file" label={appName}>
                <MenuItem
                    label={`About ${appName}`}
                    selector="orderFrontStandardAboutPanel"
                    onClick={onAbout}
                    role="about"
                    />
                {children}
                <MenuItem role="toggledevtools" />
                {isMac ? <MenuItem.Separator /> : null}
                {isMac ? <MenuItem label="Services" submenu={[]} /> : null}
                {isMac ? <MenuItem.Separator /> : null}
                {isMac ? <MenuItem role="close"/> : null}
                {isMac ? <MenuItem role="hide" /> : null}
                {isMac ? <MenuItem role="hideothers"/> : null}
                {isMac ? <MenuItem role="unhide"/> : null}
                {isMac ? <MenuItem.Separator /> : null}
                <MenuItem role="quit" />
            </MenuItem>
        );
    }
}

DefaultFileMenu.propTypes = {
    appName:  PropTypes.string.isRequired,
    onAbout:  PropTypes.func.isRequired,
    children: PropTypes.node
};

DefaultFileMenu.contextTypes = {
    electron: PropTypes.object.isRequired
};

module.exports = DefaultFileMenu;