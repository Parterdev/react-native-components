import React, { useContext, useState } from 'react'
import { Switch, Platform } from 'react-native'
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
  isToggle: boolean,
  onChange: (value:boolean) => void,
}

export const CustomSwitch = ({isToggle, onChange}:Props) => {

  const [isEnabled, setIsEnabled] = useState(isToggle);
  const {theme: {colors}} = useContext(ThemeContext);
  
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  }


  return (
    <Switch
      trackColor={{ false: "##D9D9DB", true: colors.primary }}
      thumbColor={(Platform.OS === 'android' ? 'white' : '')}
      ios_backgroundColor='#f4f3f4'
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  )
}

