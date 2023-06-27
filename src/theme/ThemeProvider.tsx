import React, {
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { ThemeName } from 'theme/types';

export const ThemeContext = React.createContext({});
export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeName>('dark');

  const changeTheme = useCallback((newTheme: ThemeName) => {
    setTheme(newTheme);
  }, []);
  const providerValues = useMemo(
    () => ({
      theme,
      changeTheme,
    }),
    [theme, changeTheme]
  );

  return (
    <ThemeContext.Provider value={providerValues}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}
