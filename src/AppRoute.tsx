import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {Home} from './pages';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const AppRoute = React.memo(() => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Boards',
            headerRight: props => (
              <TouchableOpacity style={styles.rightContent} onPress={() => {}}>
                <Icon size={25} name="add" />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
});
