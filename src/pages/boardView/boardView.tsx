import {RouteProp, useRoute} from '@react-navigation/native';
import {useQuery} from '@realm/react';
import React, {useMemo, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RootStackParamList} from 'src/AppRoute';
import {StatusListObjectType} from 'src/configs';

import {NewStatusListForm} from './newStatusListForm';
import {StatusList} from './statusList';
import {styles} from './styles';

export const BoardView: React.FC = React.memo(() => {
  const route = useRoute<RouteProp<RootStackParamList, 'BoardView'>>();
  const {themeId, boardId} = route.params;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const statusList = useQuery<StatusListObjectType>('StatusList').filtered(
    'boardId == $0',
    boardId,
  );

  const list = !statusList.length ? [{}] : statusList;

  const newStatusListColumn = useMemo(() => {
    return (
      <TouchableOpacity
        style={styles(themeId).statusList}
        onPress={() => setIsOpen(prev => !prev)}>
        <View
          style={[
            styles(themeId).statusListHeader,
            styles(themeId).newStatusListHeader,
          ]}>
          <Text style={styles(themeId).text}>Create New List</Text>
          <Icon name="add" size={25} color="white" />
        </View>
      </TouchableOpacity>
    );
  }, [themeId]);

  return (
    <>
      <FlatList
        data={list}
        horizontal
        style={styles(themeId).container}
        renderItem={({item, index}) => {
          return (
            <>
              {statusList.length !== 0 && (
                <StatusList
                  themeId={themeId}
                  title={(item as StatusListObjectType).title}
                />
              )}
              {(index + 1 === statusList.length || statusList.length === 0) &&
                newStatusListColumn}
            </>
          );
        }}
      />
      <NewStatusListForm themeId={themeId} isOpen={isOpen} boardId={boardId} />
    </>
  );
});
