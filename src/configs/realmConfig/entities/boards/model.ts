import {Realm} from '@realm/react';

export type BoardObjectType = {
  id: string;
  title: string;
  themeId: string;
  coverImage: string;
  order: number;
};

export class Board extends Realm.Object<Board> {
  id!: string;
  title!: string;
  themeId!: string;
  coverImage!: string;
  order!: number;

  static schema = {
    name: 'Board',

    properties: {
      id: 'string',
      title: 'string',
      themeId: 'string',
      coverImage: 'string',
      order: 'int',
    },

    primaryKey: 'id',
  };
}
