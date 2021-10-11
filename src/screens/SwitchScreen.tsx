import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import { TitleHeader } from '../components/TitleHeader';

interface State {
  isActive: boolean,
  isHungry: boolean,
  isHappy : boolean
}

export const SwitchScreen = () => {
  
  const [state, setState] = useState<State>({
    isActive: false,
    isHungry: false,
    isHappy: false
  });

  const onChange = (value: boolean, field: keyof State) => {
    setState({
      ...state,
      [field]: value
    });
  }

  const {isActive, isHungry, isHappy} =  state;

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <TitleHeader title={'Switch Component'}/>
        <View style={styles.switchRow}>
          <Text style={{color: 'black', fontSize: 20}}>isActive: </Text>
          <CustomSwitch isToggle={isActive} onChange={ (value) => onChange(value, 'isActive') } />
        </View>
        <View style={styles.switchRow}>
          <Text style={{color: 'black', fontSize: 20}}>isHungry: </Text>
          <CustomSwitch isToggle={isHungry} onChange={ (value) => onChange(value, 'isHungry') } />
        </View>
        <View style={styles.switchRow}>
          <Text style={{color: 'black', fontSize: 20}}>isHappy: </Text>
          <CustomSwitch isToggle={isHappy} onChange={ (value) => onChange(value, 'isHappy') } />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={{fontSize: 30}}>
          {JSON.stringify(state, null, 5)}
        </Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  switchContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0A23B',
    borderColor: 'white'
  },
  switchRow: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginVertical: 5
  },
  textContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5856D6',
    borderColor: 'white'
  },
})
