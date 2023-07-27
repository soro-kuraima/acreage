import React from 'react';

import { Outlet } from 'react-router-dom';

import { Logo } from 'assets/Logo';

export function AuthLayout() {
  return (
    <div className="auth-wrapper flex min-h-screen flex-col items-center justify-center bg-background-dark">
      <div className="logo-container py-8">
        <Logo />
      </div>
      <Outlet />
    </div>
  );
}
