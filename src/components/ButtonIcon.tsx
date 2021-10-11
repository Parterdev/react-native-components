import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
  action?: () => void,
  text?: string,
  iconName: string,
}

export const ButtonIcon = ({action, iconName, text}:Props) => {

  const {theme: {colors}} = useContext(ThemeContext);

  return (
    <TouchableOpacity style={{...styles.buttonContainer, backgroundColor: colors.primary}}
      activeOpacity={0.8}
      onPress={action}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Icon
          color='white'
          size={25}
          name={iconName}
        />
        <Text style={{ color: 'white' }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    //alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    borderRadius: 10
  }
})
