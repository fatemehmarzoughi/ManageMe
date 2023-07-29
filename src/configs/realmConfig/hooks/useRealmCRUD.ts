import {useRealm} from '@realm/react';
import {useCallback} from 'react';

import {Entities} from '../entities';
import {BoardObjectType} from '../entities/boards';

export type IWrite = {
  object: Partial<OmittedRealmTypes<BoardObjectType>>;
  name: Entities;
};

export const useRealmCRUD = () => {
  const realm = useRealm();

  const generateRandomId = useCallback(
    (name: Entities) => {
      const id = String(Math.round(9999999 * Math.random()));
      const itemExists = realm.objectForPrimaryKey(name, id);
      if (itemExists) {
        return generateRandomId(name);
      } else {
        return id;
      }
    },
    [realm],
  );

  const write = useCallback(
    ({name, object}: IWrite) => {
      try {
        realm.write(() => {
          realm.create(name, {...object, id: generateRandomId(name)});
        });
      } catch (error) {
        console.log(error);
      }
    },
    [generateRandomId, realm],
  );

  return {write};
};
