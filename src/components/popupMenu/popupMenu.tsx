import React from 'react';
import {Menu, Modal, Portal} from 'react-native-paper';
import {IconSource} from 'react-native-paper/lib/typescript/src/components/Icon';

import {styles} from './style';

export type IPopupMenuItem = {
  id: string;
  title: string;
  leadingIcon?: IconSource;
  onPress: () => void;
};

export type IPopupMenu = {
  isOpen: boolean;
  onClose?: () => void;
  IPopupMenuItem: Array<IPopupMenuItem>;
};

export const PopupMenu: React.FC<IPopupMenu> = React.memo(
  ({isOpen, onClose, IPopupMenuItem}) => {
    return (
      <Portal>
        <Modal
          visible={isOpen}
          onDismiss={() => {
            onClose?.();
          }}
          contentContainerStyle={styles.moreOptions}>
          {IPopupMenuItem.map(item => (
            <Menu.Item key={item.id} {...item} />
          ))}
        </Modal>
      </Portal>
    );
  },
);
