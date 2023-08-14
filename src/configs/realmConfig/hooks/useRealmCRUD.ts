import {useRealm} from '@realm/react';
import {useCallback} from 'react';

import {
  Entities,
  StatusListObjectType,
  TaskObjectType,
  ThemeObjectType,
} from '../entities';
import {BoardObjectType} from '../entities/boards';

export type IWrite =
  | {
      name: Entities.Board;
      object: Partial<OmittedRealmTypes<BoardObjectType>>;
    }
  | {
      name: Entities.Task;
      object: Partial<OmittedRealmTypes<TaskObjectType>>;
    }
  | {
      name: Entities.StatusList;
      object: Partial<OmittedRealmTypes<StatusListObjectType>>;
    }
  | {
      name: Entities.Theme;
      object: Partial<OmittedRealmTypes<ThemeObjectType>>;
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

  const deleteObject = useCallback(
    (collection: Omit<IWrite | unknown, 'object' | never>) => {
      realm.write(() => {
        realm.delete(collection);
      });
    },
    [realm],
  );

  return {write, deleteObject, realm};
};
