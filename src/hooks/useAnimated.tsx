import { useRef } from "react"
import { Animated, Easing, PanResponder } from "react-native"



export const useAnimated = (opacity:number = 0) => {
  //Initial opacity reference

  //To opacity
  const opacityValue = useRef(new Animated.Value(opacity)).current;
  
  //To animate
  const topDrop = useRef(new Animated.Value(0)).current;

  
  const startMoving = (initialPosition:number, duration:number = 1000) => {
    
    topDrop.setValue(initialPosition);

    Animated.timing(
      topDrop,
      {
        toValue: 0,
        duration: duration,
        useNativeDriver: true,
        easing: Easing.bounce
      }
    ).start()
  }

  const stopMoving = (finalPosition:number, duration:number = 500) => {
    Animated.timing(
      topDrop,
      {
        toValue: finalPosition,
        duration: duration,
        useNativeDriver: true
      }
    ).start()
  }
  
  //To fadeIn any element or container
  const fadeIn = (callback?: Function) => {
    Animated.timing(
      opacityValue,
      {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }
    ).start(() => callback ? callback : null)
  }

  //To fadeOut any element or container
  const fadeOut = () => {
    Animated.timing(
      opacityValue,
      {
        toValue: 0,
        duration: 800,
        useNativeDriver: true
      }
    ).start()
  }

  return {
    fadeIn,
    fadeOut, 
    opacityValue,
    topDrop,
    startMoving,
    stopMoving
  }

}