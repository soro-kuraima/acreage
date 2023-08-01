import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Page } from 'components/common';
import { RequireAuth } from 'components/functional';
import { Account } from 'pages/app/account/Account';
import { AppLayout } from 'pages/app/AppLayout';
import { CreateProperty } from 'pages/app/create-property/CreateProperty';
import { Market } from 'pages/app/market/Market';
import { Page404 } from 'pages/app/misc/Page404';
import { MyInvestments } from 'pages/app/my-investments/MyInvestments';
import { MyProperties } from 'pages/app/my-properties/MyProperties';
import { Property } from 'pages/app/property/[id]/Property';
import { AuthLayout } from 'pages/auth/AuthLayout';
import { Login } from 'pages/auth/login/Login';

export const routes = createBrowserRouter([
  {
    path: '',
    element: (
      <RequireAuth>
        <Navigate to="/app/market" />
      </RequireAuth>
    ),
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: 'login',
        element: (
          <Page title="Login">
            <Login />
          </Page>
        ),
      },
    ],
  },
  {
    path: '/app',
    element: <AppLayout />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        path: 'market',
        element: (
          <Page title="Market">
            {' '}
            <Market />{' '}
          </Page>
        ),
      },
      {
        path: 'market/property/:id',
        element: (
          <Page title="Property">
            <Property />
          </Page>
        ),
      },
      {
        path: 'create',
        element: (
          <Page title="Create Property">
            <CreateProperty />
          </Page>
        ),
      },
      {
        path: 'my-properties',
        element: (
          <Page title="Properties">
            <MyProperties />
          </Page>
        ),
      },
      {
        path: 'my-properties/property/:id',
        element: (
          <Page title="Property">
            <Property />
          </Page>
        ),
      },
      {
        path: 'my-investments',
        element: (
          <Page title="My Investments">
            <MyInvestments />
          </Page>
        ),
      },
      {
        path: 'my-investments/property/:id',
        element: (
          <Page title="Property">
            <Property />
          </Page>
        ),
      },
      {
        path: 'account',
        element: (
          <Page title="account">
            <Account />
          </Page>
        ),
      },
    ],
  },
]);
