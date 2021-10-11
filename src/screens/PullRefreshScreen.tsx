import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import { PullRefreshControl } from '../components/PullRefreshControl';
import { useRefresh } from '../hooks/useRefresh';
import { useAnimated } from '../hooks/useAnimated';
import { ThemeContext } from '../context/theme/ThemeContext';


export const PullRefreshScreen = () => {

  const [data, setData] = useState<string>('');
  const {onRefresh, refreshing, result} = useRefresh();
  const {theme: {colors}} = useContext(ThemeContext);
  
  const pathBoucingAnimated = require('../assets/bouncing-fruits.json');

  useEffect(() => {
    if(result) {
      setData('Bauuuuu')
    }
  }, [onRefresh])
  

  return (
    <PullRefreshControl refreshing={refreshing} onRefresh={onRefresh}>
      <View style={{...styles.lottieContainer, backgroundColor: colors.primary}}>
        <LottieView
          autoPlay
          style={{ height: refreshing ? 200 : 0 }}
          source={pathBoucingAnimated}
        />
      </View>
      <View style={{...styles.container, backgroundColor: colors.background}}>
        {
          (data) ? 
          <Text style={{fontSize: 40, color: colors.text, textAlign: 'center'}}>
            {data}
          </Text> :
          <Text style={{fontSize: 40, color: colors.text, textAlign: 'center'}}>
            Please, pull down to show refresh
          </Text>
        }
      </View>
    </PullRefreshControl>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieContainer: {
    alignItems: 'center',
    backgroundColor: 'indianred', 
  },
})













