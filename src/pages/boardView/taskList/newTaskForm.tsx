import BottomSheet from '@gorhom/bottom-sheet';
import React, {useCallback, useRef} from 'react';
import {BottomSheetForm} from 'src/components';
import {Entities} from 'src/configs';
import {useRealmCRUD} from 'src/configs/realmConfig/hooks';

export type INewTaskForm = {
  themeId: string;
  isOpen: boolean;
  boardId: string;
  statusListId: string;
};

export const NewTaskForm: React.FC<INewTaskForm> = React.memo(
  ({themeId, isOpen, boardId, statusListId}) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const {write} = useRealmCRUD();

    const onSaveNewStatusList = useCallback(
      data => {
        write({
          name: Entities.Task,
          object: {
            title: data.title,
            description: data.description,
            boardId,
            statusListId,
          },
        });
        bottomSheetRef.current?.close();
      },
      [boardId, statusListId, write],
    );

    return (
      <BottomSheetForm
        isOpen={isOpen}
        themeId={themeId}
        onSave={onSaveNewStatusList}
        inputFields={[
          {
            name: 'title',
            title: 'Choose a title',
            placeholder: 'TO DO',
            rules: {required: true, minLength: 3, maxLength: 20},
            props: {
              textInputProps: {
                autoFocus: true,
              },
            },
          },
          {
            name: 'description',
            title: 'Write a description for your task',
            placeholder: 'This task is about ...',
            rules: {required: true, minLength: 3, maxLength: 100},
          },
        ]}
      />
    );
  },
);
