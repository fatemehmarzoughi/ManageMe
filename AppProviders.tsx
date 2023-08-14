import {RealmProvider} from '@realm/react';
import React from 'react';
import {View} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {AppRoute} from 'src/AppRoute';
import {realmConfig} from 'src/configs';
import ContextProvider from 'src/configs/contextConfig/contextProvider';

export const App = React.memo(() => {
  return (
    <ContextProvider>
      <SafeAreaProvider>
        <PaperProvider>
          <RealmProvider {...realmConfig}>
            <AppRoute />
            <Toast />
          </RealmProvider>
        </PaperProvider>
      </SafeAreaProvider>
    </ContextProvider>
  );
});
