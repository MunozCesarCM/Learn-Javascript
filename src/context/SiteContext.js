import { createContext } from 'react';

export const SiteContext = createContext({
  sidebarActive: null,
  setSidebarActive: () => null,
  theme: 'ayuLight',
  setTheme: () => null,
});
