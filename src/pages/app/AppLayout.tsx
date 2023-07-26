import { Outlet } from 'react-router-dom';

import { RequireAuth, Menu } from 'components/functional';

export function AppLayout() {
  return (
    <RequireAuth>
      <div className="App flex min-h-screen justify-center bg-background-dark">
        <Menu />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </RequireAuth>
  );
}
