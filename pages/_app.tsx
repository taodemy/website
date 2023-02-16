import "@/styles/reset.css";
import "@/styles/globals.css";
import localFont from "@next/font/local";
import { Syne, Roboto } from "@next/font/google";

export const titleFont = Syne({ subsets: ["latin"] });
export const textFont = localFont({
  src: [
    {
      path: "../styles/fonts/Satoshi-Regular.woff2",
      weight: "400",
    },
  ],
});

export const headingFont = Roboto({
  weight: "400",
  subsets: ["latin"],
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
