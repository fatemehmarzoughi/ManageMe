import {Dimensions, Platform, StatusBar} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const statusBarHeight =
  Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight;
export const fullWidth = Dimensions.get('window').width;
export const verticalSpace = 40;
