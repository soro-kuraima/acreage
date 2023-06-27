import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from 'react-hot-toast';

import { ErrorFallbackComponent } from 'components/functional';
import { AppRouter } from 'router/AppRouter';
import { ThemeProvider } from 'theme/ThemeProvider';

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
          <AppRouter />
        </ErrorBoundary>
        <Toaster position="bottom-right" />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
