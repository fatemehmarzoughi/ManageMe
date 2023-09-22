import {RouteProp, useRoute} from '@react-navigation/native';
import {useQuery} from '@realm/react';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {RootStackParamList} from 'src/AppRoute';
import {StatusListObjectType} from 'src/configs';

import {NewStatusListForm, StatusList, StatusListHeader} from '../statusList';
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
                  boardId={boardId}
                  statusListId={(item as StatusListObjectType).id}
                  title={(item as StatusListObjectType).title}
                />
              )}
              {(index + 1 === statusList.length || statusList.length === 0) && (
                <StatusListHeader
                  themeId={themeId}
                  type="New"
                  configs={{onPress: () => setIsOpen(prev => !prev)}}
                />
              )}
            </>
          );
        }}
      />
      <NewStatusListForm
        themeId={themeId}
        isOpen={isOpen}
        boardId={boardId}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
});
