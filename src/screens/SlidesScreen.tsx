import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext, useState } from 'react'
import { Dimensions, StyleSheet, Text, View, SafeAreaView, Image, Animated } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useAnimated } from '../hooks/useAnimated';
import { useRef } from 'react';
import { items, Slide } from '../data/slidesScreenItems';
import { ButtonIcon } from '../components/ButtonIcon';
import { ThemeContext } from '../context/theme/ThemeContext';


const {width: screenWidth } = Dimensions.get('window');


export const SlidesScreen = () => {

  const [activeSnapIndex, setActiveSnapIndex] = useState(0);
  const {opacityValue, fadeIn} = useAnimated();
  const {theme: {colors}} = useContext(ThemeContext);

  const isButtonVisible = useRef(false);

  const navigation = useNavigation<StackNavigationProp<any, any>>();
  
  const _renderItem = (item:Slide) => {
    return(
      <View style={styles.itemContainer}>
        <Image
          source={item.img}
          style={{
            width: '100%',
            height: 350,
            resizeMode: 'center'
          }}
        />
        <Text style={{...styles.itemTextTitle, color: colors.text}}>{item.title}</Text>
        <Text style={{...styles.itemSubtitle, color: colors.primary}}>{item.desc}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{...styles.container, backgroundColor: colors.background}}>
      <Carousel
        //ref={(c) => { this._carousel = c; }}
        data={items}
        renderItem={({item}) => _renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={(index) => {
          console.log("Snap index", index);
          setActiveSnapIndex(index);
          if(index === items.length -1) {
            isButtonVisible.current = true;
            fadeIn();
          }
        }}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20}}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeSnapIndex}
          dotStyle={{
            width: 12,
            height: 12,
            borderRadius: 10,
            backgroundColor: colors.primary
          }}
          inactiveDotStyle={{
            backgroundColor: colors.text
          }}
        />
        {
          (isButtonVisible.current) && 
          <Animated.View style={{opacity: opacityValue}}>
            <ButtonIcon
              text='Home' 
              iconName='log-in-outline'
              action={() => navigation.navigate('Home')}
            />
          </Animated.View>
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    //backgroundColor: 'white', 
    borderRadius: 5
  },
  itemTextTitle: {
    fontSize: 25,
  },
  itemSubtitle: {
    fontSize: 15,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
