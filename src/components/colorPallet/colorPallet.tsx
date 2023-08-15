import React, {useMemo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

export type IColorPalletProps = {
  title: string;
  onPress: () => void;
  theme: 'red' | 'green' | 'blue' | 'purple';
  isChecked: boolean;
};

export const ColorPallet: React.FC<IColorPalletProps> = React.memo(
  ({title, onPress, theme, isChecked}) => {
    const firstColorManager = useMemo(() => {
      switch (theme) {
        case 'red':
          return styles.firstColorRed;
        case 'blue':
          return styles.firstColorBlue;
        case 'green':
          return styles.firstColorGreen;
        case 'purple':
          return styles.firstColorPurple;
      }
    }, [theme]);
    const secondColorManager = useMemo(() => {
      switch (theme) {
        case 'red':
          return styles.secondColorRed;
        case 'blue':
          return styles.secondColorBlue;
        case 'green':
          return styles.secondColorGreen;
        case 'purple':
          return styles.secondColorPurple;
      }
    }, [theme]);

    const thirdColorManager = useMemo(() => {
      switch (theme) {
        case 'red':
          return styles.thirdColorRed;
        case 'blue':
          return styles.thirdColorBlue;
        case 'green':
          return styles.thirdColorGreen;
        case 'purple':
          return styles.thirdColorPurple;
      }
    }, [theme]);

    const fourthColorManager = useMemo(() => {
      switch (theme) {
        case 'red':
          return styles.fourthColorRed;
        case 'blue':
          return styles.fourthColorBlue;
        case 'green':
          return styles.fourthColorGreen;
        case 'purple':
          return styles.fourthColorPurple;
      }
    }, [theme]);

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, isChecked && styles.isChecked]}>
        <View style={[styles.colorFullCirclesContainer]}>
          <View
            style={[
              styles.colorFullCircles,
              styles.firstColorFullCircle,
              firstColorManager,
            ]}
          />
          <View
            style={[
              styles.colorFullCircles,
              styles.secondColorFullCircle,
              secondColorManager,
            ]}
          />
          <View
            style={[
              styles.colorFullCircles,
              styles.thirdColorFullCircle,
              thirdColorManager,
            ]}
          />
          <View
            style={[
              styles.colorFullCircles,
              styles.fourthColorFullCircle,
              fourthColorManager,
            ]}
          />
        </View>
        <Text style={[styles.text]}>{title}</Text>
      </TouchableOpacity>
    );
  },
);
