export type StatusListObjectType = {
  id: string;
  title: string;
  order: number;
  boardId: string;
};

export class StatusList extends Realm.Object<StatusList> {
  id!: string;
  title!: string;
  order!: number;
  boardId!: string;

  static schema = {
    name: 'StatusList',
    properties: {
      id: 'string',
      title: 'string',
      order: 'int',
      boardId: 'string',
    },
    primaryKey: 'id',
  };
}
