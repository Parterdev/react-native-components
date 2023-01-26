import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from '@rneui/themed';
import { ThemeContext } from '../context/theme/ThemeContext';

export const ItemDivider = () => {

  const {theme: {dividerColor}} = useContext(ThemeContext);

  return (
    <View style={{marginVertical: 10}}>
      <Divider style={{backgroundColor: dividerColor, height: 2}} 
      />
    </View>
  )
}
