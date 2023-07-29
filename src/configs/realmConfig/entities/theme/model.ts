import {Realm} from '@realm/react';

export type ThemeObjectType = {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  surfaceColor: string;
};

export class Theme extends Realm.Object<Theme> {
  id!: string;
  name!: string;
  primaryColor!: string;
  secondaryColor!: string;
  backgroundColor!: string;
  surfaceColor!: string;

  static schema = {
    name: 'Theme',
    properties: {
      id: 'string',
      name: 'string',
      primaryColor: 'string',
      secondaryColor: 'string',
      backgroundColor: 'string',
      surfaceColor: 'string',
    },
    primaryKey: 'id',
  };
}
