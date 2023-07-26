// components/Login.js
import { useEffect } from 'react';

import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line import/extensions
import '@aws-amplify/ui-react/styles.css';

export function Login() {
  const { route } = useAuthenticator((context) => [
    context.route,
    context.user,
  ]);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  useEffect(() => {
    if (route === 'authenticated') {
      navigate(from, { replace: true });
    }
  }, [route, navigate, from]);

  return <Authenticator socialProviders={['google', 'amazon']} />;
}
