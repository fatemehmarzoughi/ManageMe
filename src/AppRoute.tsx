import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useQuery} from '@realm/react';
import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {BoardObjectType} from './configs';
import context from './configs/contextConfig/context';
import {Boards, BoardView} from './pages';
import {styles} from './styles';

export type RootStackParamList = {
  Boards: undefined;
  BoardView: {themeId: string};
};

export const AppRoute = React.memo(() => {
  const Stack = createStackNavigator<RootStackParamList>();
  const {setIsCreatingBoard} = useContext(context);
  const boards = useQuery<BoardObjectType>('Board');

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Boards">
        <Stack.Screen
          name="Boards"
          options={{
            title: 'Boards',
            // eslint-disable-next-line react/no-unstable-nested-components
            headerRight: () => {
              return !boards.length ? (
                <></>
              ) : (
                <TouchableOpacity
                  style={styles.rightContent}
                  onPress={() => setIsCreatingBoard(true)}>
                  <Icon size={25} name="add" />
                </TouchableOpacity>
              );
            },
          }}>
          {() => <Boards />}
        </Stack.Screen>
        <Stack.Screen
          name="BoardView"
          options={{
            title: 'Board',
          }}>
          {() => <BoardView />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
});
