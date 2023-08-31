import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {PopupMenu} from 'src/components';

import {styles} from './styles';

export type IStatusList = {
  themeId: string;
  title: string;
};

export const StatusList: React.FC<IStatusList> = React.memo(
  ({themeId, title}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
      <>
        <View style={styles(themeId).statusList}>
          <View style={[styles(themeId).statusListHeader]}>
            <View style={styles(themeId).threeDots}>
              <TouchableOpacity onPress={() => setIsModalOpen(true)}>
                <Icon
                  name="ellipsis-vertical-outline"
                  size={15}
                  color="white"
                />
              </TouchableOpacity>
              <Text style={styles(themeId).text}>{title}</Text>
            </View>
            <TouchableOpacity>
              <Icon name="add" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={[{}, {}]} //tasks list
            style={styles(themeId).tasksContainer}
            renderItem={({item: task}) => (
              <View style={styles(themeId).tasksContainer}>
                <TouchableOpacity style={styles(themeId).taskCard}>
                  <Text style={styles(themeId).text}>task header</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <PopupMenu
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          IPopupMenuItem={[
            {
              id: '0',
              title: 'Edit',
              leadingIcon: 'pencil',
              onPress: () => {
                setIsModalOpen(false);
              },
            },
            {
              id: '1',
              title: 'Delete',
              leadingIcon: 'trash-can-outline',
              onPress: () => {
                setIsModalOpen(false);
              },
            },
          ]}
        />
      </>
    );
  },
);
