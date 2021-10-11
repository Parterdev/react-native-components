import { Theme } from "@react-navigation/native"

type ThemeAction = 
  | { type: 'set_light_theme'}
  | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark',
  dividerColor: string;
  icons: {
    primary: string;
    secondary: string;
    background: string;
  };

}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  colors: {
    primary: '#1e90ff',
    background: 'white',
    card: 'green',
    text: 'black',
    border: 'orange',
    notification: 'skyblue',
  },
  icons: {
    primary: '#1e90ff',
    secondary: '#F0A23B',
    background: '#f6f6f6',
  },
  dividerColor: '#f6f6f6',
}

export const darkTheme: ThemeState = {
  currentTheme: 'light',
  dark: true,
  colors: {
    primary: '#1e90ff',
    background: '#181818',
    card: 'green',
    text: 'white',
    border: 'orange',
    notification: 'skyblue',
  },
  icons: {
    primary: '#1e90ff',
    secondary: '#F0A23B',
    background: '#f6f6f6',
  },
  dividerColor: '#dcdcdc',
}

export const themeReducer = (state:ThemeState, action:ThemeAction):ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return { ...lightTheme }
    case 'set_dark_theme':
      return { ...darkTheme }
    default:
      return state;
  }
}