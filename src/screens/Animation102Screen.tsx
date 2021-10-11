import React, { useContext, useRef } from 'react'
import { Animated, PanResponder, StyleSheet, View } from 'react-native'
import { ThemeContext } from '../context/theme/ThemeContext';

export const Animation102Screen = () => {

  //To animate valueXY
  const panAnimate = useRef(new Animated.ValueXY()).current;

  const {theme: {colors}} = useContext(ThemeContext);

  const panAnimateResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {dx: panAnimate.x, dy: panAnimate.y}
    ],
    {useNativeDriver: false}
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        panAnimate,
        { 
          useNativeDriver: false,
          toValue: {x: 0, y: 0}
        }
      ).start()
    },
  });

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <Animated.View {...panAnimateResponder.panHandlers}
        style={[panAnimate.getLayout(), styles.blueBox]}
      >
      </Animated.View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueBox: {
    backgroundColor: '#75CEDB',
    borderRadius: 10,
    width: 150,
    height: 150
  }
})
