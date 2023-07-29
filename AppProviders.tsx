import {RealmProvider} from '@realm/react';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppRoute} from 'src/AppRoute';
import {realmConfig} from 'src/configs';

export const App = React.memo(() => {
  return (
    <SafeAreaProvider>
      <RealmProvider {...realmConfig}>
        <AppRoute />
      </RealmProvider>
    </SafeAreaProvider>
  );
});
