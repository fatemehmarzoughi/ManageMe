import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';

export enum IHeaderTypes {
  Normal = 'Normal',
  New = 'New',
}

export type INormalHeader = {
  rightButtonPress: () => void;
  leftButtonPress: () => void;
  title: string;
};

export type INewHeader = {
  onPress: () => void;
};

type IConfigs = {
  New: INewHeader;
  Normal: INormalHeader;
};

export type IStatusListHeaderProps = {
  [K in keyof IConfigs]: {
    type: K;
    themeId: string;
    children?: React.ReactNode;
    configs: IConfigs[K];
  };
}[keyof IConfigs];

export const StatusListHeader: React.FC<IStatusListHeaderProps> = React.memo(
  ({configs, themeId, type, children}) => {
    if (type === IHeaderTypes.New) {
      const {onPress} = configs;
      return (
        <TouchableOpacity style={styles(themeId).statusList} onPress={onPress}>
          <View style={[styles(themeId).statusListHeader]}>
            <Text style={styles(themeId).text}>Create New List</Text>
            <Icon name="add" size={25} color="white" />
          </View>
        </TouchableOpacity>
      );
    } else if (type === IHeaderTypes.Normal) {
      const {title, leftButtonPress, rightButtonPress} = configs;
      return (
        <View style={styles(themeId).statusList}>
          <View style={[styles(themeId).statusListHeader]}>
            <View style={styles(themeId).threeDots}>
              <TouchableOpacity onPress={leftButtonPress}>
                <Icon
                  name="ellipsis-vertical-outline"
                  size={15}
                  color="white"
                />
              </TouchableOpacity>
              <Text style={styles(themeId).text}>{title}</Text>
            </View>
            <TouchableOpacity onPress={rightButtonPress}>
              <Icon name="add" size={25} color="white" />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      );
    }
  },
);
