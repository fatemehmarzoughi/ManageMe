import {StyleSheet} from 'react-native';
import {
  backgroundColor,
  fullHeight,
  fullWidth,
  large,
  disabled,
  medium,
  primaryColor,
  secondaryColor,
  small,
  surfaceColor,
  xxlarge,
  xxsmall,
  xxxsmall,
  xxxxsmall,
} from 'src/constants';

export const styles = (themeId?: string) => {
  return StyleSheet.create({
    container: {
      backgroundColor: backgroundColor(themeId),
    },
    newStatusListHeader: {
      width: (2 * fullWidth) / 3,
      borderRadius: xxxsmall,
    },
    threeDots: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: xxxsmall,
    },
    statusList: {
      borderRadius: xxxsmall,
      margin: medium,
      marginRight: 0,
      marginLeft: xxxsmall,
      padding: medium,
    },
    statusListHeader: {
      backgroundColor: primaryColor(themeId),
      padding: medium,
      borderTopLeftRadius: xxxsmall,
      borderTopRightRadius: xxxsmall,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      gap: small,
    },
    tasksContainer: {
      backgroundColor: surfaceColor(themeId),
      padding: xxxsmall,
      borderBottomLeftRadius: xxxsmall,
      borderBottomRightRadius: xxxsmall,
      flexGrow: 0,
    },
    taskCard: {
      width: (2 * fullWidth) / 3,
      backgroundColor: secondaryColor(themeId),
      padding: medium,
      borderRadius: xxxsmall,
    },
    text: {
      color: 'white',
      fontWeight: '700',
    },
    textDark: {
      color: 'black',
      fontWeight: '700',
    },

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
  });
};
