import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemeContext } from '../context/theme/ThemeContext'
import { TitleHeader } from '../components/TitleHeader';
import { ButtonIcon } from '../components/ButtonIcon';

export const ThemeScreen = () => {

  const {setDarkTheme, setLightTheme, theme: {colors}} = useContext(ThemeContext);

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <TitleHeader text={'Theme Screen'} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <ButtonIcon
          text='Light' 
          iconName='sunny-outline'
          action={() => setLightTheme()}
        />
        <ButtonIcon
          text='Dark' 
          iconName='moon-outline'
          action={() => setDarkTheme()}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
})
