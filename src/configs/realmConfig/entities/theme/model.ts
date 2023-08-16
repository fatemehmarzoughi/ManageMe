import {Realm} from '@realm/react';

export type ThemeObjectType = {
  id: string;
};

export class Theme extends Realm.Object<Theme> {
  id!: string; // red, green, blue, purple

  static schema = {
    name: 'Theme',
    properties: {
      id: 'string',
    },
    primaryKey: 'id',
  };
}
