import NavBar from "@/src/components/NavBar";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "jotai";
import "../globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NewsCorp</title>
      </Head>
      <Provider>
        <NavBar />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
