import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface Props {
  title: string,
  badgeColor?: string,
  textColor?: string,
}

export const Badge = ({
  title, 
  badgeColor = '#FFCC00', 
  textColor = 'white'
}:Props) => {
  return (
    <View style={{...styles.container, backgroundColor: badgeColor}}>
      <Text style={{ color: textColor}}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'white',
    bottom: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    padding: 3,
  }
});
