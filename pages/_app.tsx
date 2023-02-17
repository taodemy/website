import "@/styles/reset.css";
import "@/styles/globals.css";
import localFont from "@next/font/local";
import { Syne, Roboto_Mono } from "@next/font/google";
import GlobalLayout from "../layouts";

export const fontSyne = Syne({ subsets: ["latin"] });
export const fontSatoshi = localFont({
  src: [
    {
      path: "../styles/fonts/Satoshi-Regular.woff2",
      weight: "400",
    },
  ],
});

export const fontRobotoMono = Roboto_Mono({
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
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </>
  );
}
