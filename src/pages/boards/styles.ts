import {StyleSheet} from 'react-native';
import {
  fullHeight,
  fullWidth,
  large,
  lightGray,
  medium,
  surfaceColor,
  verticalSpace,
  xxxxxlarge,
} from 'src/constants';

export const styles = (themeId?: string) => {
  return StyleSheet.create({
    newBoard: {
      backgroundColor: lightGray,
      width: fullWidth - verticalSpace,
      paddingVertical: 40,
      borderRadius: 5,
      flexDirection: 'row',
      gap: 5,
      marginBottom: 25,
    },
    form: {
      paddingHorizontal: 20,
      paddingVertical: 20,
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    boardsList: {
      height: fullHeight - xxxxxlarge * large,
    },
    closeForm: {
      position: 'absolute',
      right: 0,
      top: 0,
      padding: 10,
    },
    cardTitle: {
      flexDirection: 'row-reverse',
      gap: 5,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
    card: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexDirection: 'row',
      borderRadius: 5,
      marginBottom: 10,
      backgroundColor: surfaceColor(themeId),
      padding: 10,
      position: 'relative',
      height: 120,
    },
    cardText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
      alignSelf: 'flex-start',
    },
    cardPic: {
      width: 90,
      height: 90,
      position: 'absolute',
      right: 10,
      bottom: 10,
    },
    cardOptions: {
      position: 'absolute',
      right: 0,
      padding: 10,
    },
    modalStyles: {
      backgroundColor: 'red',
      height: 200,
      width: 100,
      elevation: 5,
    },
    editLabelView: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 10,
    },
    editLabelTextInput: {
      width: 190,
      alignSelf: 'flex-start',
    },
    textInputErrorView: {
      alignSelf: 'flex-start',
      width: 190,
    },
    colorsContainer: {
      width: fullWidth - 100,
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 10,
    },
    title: {
      marginBottom: 10,
      color: 'black',
    },
    textInput: {
      marginBottom: medium,
    },
  });
};
