import React, { useContext } from 'react'
import { RefreshControl, StyleSheet, ScrollView } from 'react-native';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Props {
  refreshing: boolean, 
  onRefresh: () => void,
  children: JSX.Element | JSX.Element[]
}


export const PullRefreshControl = ({refreshing, onRefresh, children}:Props) => {

  const {theme: {colors, dark}} = useContext(ThemeContext);

  return (
    <ScrollView contentContainerStyle={styles.container} 
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={200}
          progressBackgroundColor={dark ? 'white' : colors.background}
          colors={['darkorange', 'deeppink', 'chocolate', 'cornflowerblue']}
        />
      }
    >
      {children}
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'red'
  },
});
