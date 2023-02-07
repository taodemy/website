import "@/styles/globals.css";
import localFont from "@next/font/local";
import { Syne } from "@next/font/google";

export const titleFont = Syne({ subsets: ["latin"] });
export const textFont = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Regular.woff2",
      weight: "400",
    },
  ],
});

import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
