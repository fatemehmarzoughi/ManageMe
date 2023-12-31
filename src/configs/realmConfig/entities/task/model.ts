import {Realm} from '@realm/react';

export type TaskObjectType = {
  id: string;
  title: string;
  deadline: Date;
  labelColor: string;
  statusListId: string;
  boardId: string;
  description: string;
};

export class Task extends Realm.Object<Task> {
  id!: string;
  title!: string;
  deadline!: Date;
  labelColor!: string;
  statusListId!: string;
  description!: string;
  boardId!: string;

  static schema = {
    name: 'Task',
    properties: {
      id: 'string',
      title: 'string',
      deadline: 'date',
      labelColor: 'string',
      statusListId: 'string',
      description: 'string',
      boardId: 'string',
    },
    primaryKey: 'id',
  };
}
