import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootStackParamList} from 'src/AppRoute';

import {StatusList} from './statusList';
import {styles} from './styles';

export const BoardView: React.FC = React.memo(() => {
  const {params} = useRoute<RouteProp<RootStackParamList, 'BoardView'>>();
  const themeId = params.themeId;

  const statusList = [{}, {}];

  return (
    <FlatList
      data={statusList} // statusLists list
      horizontal
      style={styles(themeId).container}
      renderItem={({item: list, index}) => {
        if (index + 1 === statusList.length) {
          return (
            <>
              <StatusList themeId={themeId} />
              {/* Create New Status List */}
              <TouchableOpacity style={styles(themeId).statusList}>
                <View
                  style={[
                    styles(themeId).statusListHeader,
                    styles(themeId).newStatusListHeader,
                  ]}>
                  <Text style={styles(themeId).text}>Create New List</Text>
                  <Icon name="add" size={25} color="white" />
                </View>
              </TouchableOpacity>
            </>
          );
        }
        return <StatusList themeId={themeId} />;
      }}
    />
  );
});
