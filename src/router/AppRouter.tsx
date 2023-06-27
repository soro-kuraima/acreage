import { RouterProvider } from 'react-router-dom';

import { routes } from 'router/routes';

export function AppRouter() {
  return <RouterProvider router={routes} />;
}
