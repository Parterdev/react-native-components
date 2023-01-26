import React, { useContext } from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'
import { ItemDivider } from '../components/ItemDivider';
import { TitleHeader } from '../components/TitleHeader';
import { ThemeContext } from '../context/theme/ThemeContext';

interface Houses {
    owner: string;
    data: string[];
}

const houses: Houses[] = [
  {
    owner: "DC Comics",
    data: ["Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin", ]
  },
  {
    owner: "Marvel Comics",
    data: ["Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", ]
  },
  {
    owner: "Anime",
    data: ["Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", ]
  }
];


export const SectionListScreen = () => {

  const {theme: {colors, dark}} = useContext(ThemeContext);

  const _sectionHeader = (owner:string) => {
    return(
      <View style={{paddingVertical: 5, backgroundColor: colors.primary, marginBottom: 10}}>
        <Text style={styles.textStyle}>{owner}</Text>
      </View>
    )
  }

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <SectionList
        sections={houses}
        ListHeaderComponent={() => <TitleHeader text={'Text Input Form'} />}
        ListFooterComponent={() => <TitleHeader text={'Total records per list: '  + houses.map((value) => value.data.length)} />}
        renderSectionFooter={({section}) => <TitleHeader text={'Total: ' + section.data.length} />}
        renderSectionHeader={({section}) => _sectionHeader(section.owner)}
        renderItem={({item}) => <Text style={{color: colors.text}}>{item}</Text>}
        ItemSeparatorComponent={() => <ItemDivider />}
        stickySectionHeadersEnabled={true}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
