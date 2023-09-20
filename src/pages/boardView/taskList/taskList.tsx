import {useQuery} from '@realm/react';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {TaskObjectType} from 'src/configs';

import {styles} from './styles';

export type ITaskList = {
  themeId: string;
  boardId: string;
  statusListId: string;
};

export const TaskList: React.FC<ITaskList> = React.memo(
  ({boardId, statusListId, themeId}) => {
    const tasks = useQuery<TaskObjectType>('Task').filtered(
      'boardId == $0 && statusListId == $1',
      boardId,
      statusListId,
    );

    return (
      <FlatList
        data={tasks} //tasks list
        style={styles(themeId).tasksContainer}
        renderItem={({item: task}) => (
          <View style={styles(themeId).tasksContainer}>
            <TouchableOpacity style={styles(themeId).taskCard}>
              <Text style={styles(themeId).text}>task header</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  },
);
