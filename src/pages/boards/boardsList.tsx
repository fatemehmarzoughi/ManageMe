import {NavigationProp, useNavigation} from '@react-navigation/native';
import reverse from 'lodash/reverse';
import LottieView from 'lottie-react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FieldError, useForm} from 'react-hook-form';
import {
  FlatList,
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MyTextInput, PopupMenu} from 'src/components';
import {BoardObjectType} from 'src/configs';
import {useRealmCRUD} from 'src/configs/realmConfig/hooks';
import {generalStyles} from 'src/constants';

import {BoardImage} from './boardImage';
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

  const navigation = useNavigation<NavigationProp<any, any>>();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const saveEdits = useCallback(
    input => {
      if (pressedItemId) {
        const i = realm.objectForPrimaryKey('Board', pressedItemId);

        if (i && i?.isValid()) {
          realm.write(() => {
            (i as unknown as BoardObjectType).title = input.title;
          });
        }
        setIsModalOpen(false);
      }

      setIsEditing(false);
    },
    [pressedItemId, realm, setIsEditing, setIsModalOpen],
  );

  const reversedBoards = useMemo(() => reverse(boards), [boards]);

  return (
    <>
      <FlatList
        data={reversedBoards}
        style={styles().boardsList}
        keyExtractor={item => String(item.id)}
        renderItem={({item: {id: boardId, themeId, coverImage, title}}) => (
          <TouchableOpacity
            style={styles(themeId).card}
            onPress={() => {
              navigation.navigate('BoardView', {themeId, title, boardId});
            }}>
            <View style={[styles(themeId).cardTitle, generalStyles.centrism]}>
              {pressedItemId === boardId && isEditing ? (
                <View style={styles(themeId).editLabelView}>
                  <View style={styles(themeId).textInputErrorView}>
                    <MyTextInput
                      control={control}
                      name="title"
                      placeholder={title}
                      rules={{required: true, minLength: 3, maxLength: 50}}
                      errorType={errors.title?.type as FieldError['type']}
                      props={{
                        textInputProps: {
                          style: [
                            styles(themeId).cardText,
                            styles(themeId).editLabelTextInput,
                          ],
                          placeholderTextColor: 'white',
                          maxLength: 50,
                        },
                      }}
                    />
                  </View>
                  <TouchableOpacity onPress={handleSubmit(saveEdits)}>
                    <Icon name="checkmark-outline" size={20} color="green" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setIsEditing(false);
                    }}>
                    <Icon name="close-outline" size={20} color="gray" />
                  </TouchableOpacity>
                </View>
              ) : (
                <Text style={styles(themeId).cardText}>{title}</Text>
              )}
              <Icon
                name="apps-outline"
                style={{alignSelf: 'start'}}
                size={25}
                color="white"
              />
            </View>
            {/* <LottieView
              loop={false}
              autoPlay={true}
              source={require('../../assets/animations/books.json')}
              style={styles(themeId).cardPic}
            /> */}
            <BoardImage
              boardsLength={boards.length}
              style={styles(themeId).cardPic}
            />
            <TouchableOpacity
              style={styles(themeId).cardOptions}
              onPress={() => {
                setPressedItemId(boardId);
                setIsModalOpen(true);
              }}>
              <Icon name="ellipsis-vertical-outline" color="white" size={15} />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
      <PopupMenu
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        IPopupMenuItem={[
          {
            id: '0',
            title: 'Edit',
            leadingIcon: 'pencil',
            onPress: () => {
              setIsEditing(true);
              setIsModalOpen(false);
            },
          },
          {
            id: '1',
            title: 'Delete',
            leadingIcon: 'trash-can-outline',
            onPress: () => {
              if (pressedItemId) {
                const board = realm.objectForPrimaryKey('Board', pressedItemId);
                const statusLists = realm
                  .objects('StatusList')
                  .filtered('boardId == $0', pressedItemId);
                const tasks = realm
                  .objects('Task')
                  .filtered('boardId == $0', pressedItemId);

                if (board && board?.isValid()) {
                  // delete board
                  deleteObject(board);

                  // delete related statusLists
                  if (statusLists && statusLists.isValid()) {
                    statusLists.map(s => deleteObject(s));
                  }

                  // delete related tasks
                  if (tasks && tasks.isValid()) {
                    tasks.map(t => deleteObject(t));
                  }
                }
                setIsModalOpen(false);
              }
            },
          },
        ]}
      />
    </>
  );
});
