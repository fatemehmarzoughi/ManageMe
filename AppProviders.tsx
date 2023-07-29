import {RealmProvider} from '@realm/react';
import React from 'react';
import {AppRoute} from 'src/AppRoute';
import {realmConfig} from 'src/realmConfig';

export const App = React.memo(() => {
  return (
    <RealmProvider {...realmConfig}>
      <AppRoute />
    </RealmProvider>
  );
});
