import React from 'react';

import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="auth-wrapper flex min-h-screen border-spacing-0 items-center justify-center bg-background-dark">
      <Outlet />
    </div>
  );
}
