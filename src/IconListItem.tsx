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
}

const IconPickerItem: React.FC<IconPickerItemProps> = ({
  icon,
  size,
  color,
  onClick,
  containerStyles,
}) => {
  const iconDiv = !!icon ? React.createElement((FontIcon as any)[icon] ) : <div />
  return (
    <div
      onClick={() => !!onClick && onClick(icon)}
      style={{ fontSize: size, color: color, padding: 2, ...containerStyles }}
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
