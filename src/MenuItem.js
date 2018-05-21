import React from 'react';
import PropTypes from 'prop-types';

const TYPES = {
    NORMAL:    'normal',
    RADIO:     'radio',
    CHECKBOX:  'checkbox',
    SEPARATOR: 'separator',
    SUBMENU:   'submenu'
};

/**
 * Component to render a menu item.
 * @type {ReactClass}
 */
class MenuItem extends React.Component {
    render() {
        const { children, ...props } = this.props;
        return (
            <menu-item {...props}>{children}</menu-item>
        );
    }
}

MenuItem.TYPES = TYPES;
MenuItem.Separator = () => <MenuItem type={TYPES.SEPARATOR} />;

MenuItem.propTypes = {
    label:       PropTypes.string,
    role:        PropTypes.string,
    type:        PropTypes.string,
    accelerator: PropTypes.string,
    icon:        PropTypes.string,
    checked:     PropTypes.bool,
    enabled:     PropTypes.bool,
    onClick:     PropTypes.func,
    children:    PropTypes.node
};

MenuItem.contextTypes = {
    electron: PropTypes.object.isRequired
};

module.exports = MenuItem;