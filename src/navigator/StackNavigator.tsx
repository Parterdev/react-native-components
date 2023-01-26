import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  HomeScreen, 
  Animation101Screen, 
  Animation102Screen, 
  SwitchScreen, 
  AlertScreen, 
  TextInputScreen, 
  ThemeScreen,
  PullRefreshScreen , 
  SliderScreen,
  SectionListScreen, 
  ModalScreen, 
  InfiniteScrollScreen 
} from  '../screens/index';
import { ThemeContext } from '../context/theme/ThemeContext';
import { HeaderLeft } from './HeaderLeft';
  
  const Stack = createStackNavigator();

  export const StackNavigator = () => { 

    const {theme} = useContext(ThemeContext);

    return (
      <NavigationContainer
        theme={theme}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerLeft: HeaderLeft,
            headerStyle: {
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 6,
              },
              shadowOpacity: 0.39,
              shadowRadius: 8.30,
              elevation: 13,
              backgroundColor: '#292c34'
            },
            headerTintColor: 'white',
          }}
        >
          <Stack.Screen name="Home" options={{ title: 'RN Components' }} component={HomeScreen} />
          <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
          <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
          <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
          <Stack.Screen name="AlertScreen" component={AlertScreen} />
          <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
          <Stack.Screen name="PullRefreshScreen" component={PullRefreshScreen} />
          <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
          <Stack.Screen name="ModalScreen" component={ModalScreen} />
          <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
          <Stack.Screen name="SliderScreen" component={SliderScreen} /> 
          <Stack.Screen name="ThemeScreen" component={ThemeScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  }