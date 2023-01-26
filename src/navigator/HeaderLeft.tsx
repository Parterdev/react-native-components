import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import { Icon } from '@rneui/themed';

export type RootStackParamList = {
  Home: undefined,
}

export const HeaderLeft = () => {
  
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Home")}
      style={{ opacity: 1}}                                                                                                                                                                                                                                                                              
    >
      <View style={styles.container}>                                                                                                                   
        <Icon
          name='logo-react'
          type='ionicon'
          color='#61dbfb'
          size={30}
        />
    </View>
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderTopEndRadius: 25,
    borderBottomEndRadius: 25,
  },
})
