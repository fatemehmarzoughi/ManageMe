import {Dimensions, Platform, StatusBar} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const statusBarHeight =
  Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight;
