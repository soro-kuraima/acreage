import { useAuthenticator } from '@aws-amplify/ui-react';
import { useLocation, Navigate } from 'react-router-dom';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const { route } = useAuthenticator((context) => [
    context.route,
    context.user,
  ]);
  if (route !== 'authenticated') {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
}
