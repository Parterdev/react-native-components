import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ThemeContext } from '../context/theme/ThemeContext'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import { menuItem } from '../interfaces/FlatListMenuItem'
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Spacer } from './Spacer';

interface Props {
  menuItem: menuItem
}


export const FlatListMenuItem = ({menuItem}:Props) => {

  const navigation = useNavigation<StackNavigationProp<any, any>>();

  const {theme: {colors, icons}} = useContext(ThemeContext);

  return (
    <TouchableOpacity activeOpacity={0.5} 
      onPress={() => navigation.navigate(menuItem.route)}>
      <View style={styles.container}>
        <View style={styles.containerList}>
          <Icon
            size={30}
            color={icons.secondary}
            name={menuItem.icon}
          />
          <Text style={{...styles.textList, color: colors.text}}>
            {menuItem.name}
          </Text>
          <Spacer />
          <Icon style={{ backgroundColor: 'transparent' }}
            size={30}
            color={colors.primary}
            name={'chevron-forward-outline'}
          />
        </View>
      </View>
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
  },
  containerList: {
    //backgroundColor: 'pink',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textList: {
    fontSize: 18,
    paddingLeft: 5, 
    color: 'gray'
  }
});

