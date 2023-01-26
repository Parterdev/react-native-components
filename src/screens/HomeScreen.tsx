import React from 'react'
import { View, FlatList } from 'react-native'
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { ItemDivider } from '../components/ItemDivider';
import { TitleHeader } from '../components/TitleHeader';
import { optionsMenu } from '../data/menuItems';
import { menuItem } from '../interfaces/FlatListMenuItem';
import { styles } from '../theme/appTheme';
import { strings } from '../data/strings';

export const HomeScreen = () => {

  const _renderItem = (item:menuItem) => {
    return (
      <FlatListMenuItem menuItem={item}/>
    );
  }

  const _renderListHeader = () => {
    return (
      <TitleHeader text={strings.listheader} />
    );
  }

  const _separatorList = () => {
    return (
      <ItemDivider />
    );
  }

  return (
    <View style={{flex: 1, ...styles.globalContainer, marginBottom: 20}}>
      <FlatList
        data={optionsMenu}
        renderItem={({item}) => _renderItem(item)}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => _renderListHeader()}
        ItemSeparatorComponent={() => _separatorList()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}


