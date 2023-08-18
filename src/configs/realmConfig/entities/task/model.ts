import {Realm} from '@realm/react';

export type TaskObjectType = {
  id: string;
  title: string;
  deadline: Date;
  themeId: string;
  statusListId: string;
  description: string;
};

export class Task extends Realm.Object<Task> {
  id!: string;
  title!: string;
  deadline!: Date;
  themeId!: string;
  statusListId!: string;
  description!: string;

  static schema = {
    name: 'Task',
    properties: {
      id: 'string',
      title: 'string',
      deadline: 'date',
      themeId: 'string',
      statusListId: 'string',
      description: 'string',
    },
    primaryKey: 'id',
  };
}
