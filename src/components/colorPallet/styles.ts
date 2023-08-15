import {StyleSheet} from 'react-native';

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
    backgroundColor: '#900C3F',
  },
  secondColorRed: {
    backgroundColor: '#C70039',
  },
  thirdColorRed: {
    backgroundColor: '#F94C10',
  },
  fourthColorRed: {
    backgroundColor: '#F8DE22',
  },
  /* ---------------------------------- Green --------------------------------- */
  firstColorGreen: {
    backgroundColor: '#C8E4B2',
  },
  secondColorGreen: {
    backgroundColor: '#9ED2BE',
  },
  thirdColorGreen: {
    backgroundColor: '#7EAA92',
  },
  fourthColorGreen: {
    backgroundColor: '#FFD9B7',
  },
  /* ---------------------------------- Blue ---------------------------------- */
  firstColorBlue: {
    backgroundColor: '#071952',
  },
  secondColorBlue: {
    backgroundColor: '#0B666A',
  },
  thirdColorBlue: {
    backgroundColor: '#35A29F',
  },
  fourthColorBlue: {
    backgroundColor: '#97FEED',
  },
  /* --------------------------------- Purple --------------------------------- */
  firstColorPurple: {
    backgroundColor: '#6528F7',
  },
  secondColorPurple: {
    backgroundColor: '#A076F9',
  },
  thirdColorPurple: {
    backgroundColor: '#D7BBF5',
  },
  fourthColorPurple: {
    backgroundColor: '#EDE4FF',
  },
});
