export type StatusListObjectType = {
  id: string;
  title: string;
  themeId: string;
  coverImage: string;
};

export class StatusList extends Realm.Object<StatusList> {
  id!: string;
  title!: string;
  themeId!: string;
  coverImage!: string;

  static schema = {
    name: 'StatusList',
    properties: {
      id: 'string',
      title: 'string',
      themeId: 'string',
      coverImage: 'string',
    },
    primaryKey: 'id',
  };
}
