import {StyleSheet} from 'react-native';
import {
  fullWidth,
  medium,
  secondaryColor,
  surfaceColor,
  xxxsmall,
} from 'src/constants';

export const styles = (themeId?: string) => {
  return StyleSheet.create({
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
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    text: {
      color: 'white',
      fontWeight: '700',
    },
    description: {
      color: 'white',
      fontWeight: '400',
      marginTop: xxxsmall,
    },
  });
};
