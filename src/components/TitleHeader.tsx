import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/theme/ThemeContext';
import { styles } from '../theme/appTheme'

interface Props {
  text: string,
}


export const TitleHeader = ({text}:Props) => {
  //To fix top element in IOS
  const {top} = useSafeAreaInsets();

  const {theme: {colors}} = useContext(ThemeContext);

  return (
    <View style={{marginTop: top + 10, marginBottom: 10}}>
      <Text style={{...styles.textTitle, color:colors.text, fontFamily: 'MrRobot' }}>{text}</Text>
    </View>
  )
}

