import {StyleSheet} from 'react-native';
import {fullWidth, lightGray, verticalSpace} from 'src/constants';

export const styles = StyleSheet.create({
  newBoard: {
    backgroundColor: lightGray,
    width: fullWidth - verticalSpace,
    paddingVertical: 40,
    borderRadius: 5,
    flexDirection: 'row',
    gap: 5,
  },
  form: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});
