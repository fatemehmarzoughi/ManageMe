import {StyleSheet} from 'react-native';

import {statusBarHeight} from './baseUnits';

export const generalStyles = StyleSheet.create({
  container: {
    marginTop: statusBarHeight,
    margin: 20,
  },
  centrism: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  },
});
