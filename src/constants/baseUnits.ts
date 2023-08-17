import {Dimensions, Platform, StatusBar} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const statusBarHeight =
  Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight;
export const fullWidth = Dimensions.get('window').width;
export const fullHeight = Dimensions.get('window').height;
export const verticalSpace = 40;
export const toastVisibilityDuration = 10;

export const xxxxsmall = 2;
export const xxxsmall = 4;
export const xxsmall = 6;
export const xsmall = 8;
export const small = 12;

export const medium = 14;

export const large = 16;
export const xlarge = 18;
export const xxlarge = 20;
export const xxxlarge = 36;
export const xxxxlarge = 48;
export const xxxxxlarge = 72;
