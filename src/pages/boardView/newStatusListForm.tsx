import BottomSheet from '@gorhom/bottom-sheet';
import React, {useCallback, useRef} from 'react';
import {FieldError, useForm} from 'react-hook-form';
import {Text, TouchableOpacity, View} from 'react-native';
import {MyTextInput} from 'src/components';
import {Entities} from 'src/configs';
import {useRealmCRUD} from 'src/configs/realmConfig/hooks';

import {styles} from './styles';

export type INewStatusListForm = {
  themeId: string;
  isOpen: boolean;
  boardId: string;
};

export const NewStatusListForm: React.FC<INewStatusListForm> = React.memo(
  ({themeId, isOpen, boardId}) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const {write} = useRealmCRUD();

    const {
      handleSubmit,
      control,
      formState: {errors},
    } = useForm();

    const onSaveNewStatusList = useCallback(
      data => {
        write({
          name: Entities.StatusList,
          object: {
            boardId,
            title: data.title,
            order: 1,
          },
        });
        bottomSheetRef.current?.close();
      },
      [boardId, write],
    );

    return (
      <BottomSheet
        ref={bottomSheetRef}
        index={isOpen ? 0 : -1}
        snapPoints={['30%']}
        enableOverDrag
        enablePanDownToClose
        onChange={() => {}}>
        <View style={styles(themeId).bottomSheetContainer}>
          <MyTextInput
            control={control}
            name="title"
            title="Choose a title"
            placeholder="TO DO"
            rules={{required: true, minLength: 3, maxLength: 20}}
            errorType={errors.title?.type as FieldError['type']}
          />
          <TouchableOpacity
            disabled={!!errors.title}
            style={[
              styles(themeId).button,
              errors.title ? styles(themeId).disabledButton : null,
            ]}
            onPress={handleSubmit(onSaveNewStatusList)}>
            <Text style={styles(themeId).buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    );
  },
);
