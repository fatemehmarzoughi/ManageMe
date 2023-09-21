import BottomSheet from '@gorhom/bottom-sheet';
import React, {useCallback, useRef} from 'react';
import {BottomSheetForm} from 'src/components';
import {Entities} from 'src/configs';
import {useRealmCRUD} from 'src/configs/realmConfig/hooks';

export type INewStatusListForm = {
  themeId: string;
  isOpen: boolean;
  boardId: string;
  onClose?: () => void;
};

export const NewStatusListForm: React.FC<INewStatusListForm> = React.memo(
  ({themeId, isOpen, boardId, onClose}) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const {write} = useRealmCRUD();

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
      <BottomSheetForm
        bottomSheetRef={bottomSheetRef}
        title={'Create new status list'}
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
        ]}
      />
    );
  },
);
