import {Dimensions, Platform, StatusBar} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const statusBarHeight =
  Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight;
export const fullWidth = Dimensions.get('window').width;
export const fullHeight = Dimensions.get('window').height;
export const verticalSpace = 40;
export const toastVisibilityDuration = 10;

export const color1Palets1 = '#FBA1B7';
export const color2Palets1 = '#FFD1DA';
export const color3Palets1 = '#FFEECC';
export const color4Palets1 = '#FFDDCC';

export const color1Palets2 = '#322653';
export const color2Palets2 = '#8062D6';
export const color3Palets2 = '#9288F8';
export const color4Palets2 = '#FFD2D7';
