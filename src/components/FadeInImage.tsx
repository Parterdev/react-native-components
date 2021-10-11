import React, { useContext, useState } from 'react'
import { Animated, StyleSheet, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';
import { useAnimated } from '../hooks/useAnimated';

interface Props {
  uri: string,
  style?: StyleProp<ImageStyle>,
}


export const FadeInImage = ({uri, style}:Props) => {

  const {opacityValue, fadeIn} = useAnimated();
  const [isLoaded, setIsLoaded] = useState(true);

  const {theme: {colors}} = useContext(ThemeContext);

  const finishLoading = () => {
    setIsLoaded(false);
    fadeIn();
  }

  return (
    <View style={styles.container}>
      {
        isLoaded &&  <ActivityIndicator style={{position: 'absolute'}}
          size={50} 
          color={colors.primary}
        />
      }
      <Animated.Image 
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{...style as any, opacity: opacityValue}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', 
    alignItems: 'center', 
    marginHorizontal: 5
  }
})
