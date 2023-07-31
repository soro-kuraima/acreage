import React from 'react';

// eslint-disable-next-line import/extensions
import '@aws-amplify/ui-react/styles.css';
import {
  Authenticator,
  ThemeProvider as AmplifyThemeProvider,
} from '@aws-amplify/ui-react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Amplify } from 'aws-amplify';
import awsExports from 'aws-exports';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';

import { ErrorFallbackComponent } from 'components/functional';
import { queryClient } from 'constants/query-client';
import { AppRouter } from 'router/AppRouter';
import { acreageTheme } from 'theme/amplify-theme';
import { ThemeProvider } from 'theme/ThemeProvider';

Amplify.configure(awsExports);

export function App() {
  return (
    <Authenticator.Provider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AmplifyThemeProvider colorMode="dark" theme={acreageTheme}>
            <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
              <AppRouter />
            </ErrorBoundary>
          </AmplifyThemeProvider>
          <Toaster position="top-center" />
        </ThemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Authenticator.Provider>
  );
}
