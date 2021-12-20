import { IThemes } from '../utils/theme';

import base from './base';
import easy from './easy';
import paris from './paris';

/**
 * The default theme to load
 */
export const DEFAULT_THEME = 'paris';

export const themes: IThemes = {
  base,
  paris,
  easy,
};
