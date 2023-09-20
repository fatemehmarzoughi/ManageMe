import React, {useState} from 'react';
import {PopupMenu} from 'src/components';

import {TaskList} from '../taskList';
import {NewTaskForm} from '../taskList/newTaskForm';
import {StatusListHeader} from './statusListHeader';

export type IStatusList = {
  themeId: string;
  title: string;
  boardId: string;
  statusListId: string;
};

export const StatusList: React.FC<IStatusList> = React.memo(
  ({themeId, title, boardId, statusListId}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isTaskForm, setIsTaskForm] = useState<boolean>(false);

    return (
      <>
        <StatusListHeader
          themeId={themeId}
          type="Normal"
          configs={{
            leftButtonPress: () => setIsModalOpen(true),
            rightButtonPress: () => setIsTaskForm(prev => !prev),
            title,
          }}>
          <TaskList
            themeId={themeId}
            boardId={boardId}
            statusListId={statusListId}
          />
        </StatusListHeader>
        <PopupMenu
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          IPopupMenuItem={[
            {
              id: '0',
              title: 'Edit',
              leadingIcon: 'pencil',
              onPress: () => {
                setIsModalOpen(false);
                // edit the status list
              },
            },
            {
              id: '1',
              title: 'Delete',
              leadingIcon: 'trash-can-outline',
              onPress: () => {
                setIsModalOpen(false);
                // remove the statusList
              },
            },
          ]}
        />
        <NewTaskForm
          themeId={themeId}
          boardId={boardId}
          isOpen={isTaskForm}
          statusListId={statusListId}
        />
      </>
    );
  },
);
