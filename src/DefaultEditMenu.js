import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

/**
 * Default edit menu for the application.
 * @type {ReactClass}
 */
class Menu extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <MenuItem id="edit" label="Edit">
                <MenuItem role="undo" />
                <MenuItem role="redo" />
                <MenuItem.Separator />
                <MenuItem role="cut" />
                <MenuItem role="copy" />
                <MenuItem role="paste" />
                <MenuItem role="pasteandmatchstyle" />
                <MenuItem role="delete" />
                <MenuItem role="selectall" />
                {children}
            </MenuItem>
        );
    }
}

Menu.propTypes = {
    children: PropTypes.node.isRequired
};

Menu.contextTypes = {
    electron: PropTypes.object.isRequired
};

module.exports = Menu;
