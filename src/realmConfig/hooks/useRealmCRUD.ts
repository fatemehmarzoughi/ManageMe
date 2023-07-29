import {createRealmContext} from '@realm/react';
import {useCallback} from 'react';

import {realmConfig} from '../config';
import {BoardObjectType} from '../entities/boards';

export type IWrite = {
  object: Partial<OmittedRealmTypes<BoardObjectType>>;
  name: string;
};

export const useRealmCRUD = () => {
  const {useRealm, useObject, useQuery} = createRealmContext(realmConfig);
  const realm = useRealm();

  const write = useCallback(
    ({name, object}: IWrite) => {
      realm.write(() => {
        realm.create(name, object);
      });
    },
    [realm],
  );

  return {useRealm, useObject, useQuery, write};
};
