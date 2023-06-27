import Cookies from 'js-cookie';

export const ACCESS_TOKEN_KEY = 'access_token';
export const REFRESH_TOKEN_KEY = 'refresh_token';

export const getAccessToken = () => Cookies.get(ACCESS_TOKEN_KEY);

export const setAccessToken = (token: string) =>
  Cookies.set(ACCESS_TOKEN_KEY, `Bearer ${token}`);

export const getRefreshToken = () => Cookies.get(REFRESH_TOKEN_KEY);

export const setRefreshToken = (token: string) =>
  Cookies.set(REFRESH_TOKEN_KEY, token);

export const removeAccessAndRefreshTokens = () => {
  Cookies.remove(REFRESH_TOKEN_KEY);
  Cookies.remove(ACCESS_TOKEN_KEY);
};
