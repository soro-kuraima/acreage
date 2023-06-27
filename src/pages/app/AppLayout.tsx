import { Outlet } from 'react-router-dom';

import { RequireAuth, Menu } from 'components/functional';

export function AppLayout() {
  return (
    <RequireAuth>
      <div className="App bg-background-dark min-h-screen flex flex-start">
        <Menu />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </RequireAuth>
  );
}
