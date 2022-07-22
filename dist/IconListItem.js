var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import * as FontIcon from 'react-icons/fa';
var IconPickerItem = function (_a) {
    var icon = _a.icon, size = _a.size, color = _a.color, onClick = _a.onClick, containerStyles = _a.containerStyles;
    var iconDiv = !!icon ? React.createElement(FontIcon[icon]) : React.createElement("div", null);
    return (React.createElement("div", { className: "iconpicker-item", onClick: function () { return !!onClick && onClick(icon); }, style: __assign({ fontSize: size, color: color, padding: 2 }, containerStyles) }, iconDiv));
};
IconPickerItem.defaultProps = {
    color: '#000',
    size: 24,
    onClick: function (_) { },
};
export { IconPickerItem };
//# sourceMappingURL=IconListItem.js.map