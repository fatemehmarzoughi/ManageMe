import {Realm} from '@realm/react';

import {Board} from './entities';

export const realmConfig: Realm.Configuration = {
  schema: [Board],
};
