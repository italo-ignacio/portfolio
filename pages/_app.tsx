import Head from "next/head";
import GlobalStyles from "../src/styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Italo Ignacio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
