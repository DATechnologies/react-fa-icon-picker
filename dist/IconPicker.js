var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled from 'styled-components';
import { IconPickerItem, iconListBranch, iconListRegular, iconListSolid } from '.';
import { useState, useEffect, useRef } from 'react';
var IconPicker = function (_a) {
    var value = _a.value, onChange = _a.onChange, hideSearch = _a.hideSearch, containerStyles = _a.containerStyles, buttonStyles = _a.buttonStyles, buttonIconStyles = _a.buttonIconStyles, pickerIconStyles = _a.pickerIconStyles, searchInputStyles = _a.searchInputStyles, hideBranchIcons = _a.hideBranchIcons, hideSolidIcons = _a.hideSolidIcons, hideRegularIcons = _a.hideRegularIcons, className = _a.className;
    var ref = useRef(null);
    var _b = useState(false), display = _b[0], changeDisplay = _b[1];
    var _c = useState(''), searchString = _c[0], setSearchString = _c[1];
    var _d = useState([]), iconList = _d[0], setIconList = _d[1];
    useEffect(function () {
        function handleClickOutside(event) {
            // @ts-ignore
            if (ref.current && !ref.current.contains(event.target)) {
                changeDisplay(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
    useEffect(function () {
        var icons = [];
        if (!hideBranchIcons) {
            icons = icons.concat(iconListBranch);
        }
        if (!hideSolidIcons) {
            icons = icons.concat(iconListSolid);
        }
        if (!hideRegularIcons) {
            icons = icons.concat(iconListRegular);
        }
        setIconList(icons);
    }, [hideBranchIcons, hideSolidIcons, hideRegularIcons]);
    var buttonClick = function () { return changeDisplay(!display); };
    var onChangeSearch = function (event) {
        setSearchString(event.target.value);
    };
    return (React.createElement(Container, { style: buttonStyles, ref: ref, onClick: function () { return buttonClick(); }, className: "iconpicker-container" },
        React.createElement(IconPickerItem, { containerStyles: buttonIconStyles, icon: value }),
        display && (React.createElement(PickerContainer, { className: "iconpicker-pickercontainer" + (className ? " " + className : ""), style: containerStyles, onClick: function (e) { return e.stopPropagation(); } },
            !hideSearch && (React.createElement(AppInput, { style: searchInputStyles, onChange: onChangeSearch, value: searchString, placeholder: "Search" })),
            iconList
                .filter(function (i) {
                return i.toLowerCase().includes(searchString.toLowerCase());
            })
                .map(function (icon) { return (React.createElement(IconPickerItem, { key: icon, icon: icon, containerStyles: pickerIconStyles, onClick: function (value) {
                    onChange(value);
                    changeDisplay(false);
                    setSearchString('');
                } })); })))));
};
IconPicker.defaultProps = {
    hideSearch: false,
};
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  padding: 5px;\n  width: 50px;\n  min-height: 40px;\n  border-radius: 4px;\n  border-width: 1px;\n  border-color: #000;\n  border-style: solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  position: relative;\n  padding: 5px;\n  width: 50px;\n  min-height: 40px;\n  border-radius: 4px;\n  border-width: 1px;\n  border-color: #000;\n  border-style: solid;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  :hover {\n    cursor: pointer;\n  }\n"])));
var PickerContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 45px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  background-color: #fff;\n  padding: 5px;\n  width: 200px;\n  max-height: 300px;\n  border-radius: 4px;\n  border-width: 2px;\n  border-color: #000;\n  border-style: solid;\n  z-index: 10;\n"], ["\n  position: absolute;\n  top: 45px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  overflow-y: scroll;\n  background-color: #fff;\n  padding: 5px;\n  width: 200px;\n  max-height: 300px;\n  border-radius: 4px;\n  border-width: 2px;\n  border-color: #000;\n  border-style: solid;\n  z-index: 10;\n"])));
var AppInput = styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
export { IconPicker };
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=IconPicker.js.map