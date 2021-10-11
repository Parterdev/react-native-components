import React, { useContext } from 'react'
import { StyleSheet, Text, View , Alert} from 'react-native'
import { Button } from 'react-native-elements'
import prompt from 'react-native-prompt-android'
import { ThemeContext } from '../context/theme/ThemeContext'

export const AlertScreen = () => {

  const {theme: {colors}} = useContext(ThemeContext);

  const showAlert = () => {
    Alert.alert(
      'Alert title',
      'Alert detail msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel has been pressed'),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => console.log('OK has been pressed'),
        },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('This alert was dismissed by tapping outside of alert') 
      }
    )
  }

  //Only available in iOS
  const showPrompt = () => {
    Alert.prompt(
      '¿Are you sure?',
      'This action is very important',
      (value: string) => console.log('info', value),
      'plain-text',
      'Type your number...',
      'numeric'
    )
  }

  //Prompt to Android and iOS
  const showGenericPrompt = () => {
    prompt(
      '¿Are you sure?',
      'This action is very important, plase type your number here',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel prompt pressed'), style: 'cancel'},
        {text: 'OK', onPress: value => console.log('OK Pressed, number: ' + value)},
      ],
      {
          type: 'phone-pad',
          cancelable: false,
          defaultValue: 'XXXXXXXXX',
          placeholder: 'Type your number...'
      }
    );
  }

  

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <View style={styles.buttonFooter}>
        <Button buttonStyle={{marginRight: 10}}
          title='Show alert'
          onPress={showAlert}
        />
        <Button
          title='Show Prompt'
          onPress={showGenericPrompt}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonFooter: {
    marginVertical: 5,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    //backgroundColor: 'red', 
    flexDirection: 'row'
  }
})
