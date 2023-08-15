import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useQuery} from '@realm/react';
import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {BoardObjectType} from './configs';
import context from './configs/contextConfig/context';
import {BoardPage, Boards} from './pages';
import {styles} from './styles';

export const AppRoute = React.memo(() => {
  const Stack = createStackNavigator();
  const {setIsCreatingBoard} = useContext(context);
  const boards = useQuery<BoardObjectType>('Board');

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Boards">
        <Stack.Screen
          name="Boards"
          component={Boards}
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
          }}
        />
        <Stack.Screen
          name="BoardSinglePage"
          component={BoardPage}
          options={{
            title: 'Board',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
