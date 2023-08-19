import {StyleSheet} from 'react-native';
import {small} from 'src/constants';

export const styles = (themeId?: string) =>
  StyleSheet.create({
    container: {
      marginBottom: small,
    },
    title: {
      marginBottom: 10,
      color: 'black',
    },
    errorText: {
      color: 'red',
      fontSize: 14,
    },
  });
