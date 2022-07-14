import { ThemeTypes } from './types';

import '@emotion/react';

declare module '@emotion/react' {
  interface Theme extends ThemeTypes {}
}
