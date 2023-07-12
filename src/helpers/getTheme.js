import { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';
import {
  ayuLight,
  ayuDark,
  gruvbox,
} from '../constants/themes';

export const getTheme = () => {
  const { theme } = useContext(SiteContext);

  if (theme === 'ayuLight') return ayuLight;
  if (theme === 'ayuDark') return ayuDark;
  if (theme === 'gruvbox') return gruvbox;
};
