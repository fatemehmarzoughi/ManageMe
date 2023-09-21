import React, {useState} from 'react';
import {PopupMenu} from 'src/components';
import {useRealmCRUD} from 'src/configs/realmConfig/hooks';

import {TaskList} from '../taskList';
import {NewTaskForm} from '../taskList/newTaskForm';
import {StatusListHeader} from './statusListHeader';
import {StatusListPopUp} from './statusListPopUp';

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

        <StatusListPopUp
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          statusListId={statusListId}
        />

        <NewTaskForm
          themeId={themeId}
          boardId={boardId}
          isOpen={isTaskForm}
          statusListId={statusListId}
          onClose={() => setIsTaskForm(false)}
        />
      </>
    );
  },
);
