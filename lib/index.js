'use strict';

const getDisplayName = function (Component) {
    if (typeof Component === 'string') {
        return Component;
    }

    if (!Component) {
        return undefined;
    }

    return Component.displayName || Component.name || 'Component';
};

const wrapDisplayName = function (BaseComponent, hocName) {
    // eslint-disable-next-line prefer-template
    return hocName + '(' + getDisplayName(BaseComponent) + ')';
};

module.exports = wrapDisplayName;
