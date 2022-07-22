import * as React from 'react';
import * as CSS from 'csstype';
import { IconList } from '.';
interface IconPickerItemProps {
    icon: IconList;
    size?: number;
    color?: string;
    onClick?: (icon: string) => void;
    containerStyles?: CSS.Properties;
}
declare const IconPickerItem: React.SFC<IconPickerItemProps>;
export { IconPickerItem };
