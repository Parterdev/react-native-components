import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { CustomSwitch } from '../components/CustomSwitch'
import { TitleHeader } from '../components/TitleHeader'
import { ThemeContext } from '../context/theme/ThemeContext'
import { useForm } from '../hooks/useForm'

export const TextInputScreen = () => {

  const {theme: {colors}} = useContext(ThemeContext);
    
  const {onChange, form, isSuscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribed: false,
  });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{...styles.container, backgroundColor: colors.background}}>
      <ScrollView style={styles.textInputContainer}>
          <View style={{ alignItems: 'center' }}>
            <TitleHeader title={'Text Input Form'} />
          </View>
          <TextInput
            style={{...styles.textInput, color: colors.text}}
            placeholder="Type your name"
            placeholderTextColor='black'
            autoCapitalize='words'
            onChangeText={(value) => onChange(value, 'name')}
          />
          <TextInput
            style={{...styles.textInput, color: colors.text}}
            placeholder="Type your email"
            placeholderTextColor='black'
            keyboardType="email-address"
            autoCapitalize='none'
            onChangeText={(value) => onChange(value, 'email')}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: colors.text, fontSize: 20 }}>Are you an admin: </Text>
            <CustomSwitch isToggle={isSuscribed} onChange={(value) => onChange(value, 'isSuscribed')} />
          </View>
          
          <TitleHeader title={JSON.stringify(form, null, 3)} />
          

          <TextInput
            style={styles.textInput}
            placeholder="Type your phone"
            placeholderTextColor='black'
            keyboardType="numeric"
            onChangeText={(value) => onChange(value, 'phone')}
          />
          <View style={{height: 100}}></View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputContainer: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  textInput: {
    backgroundColor: '#f6f6f6',
    borderRadius: 5,
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#f6f6f6'
  }
})
