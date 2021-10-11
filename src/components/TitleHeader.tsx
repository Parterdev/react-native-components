import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/theme/ThemeContext';
import { styles } from '../theme/appTheme'

interface Props {
  title: string,
}


export const TitleHeader = ({title}:Props) => {
  //To fix top element in IOS
  const {top} = useSafeAreaInsets();

  const {theme: {colors}} = useContext(ThemeContext);

  return (
    <View style={{marginTop: top + 10, marginBottom: 10}}>
      <Text style={{...styles.textTitle, color:colors.text}}>{title}</Text>
    </View>
  )
}

