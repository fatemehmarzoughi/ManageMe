import {useQuery} from '@realm/react';
import React, {useCallback, useContext, useMemo} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {BoardObjectType, Entities} from 'src/configs';
import context from 'src/configs/contextConfig/context';
import {useRealmCRUD} from 'src/configs/realmConfig/hooks';
import {generalStyles} from 'src/constants/baseStyles';

import {BoardsList} from './boardsList';
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
      write({
        name: Entities.Board,
        object: {
          title: data.title,
          coverImage: 'dsfs',
          themeId: 'sdfs',
        },
      });
      setIsCreatingBoard(false);
    },
    [setIsCreatingBoard, write],
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
        <TouchableOpacity
          style={styles.closeForm}
          onPress={() => setIsCreatingBoard(false)}>
          <Icon name="close-outline" size={20} />
        </TouchableOpacity>
        <Controller
          control={control}
          name="title"
          rules={{required: true, minLength: 3, maxLength: 50}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              autoFocus
              style={{fontSize: 16}}
              placeholder="title"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {ErrorTextMessages}

        <Button
          disabled={Boolean(errors.title?.type)}
          title="Add"
          onPress={handleSubmit(addBoard)}
        />
      </View>
    );
  }, [
    control,
    ErrorTextMessages,
    errors.title?.type,
    handleSubmit,
    addBoard,
    setIsCreatingBoard,
  ]);

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

  const _render_content = useMemo(() => {
    return (
      <>
        {isCreatingBoard ? (
          createNewBoardForm
        ) : !boards.length ? (
          addNewBoard
        ) : (
          <></>
        )}
        <BoardsList boards={boards} />
      </>
    );
  }, [isCreatingBoard, createNewBoardForm, boards, addNewBoard]);

  return <View style={generalStyles.container}>{_render_content}</View>;
});
