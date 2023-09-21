import BottomSheet from '@gorhom/bottom-sheet';
import {useQuery} from '@realm/react';
import React, {useCallback, useRef} from 'react';
import {BottomSheetForm} from 'src/components';
import {Entities, StatusListObjectType} from 'src/configs';
import {useRealmCRUD} from 'src/configs/realmConfig/hooks';

export type INewTaskForm = {
  themeId: string;
  isOpen: boolean;
  boardId: string;
  statusListId: string;
  onClose?: () => void;
};

export const NewTaskForm: React.FC<INewTaskForm> = React.memo(
  ({themeId, isOpen, boardId, statusListId, onClose}) => {
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
            deadline: new Date(),
            labelColor: 'red',
          },
        });
        bottomSheetRef.current?.close();
      },
      [boardId, statusListId, write],
    );

    const statusList = useQuery<StatusListObjectType>('StatusList').filtered(
      'id == $0',
      statusListId,
    );

    return (
      <BottomSheetForm
        bottomSheetRef={bottomSheetRef}
        title={statusList[0]?.title ?? ''}
        isOpen={isOpen}
        themeId={themeId}
        onSave={onSaveNewStatusList}
        otherProps={{
          onClose,
        }}
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
