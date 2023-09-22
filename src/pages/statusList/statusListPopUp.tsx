import React from 'react';
import {PopupMenu} from 'src/components';
import {useRealmCRUD} from 'src/configs/realmConfig/hooks';

export type IStatusListPopUp = {
  statusListId: string;
  onClose: () => void;
  isOpen: boolean;
};

export const StatusListPopUp: React.FC<IStatusListPopUp> = React.memo(
  ({statusListId, onClose, isOpen}) => {
    const {realm, deleteObject} = useRealmCRUD();

    return (
      <PopupMenu
        isOpen={isOpen}
        onClose={onClose}
        IPopupMenuItem={[
          {
            id: '0',
            title: 'Edit',
            leadingIcon: 'pencil',
            onPress: () => {
              onClose();
              // edit the status list
            },
          },
          {
            id: '1',
            title: 'Delete',
            leadingIcon: 'trash-can-outline',
            onPress: () => {
              /* ------------------------- Remove the status list ------------------------- */
              const statusList = realm.objectForPrimaryKey(
                'StatusList',
                statusListId,
              );
              const relatedTasks = realm
                .objects('Task')
                .filtered('statusListId == $0', statusListId);

              if (statusList && statusList?.isValid()) {
                // delete status list
                deleteObject(statusList);

                // delete related tasks
                relatedTasks.map(i => deleteObject(i));
              }
              /* ----------------------------- Close the modal ---------------------------- */
              onClose();
            },
          },
        ]}
      />
    );
  },
);
