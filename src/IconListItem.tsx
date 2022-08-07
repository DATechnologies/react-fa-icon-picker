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
  className?: string
}

const IconPickerItem: React.SFC<IconPickerItemProps> = ({
  icon,
  size,
  color,
  onClick,
  containerStyles,
  className
}) => {
  const iconDiv = !!icon && FontIcon[icon] ? React.createElement(FontIcon[icon]) : (icon?React.createElement(FontIcon['FaQuestion']):<div/>)
  return (
    <div className={"iconpicker-item" +  (className?" " + className:"")}
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
