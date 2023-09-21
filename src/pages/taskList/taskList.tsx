import {useQuery} from '@realm/react';
import React, {useCallback} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TaskObjectType} from 'src/configs';
import {useRealmCRUD} from 'src/configs/realmConfig/hooks';

import {styles} from './styles';
import {DraggableBox} from 'src/components';

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
    const {realm, deleteObject} = useRealmCRUD();

    const removeTask = useCallback(
      ({id}: {id: string}) => {
        const task = realm.objects('Task').filtered('id == $0', id);
        deleteObject(task);
      },
      [deleteObject, realm],
    );

    return (
      <FlatList
        data={tasks} //tasks list
        style={styles(themeId).tasksContainer}
        renderItem={({item: task}) => (
          // <DraggableBox>
          <View style={styles(themeId).tasksContainer}>
            <View style={styles(themeId).taskCard}>
              <View>
                <Text style={styles(themeId).text}>{task.title}</Text>
                <Text style={styles(themeId).description}>
                  {task.description}
                </Text>
              </View>
              <TouchableOpacity onPress={() => removeTask({id: task.id})}>
                <Icon name="trash-outline" size={17} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          // </DraggableBox>
        )}
      />
    );
  },
);
