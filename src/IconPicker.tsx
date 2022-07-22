import * as React from 'react'
import styled from 'styled-components'
import { IconPickerItem, iconList } from '.'
import { useState, useEffect, useRef } from 'react'
import * as CSS from 'csstype'
import { IconList } from './iconType'

interface IconPickerProps {
  value: IconList
  onChange: (value: IconList) => void
  hideSearch?: boolean
  containerStyles?: CSS.Properties
  buttonStyles?: CSS.Properties
  buttonIconStyles?: CSS.Properties
  pickerIconStyles?: CSS.Properties
  searchInputStyles?: CSS.Properties
}

const IconPicker: React.SFC<IconPickerProps> = ({
  value,
  onChange,
  hideSearch,
  containerStyles,
  buttonStyles,
  buttonIconStyles,
  pickerIconStyles,
  searchInputStyles,
}) => {
  const ref = useRef(null)
  const [display, changeDisplay] = useState(false)
  const [searchString, setSearchString] = useState('')
  useEffect(() => {
    function handleClickOutside(event: any) {
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        changeDisplay(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
  const buttonClick = () => changeDisplay(!display)
  const onChangeSearch = (event: any) => {
    setSearchString(event.target.value)
  }
  return (
    <Container style={buttonStyles} ref={ref} onClick={() => buttonClick()} className={"iconpicker-container"}>
      <IconPickerItem containerStyles={buttonIconStyles} icon={value}/>
      {display && (
        <PickerContainer
          className={"iconpicker-pickercontainer"}
          style={containerStyles}
          onClick={(e) => e.stopPropagation()}
        >
          {!hideSearch && (
            <AppInput
              style={searchInputStyles}
              onChange={onChangeSearch}
              value={searchString}
              placeholder="Search"
            />
          )}
          {iconList
            .filter((i: string) =>
              i.toLowerCase().includes(searchString.toLowerCase())
            )
            .map((icon: IconList) => (
              <IconPickerItem
                key={icon}
                icon={icon}
                containerStyles={pickerIconStyles}
                onClick={(value: IconList) => {
                  onChange(value)
                  changeDisplay(false)
                  setSearchString('')
                }}
              />
            ))}
        </PickerContainer>
      )}
    </Container>
  )
}

IconPicker.defaultProps = {
  hideSearch: false,
}

const Container = styled.div`
  position: relative;
  padding: 5px;
  width: 50px;
  min-height: 40px;
  border-radius: 4px;
  border-width: 1px;
  border-color: #000;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`

const PickerContainer = styled.div`
  position: absolute;
  top: 45px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: scroll;
  background-color: #fff;
  padding: 5px;
  width: 200px;
  max-height: 300px;
  border-radius: 4px;
  border-width: 2px;
  border-color: #000;
  border-style: solid;
  z-index: 10;
`

const AppInput = styled.input`
  width: 100%;
`

export { IconPicker }
