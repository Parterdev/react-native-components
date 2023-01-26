import React, { useContext, useState } from 'react'
import { Dimensions, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { ThemeContext } from '../context/theme/ThemeContext';
import { FadeInImage } from '../components/FadeInImage';

const {width: screenWidth } = Dimensions.get('window');

export const SliderScreen = () => {

  const {theme: {colors}} = useContext(ThemeContext);
  const [sliderValue, setSliderValue] = useState(0);

  const rangeOpacity = () => Math.floor(sliderValue*100) + 220

  return (
    <SafeAreaView style={{...styles.container, backgroundColor: colors.background}}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={{...styles.title, opacity: sliderValue}}>I'm Mr. Boo</Text>
        <FadeInImage 
          uri={`https://www.pngmart.com/files/13/Super-Mario-Bros-King-Boo-Transparent-Images-PNG.png`}
          style={{...styles.img, height: rangeOpacity(), width: rangeOpacity()}}
        />
        <Slider 
          style={{ width: screenWidth - 100 }}
          minimumValue={0}
          maximumValue={1}
          onValueChange={setSliderValue}
        />
        <Text style={{ color: 'white', fontSize: 25, fontFamily: 'MrRobot', }}>
          {Math.floor(sliderValue*100)}%
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    color: '#df2d2f', 
    fontSize: 50, 
    fontFamily: 'MrRobot',
  },
  scrollContainer: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'pink', 
    justifyContent: 'center', 
  },
  img: {
    marginBottom: 50,
    // backgroundColor: 'red',
  }
});
