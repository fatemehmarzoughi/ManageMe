import {useQuery} from '@realm/react';
import React, {useCallback, useContext, useMemo} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {BoardObjectType, Entities} from 'src/configs';
import context from 'src/configs/contextConfig/context';
import {useRealmCRUD} from 'src/configs/realmConfig/hooks';
import {generalStyles} from 'src/constants/baseStyles';

import {styles} from './styles';

export type BoardFormData = {
  title: string;
  coverImage: string;
  theme: string;
};

export const Home: React.FC = React.memo(() => {
  const {isCreatingBoard, setIsCreatingBoard} = useContext(context);
  const {write} = useRealmCRUD();
  const boards = useQuery<BoardObjectType>('Board');

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<BoardFormData>({
    defaultValues: {
      title: '',
      theme: '',
      coverImage: '',
    },
  });

  const addBoard = useCallback(
    data => {
      console.log(data);
      write({
        name: Entities.Board,
        object: {
          title: data.title,
          coverImage: 'dsfs',
          themeId: 'sdfs',
        },
      });
    },
    [write],
  );

  const ErrorTextMessages = useMemo(() => {
    return (
      <>
        {errors.title?.type === 'maxLength' ? (
          <Text style={generalStyles.errorText}>
            Title cannot be more than 50 letters{' '}
          </Text>
        ) : errors.title?.type === 'minLength' ? (
          <Text style={generalStyles.errorText}>
            Title cannot be less than 3 letters
          </Text>
        ) : errors.title?.type === 'required' ? (
          <Text style={generalStyles.errorText}>Title is required</Text>
        ) : (
          <></>
        )}
      </>
    );
  }, [errors.title?.type]);

  const createNewBoardForm = useMemo(() => {
    return (
      <View style={[styles.newBoard, styles.form]}>
        <Controller
          control={control}
          name="title"
          rules={{required: true, minLength: 3, maxLength: 50}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="title"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {ErrorTextMessages}

        <Button title="Add" onPress={handleSubmit(addBoard)} />
      </View>
    );
  }, [ErrorTextMessages, control, handleSubmit, addBoard]);

  const addNewBoard = useMemo(() => {
    return (
      <TouchableOpacity
        onPress={() => setIsCreatingBoard(true)}
        style={[styles.newBoard, generalStyles.centrism]}>
        <Icon size={20} name="add-outline" />
        <Text>Create New Board</Text>
      </TouchableOpacity>
    );
  }, [setIsCreatingBoard]);

  const boardsList = useMemo(
    () => (
      <FlatList
        data={boards}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    ),
    [boards],
  );

  const _render_content = useMemo(() => {
    console.log(isCreatingBoard);

    return (
      <>
        {isCreatingBoard ? (
          createNewBoardForm
        ) : !boards.length ? (
          addNewBoard
        ) : (
          <></>
        )}
        {boardsList}
      </>
    );
  }, [
    boardsList,
    addNewBoard,
    boards.length,
    isCreatingBoard,
    createNewBoardForm,
  ]);

  return <View style={generalStyles.container}>{_render_content}</View>;
});
