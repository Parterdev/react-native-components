import React, { useContext } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native';
import { Button } from 'react-native-elements';
import { ButtonIcon } from '../components/ButtonIcon';
import { ThemeContext } from '../context/theme/ThemeContext';
import { useAnimated } from '../hooks/useAnimated';

export const Animation101Screen = () => {

  const {opacityValue, fadeIn, fadeOut, topDrop, startMoving, stopMoving} = useAnimated(0.4);
  const {theme: {colors}} = useContext(ThemeContext);


  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <Animated.View style={{
        ...styles.purpleBox, opacity: opacityValue,
        transform: [{
          translateY: topDrop
        }]
      }} />
      <View style={styles.buttonFooter}>
        <ButtonIcon
          text='FadeIn' 
          iconName='eyedrop-outline'
          action={() => {
            fadeIn();
            startMoving(-500)
          }}
        />
        <ButtonIcon
          text='FadeOut' 
          iconName='log-out-outline'
          action={() => {
            fadeOut();
            stopMoving(-500)
          }}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: 'indigo',
    borderRadius: 10,
    width: 150,
    height: 150
  },
  buttonFooter: {
    marginVertical: 5,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    flexDirection: 'column'
  }
})
