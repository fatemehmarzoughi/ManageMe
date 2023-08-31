import {useQuery} from '@realm/react';
import React, {useCallback, useContext, useMemo} from 'react';
import {Controller, FieldError, useForm} from 'react-hook-form';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ColorPallet, MyTextInput} from 'src/components';
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

export const Boards: React.FC = React.memo(() => {
  const {isCreatingBoard, setIsCreatingBoard} = useContext(context);
  const {write} = useRealmCRUD();
  const boards = useQuery<BoardObjectType>('Board');

  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm();

  const addBoard = useCallback(
    data => {
      write({
        name: Entities.Board,
        object: {
          title: data.title,
          themeId: data.theme ?? 'red',
          coverImage: 'dsfs',
          order: boards.length + 1,
        },
      });
      setIsCreatingBoard(false);
    },
    [boards.length, setIsCreatingBoard, write],
  );

  const createNewBoardForm = useMemo(() => {
    return (
      <View style={[styles().newBoard, styles().form]}>
        <TouchableOpacity
          style={styles().closeForm}
          onPress={() => setIsCreatingBoard(false)}>
          <Icon name="close-outline" size={20} />
        </TouchableOpacity>
        <MyTextInput
          name="title"
          control={control}
          placeholder="title"
          title="Choose a title"
          rules={{required: true, maxLength: 50, minLength: 3}}
          errorType={errors['title']?.type as FieldError['type']}
          props={{
            root: {
              style: styles().textInput,
            },
          }}
        />

        <Controller
          control={control}
          name="theme"
          rules={{required: true}}
          defaultValue={'red'}
          render={({field: {onChange, value}}) => (
            <>
              <Text style={styles().title}>Choose a theme:</Text>
              <View style={styles().colorsContainer}>
                <ColorPallet
                  isChecked={value === 'red'}
                  title="red"
                  theme="red"
                  onPress={() => onChange('red')}
                />
                <ColorPallet
                  isChecked={value === 'blue'}
                  title="blue"
                  theme="blue"
                  onPress={() => onChange('blue')}
                />
                <ColorPallet
                  isChecked={value === 'green'}
                  title="green"
                  theme="green"
                  onPress={() => onChange('green')}
                />
                <ColorPallet
                  isChecked={value === 'purple'}
                  title="purple"
                  theme="purple"
                  onPress={() => onChange('purple')}
                />
              </View>
            </>
          )}
        />

        <Button
          disabled={Boolean(errors.title?.type)}
          title="Add"
          onPress={handleSubmit(addBoard)}
        />
      </View>
    );
  }, [control, errors, handleSubmit, addBoard, setIsCreatingBoard]);

  const addNewBoard = useMemo(() => {
    return (
      <TouchableOpacity
        onPress={() => setIsCreatingBoard(true)}
        style={[styles().newBoard, generalStyles.centrism]}>
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
