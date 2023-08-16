import {StyleSheet} from 'react-native';
import {
  backgroundColorBlue,
  backgroundColorGreen,
  backgroundColorPurple,
  backgroundColorRed,
  primaryColorBlue,
  primaryColorGreen,
  primaryColorPurple,
  primaryColorRed,
  secondaryColorBlue,
  secondaryColorGreen,
  secondaryColorPurple,
  secondaryColorRed,
  surfaceColorBlue,
  surfaceColorGreen,
  surfaceColorPurple,
  surfaceColorRed,
} from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: '#c3c3c3',
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#e9e9e9',
    padding: 2,
    paddingHorizontal: 5,
  },
  colorFullCircles: {
    width: 20,
    height: 20,
    borderRadius: 100,
    position: 'absolute',
  },
  text: {
    fontSize: 12,
  },
  colorFullCirclesContainer: {
    position: 'relative',
    height: 25,
    width: 50,
  },
  isChecked: {
    borderColor: 'blue',
  },
  firstColorFullCircle: {
    left: 3,
    top: 3,
  },
  secondColorFullCircle: {
    left: 10,
    top: 3,
  },
  thirdColorFullCircle: {
    left: 17,
    top: 3,
  },
  fourthColorFullCircle: {
    left: 24,
    top: 3,
  },
  /* -------------------------------------------------------------------------- */
  /*                                Color Themes                                */
  /* -------------------------------------------------------------------------- */
  /* ----------------------------------- Red ---------------------------------- */
  firstColorRed: {
    backgroundColor: primaryColorRed,
  },
  secondColorRed: {
    backgroundColor: secondaryColorRed,
  },
  thirdColorRed: {
    backgroundColor: surfaceColorRed,
  },
  fourthColorRed: {
    backgroundColor: backgroundColorRed,
  },
  /* ---------------------------------- Green --------------------------------- */
  firstColorGreen: {
    backgroundColor: primaryColorGreen,
  },
  secondColorGreen: {
    backgroundColor: secondaryColorGreen,
  },
  thirdColorGreen: {
    backgroundColor: surfaceColorGreen,
  },
  fourthColorGreen: {
    backgroundColor: backgroundColorGreen,
  },
  /* ---------------------------------- Blue ---------------------------------- */
  firstColorBlue: {
    backgroundColor: primaryColorBlue,
  },
  secondColorBlue: {
    backgroundColor: secondaryColorBlue,
  },
  thirdColorBlue: {
    backgroundColor: surfaceColorBlue,
  },
  fourthColorBlue: {
    backgroundColor: backgroundColorBlue,
  },
  /* --------------------------------- Purple --------------------------------- */
  firstColorPurple: {
    backgroundColor: primaryColorPurple,
  },
  secondColorPurple: {
    backgroundColor: secondaryColorPurple,
  },
  thirdColorPurple: {
    backgroundColor: surfaceColorPurple,
  },
  fourthColorPurple: {
    backgroundColor: backgroundColorPurple,
  },
});
