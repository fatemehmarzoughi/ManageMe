import {RealmProvider} from '@realm/react';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppRoute} from 'src/AppRoute';
import {realmConfig} from 'src/configs';
import defaultValue from 'src/configs/contextConfig/context';
import ContextProvider from 'src/configs/contextConfig/contextProvider';

export const App = React.memo(() => {
  return (
    <ContextProvider>
      <SafeAreaProvider>
        <RealmProvider {...realmConfig}>
          <AppRoute />
        </RealmProvider>
      </SafeAreaProvider>
    </ContextProvider>
  );
});
