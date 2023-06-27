import { useMemo } from 'react';

import { getAccessToken } from 'lib/general/token';

export const useProfile = () => {
  const accessToken = getAccessToken();
  const isLoggedIn = !!accessToken;

  return useMemo(
    () => ({
      isLoggedIn,
    }),
    [isLoggedIn]
  );
};
