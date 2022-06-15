import Head from "next/head";
import UpButton from "../src/components/UpButton";
import GlobalStyles from "../src/styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Italo Ignacio</title>
      </Head>
      <GlobalStyles />
      <UpButton />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
