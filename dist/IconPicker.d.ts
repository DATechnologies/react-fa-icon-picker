import * as React from 'react';
import * as CSS from 'csstype';
import { IconList } from './iconType';
interface IconPickerProps {
    value: IconList;
    onChange: (value: IconList) => void;
    hideSearch?: boolean;
    containerStyles?: CSS.Properties;
    buttonStyles?: CSS.Properties;
    buttonIconStyles?: CSS.Properties;
    pickerIconStyles?: CSS.Properties;
    searchInputStyles?: CSS.Properties;
    hideBranchIcons?: boolean;
    hideSolidIcons?: boolean;
    hideRegularIcons?: boolean;
    className?: string;
    placeholder?: string;
}
declare const IconPicker: React.SFC<IconPickerProps>;
export { IconPicker };
