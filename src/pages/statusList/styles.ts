import {StyleSheet} from 'react-native';
import {fullWidth, medium, primaryColor, small, xxxsmall} from 'src/constants';

export const styles = (themeId?: string) => {
  return StyleSheet.create({
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
      width: (2 * fullWidth) / 2.8,
    },
    statusListHeaderNew: {
      borderRadius: xxxsmall,
    },
    text: {
      color: 'white',
      fontWeight: '700',
    },
  });
};
