import LottieView from 'lottie-react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Menu, Modal, Portal} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {BoardObjectType} from 'src/configs';
import {useRealmCRUD} from 'src/configs/realmConfig/hooks';
import {generalStyles} from 'src/constants';

import {BoardCard} from './boardCard';
import {styles} from './styles';

export type ErrorTypes = {
  errorType: 'maxLength' | 'minLength' | 'required';
};

export type IBoardsListProps = {
  boards: Realm.Results<BoardObjectType & Realm.Object<BoardObjectType, never>>;
};

export const BoardsList: React.FC<IBoardsListProps> = React.memo(({boards}) => {
  const {realm, deleteObject} = useRealmCRUD();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [pressedItemId, setPressedItemId] = useState<string | false>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <>
      <FlatList
        data={boards}
        style={styles.boardsList}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <BoardCard
            item={item}
            isEditing={isEditing}
            setPressedItemId={setPressedItemId}
            pressedItemId={pressedItemId}
            setIsModalOpen={setIsModalOpen}
            setIsEditing={setIsEditing}
          />
        )}
      />
      <Portal>
        <Modal
          visible={isModalOpen}
          onDismiss={() => {
            setIsModalOpen(false);
          }}
          contentContainerStyle={styles.moreOptions}>
          <Menu.Item
            title="Edit"
            leadingIcon="pencil"
            onPress={() => {
              setIsEditing(true);
              setIsModalOpen(false);
            }}
          />
          <Menu.Item
            title="Delete"
            leadingIcon="trash-can-outline"
            onPress={() => {
              if (pressedItemId) {
                const i = realm.objectForPrimaryKey('Board', pressedItemId);

                if (i && i?.isValid()) {
                  deleteObject(i);
                }
                setIsModalOpen(false);
              }
            }}
          />
        </Modal>
      </Portal>
    </>
  );
});
