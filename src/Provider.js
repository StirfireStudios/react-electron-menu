import React from 'react';
import PropTypes from 'prop-types';

const FAKE_ELECTRON = {
    remote: {
        Menu: () => ({ items: [] }),
        MenuItem: () => ({}),
        getCurrentWindow: () => null
    }
};

/**
 * Provide electron API to children so that this module
 * can also work in web application.
 *
 * @type {ReactClass}
 */
class Provider extends React.Component {
    getChildContext() {
        const { electron } = this.props;

        return {
            electron
        };
    }

    render() {
        const { children } = this.props;
        return React.Children.only(children);
    }
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
    electron: PropTypes.object.isRequired
};

Provider.defaultProps = {
    electron: FAKE_ELECTRON
};

Provider.childContextTypes = {
    electron: PropTypes.object.isRequired
};

module.exports = Provider;