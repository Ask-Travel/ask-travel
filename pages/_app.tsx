import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "../components/common/Layout";
import { GlobalStyle } from "../styles/globalStyle";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
