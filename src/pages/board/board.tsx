import React from 'react';
import {Text} from 'react-native';

export type IBoardProps = {
  id: string;
};

export const BoardPage: React.FC = React.memo(() => {
  return <Text>board</Text>;
});
