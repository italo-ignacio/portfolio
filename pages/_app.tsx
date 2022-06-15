import Head from "next/head";
import GlobalStyles from "../src/styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Italo Ignacio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Bitter&display=swap"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
