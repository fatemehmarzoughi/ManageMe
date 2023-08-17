import {StyleSheet} from 'react-native';
import {
  backgroundColor,
  fullHeight,
  lightGray,
  medium,
  primaryColor,
  secondaryColor,
  small,
  surfaceColor,
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
      width: 250,
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
      width: 250,
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
  });
};
