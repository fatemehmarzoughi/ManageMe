import {Realm} from '@realm/react';

export type BoardObjectType = {
  id: number;
  title: string;
  themId: number;
  coverImage: string;
};

export class Board extends Realm.Object<Board> {
  id!: number;
  title!: string;
  themId!: number;
  coverImage!: string;

  static schema = {
    name: 'Board',

    properties: {
      id: 'int',
      title: 'string',
      themeId: 'int',
      coverImage: 'string',
    },

    primaryKey: 'id',
  };
}
