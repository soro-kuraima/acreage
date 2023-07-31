import { ScrollView } from '@aws-amplify/ui-react';
import { Outlet } from 'react-router-dom';

import { RequireAuth, Menu } from 'components/functional';

export function AppLayout() {
  return (
    <RequireAuth>
      <div className="App min-h-screen bg-background-dark">
        <header className="h-20 text-background-contrastText">
          this is a header
        </header>
        <div className="flex-start flex overflow-hidden">
          <Menu />
          <div className="container">
            <ScrollView height="90vh">
              <Outlet />
            </ScrollView>
          </div>
        </div>
      </div>
    </RequireAuth>
  );
}
