import { menuItem } from "../interfaces/FlatListMenuItem";

export const optionsMenu: menuItem[] = [
  {
    name:  'Alert',
    icon:  'cube-outline',
    route: 'AlertScreen'
  },
  {
    name:  'Fade in/out animation',
    icon:  'cube-outline',
    route: 'Animation101Screen',
  },
  {
    name:  'Inifite Scroll',
    icon:  'cube-outline',
    route: 'InfiniteScrollScreen',
  },
  {
    name:  'Modal',
    icon:  'cube-outline',
    route: 'ModalScreen',
    isIssued: true,
  },
  {
    name:  'Move X/Y animation',
    icon:  'cube-outline',
    route: 'Animation102Screen'
  },
  {
    name:  'Pull to refresh',
    icon:  'cube-outline',
    route: 'PullRefreshScreen'
  },
  {
    name:  'SectionList',
    icon:  'cube-outline',
    route: 'SectionListScreen'
  },
  {
    name:  'Slider',
    icon:  'cube-outline',
    route: 'SliderScreen',
  },
  {
    name:  'Switch',
    icon:  'cube-outline',
    route: 'SwitchScreen'
  },
  {
    name:  'TextInput',
    icon:  'cube-outline',
    route: 'TextInputScreen'
  },
  {
    name:  'Theme',
    icon:  'cube-outline',
    route: 'ThemeScreen'
  },
];