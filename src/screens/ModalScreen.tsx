import React, { useContext, useState, useEffect } from 'react'
import { Alert, Modal, StyleSheet, Text, View } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ThemeContext } from '../context/theme/ThemeContext';
import { ButtonIcon } from '../components/ButtonIcon';

export const ModalScreen = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const {theme: {colors}} = useContext(ThemeContext);

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <Modal
        animationType='fade'
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed...");
          setModalVisible(!modalVisible)
        }}
      >
      <View style={styles.modalContainer}>
        <View style={{...styles.modalBody, backgroundColor: colors.background}}>
          <View style={styles.modalHeader}>
            <TouchableOpacity>
              <Icon style={{marginTop: 5}}
                onPress={() => {
                  setModalVisible(!modalVisible)
                }}
                size={30}
                name='close-circle-outline'
                color={colors.primary}
              />
            </TouchableOpacity>
          </View>
          <Text style={{...styles.textStyle, color: colors.text}}>Here is my custom modal</Text>
        </View>
      </View>
      </Modal>

      <ButtonIcon
          text='Press me' 
          iconName='radio-button-on-outline'
          action={() => setModalVisible(true)}
      />
      
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:  'rgba(0,0,0,0.5)'
  },
  modalBody: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    width: 320,
    height: 200,
  },
  modalHeader: {
    height: 40, 
    justifyContent: 'space-between', 
    alignItems: 'flex-end'
  },
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})
