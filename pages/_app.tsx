import NavBar from "@/src/components/NavBar";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "jotai";
import { ChakraProvider } from '@chakra-ui/react'
import "../globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>NewsCorp</title>
      </Head>
      <Provider>
        <NavBar />
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
}
