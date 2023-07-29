import {Realm} from '@realm/react';

import {Board, StatusList, Task, Theme} from './entities';

export const realmConfig: Realm.Configuration = {
  schema: [Board, Theme, Task, StatusList],
};
