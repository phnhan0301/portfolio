import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import createEmotionCache from "app/helpers/createEmotionCache";
import { Page } from "app/types";
import { lightTheme } from "assets/styles/theme";
import { MainLayout } from "layout";
import type { AppProps } from "next/app";
import Head from "next/head";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: Page;
}

const MyApp = ({
  Component,
  emotionCache = createEmotionCache(),
  pageProps,
}: MyAppProps) => {
  const Layout = Component.layout || MainLayout;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Portfolio | Z31o_0 Phan</title>
      </Head>

      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />

          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default MyApp;
