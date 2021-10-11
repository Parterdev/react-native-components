import React, { createContext, useEffect, useReducer } from "react";
import { Appearance, AppState, useColorScheme } from "react-native";
import { ThemeState, themeReducer, lightTheme, darkTheme } from './themeReducer';

//Props to createContext
interface ThemeContextProps {
  theme: ThemeState,
  setDarkTheme: () => void,
  setLightTheme: () => void,
}

//Create context
export const ThemeContext = createContext({} as ThemeContextProps);


//Context provider
export const ThemeProvider = ({children}:any) => {


  const [theme, dispatch] = useReducer(themeReducer, 
    (Appearance.getColorScheme() === 'dark' 
      ? darkTheme : lightTheme
    ));

  useEffect(() => {
    AppState.addEventListener('change', (status) => {
      //console.log({status});
      if(status === 'active') {
        (Appearance.getColorScheme() === 'light')
          ? setLightTheme()
          : setDarkTheme()
      }
    })
  }, [])

  //To detect colorScheme change and set the theme (only iOS)
  //const colorScheme = useColorScheme();
  /* useEffect(() => {
    (colorScheme === 'light')
      ? setLightTheme()
      : setDarkTheme()
  }, [colorScheme]) */

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
    console.log('SetDarkTheme');
  }

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
    console.log('SetLightTheme');
  }


  return (
    <ThemeContext.Provider value={{
      theme,
      setDarkTheme,
      setLightTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
}