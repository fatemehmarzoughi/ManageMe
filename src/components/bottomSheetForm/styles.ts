import {StyleSheet} from 'react-native';
import {
  disabled,
  large,
  medium,
  primaryColor,
  xlarge,
  xxlarge,
  xxxsmall,
} from 'src/constants';

export const styles = (themeId?: string) => {
  return StyleSheet.create({
    bottomSheetContainer: {
      margin: xxlarge,
      display: 'flex',
      gap: xxlarge,
    },
    button: {
      backgroundColor: primaryColor(themeId),
      padding: large,
      borderRadius: xxxsmall,
    },
    buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: '700',
    },
    disabledButton: {
      backgroundColor: disabled,
    },
    title: {
      fontWeight: '700',
      fontSize: xlarge,
      textAlign: 'center',
    },
  });
};
