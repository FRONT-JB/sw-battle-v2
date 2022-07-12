import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';

import { globalStyles } from '@/styles/globalStyles';
import { theme } from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {globalStyles}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
