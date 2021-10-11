import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { FadeInImage } from '../components/FadeInImage';
import { ThemeContext } from '../context/theme/ThemeContext';

export const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0,1,2,3,4,5]);
  const {theme: {colors}} = useContext(ThemeContext);

  const loadMore = () => {
    const newArrayNumber:number[] = [];
    for (let i = 0; i < 5; i++) {
      newArrayNumber[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArrayNumber]);
    }, 500);
  }

  const _renderItem = (item:number) => {
    return(
      <FadeInImage 
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{
          width: '100%',
          height: 350,
          borderRadius: 20,
          marginVertical: 5,
        }}
      />
    )
  }

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({item}) => _renderItem(item)}
        //ListHeaderComponent={() =>  <Text style={{color: 'black', fontSize: 30, marginHorizontal: 10}}>Infinite Scroll</Text>}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={<View 
          style={{ 
            height: 150, 
            width: '100%', 
            justifyContent: 'center', 
            alignItems: 'center'
          }}
        >
          <ActivityIndicator size={50} color={colors.primary} />
        </View>}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    color: 'black',
    fontSize: 30,
    height: 150,
    fontWeight: 'bold'
  }
})
