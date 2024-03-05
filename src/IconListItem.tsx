import * as React from 'react'
import * as FontIcon from 'react-icons/fa'
import * as CSS from 'csstype'
import { IconList } from '.'

interface IconPickerItemProps {
  icon: IconList
  size?: number
  color?: string
  onClick?: (icon: string) => void
  containerStyles?: CSS.Properties
  disabled: boolean
}

const IconPickerItem: React.SFC<IconPickerItemProps> = ({
  icon,
  size,
  color,
  onClick,
  disabled,
  containerStyles,
}) => {
  const iconDiv = !!icon ? React.createElement(FontIcon[icon]) : <div />
  return (
    <div
      onClick={() => !!onClick && onClick(icon)}
      style={{ fontSize: size, color: color, padding: 2, backgroundColor: disabled ? 'lightgray' : null, ...containerStyles }}
    >
      {iconDiv}
    </div>
  )
}

IconPickerItem.defaultProps = {
  color: '#000',
  size: 24,
  onClick: (_: string) => {},
}

export { IconPickerItem }
