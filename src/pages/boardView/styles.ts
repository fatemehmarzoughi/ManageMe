import {StyleSheet} from 'react-native';
import {backgroundColor} from 'src/constants';

export const styles = (themeId?: string) => {
  return StyleSheet.create({
    container: {
      backgroundColor: backgroundColor(themeId),
    },
    text: {
      color: 'white',
      fontWeight: '700',
    },
    textDark: {
      color: 'black',
      fontWeight: '700',
    },
  });
};
