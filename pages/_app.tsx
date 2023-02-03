import "@/styles/globals.scss";
import localFont from "@next/font/local";
import {Syne} from "@next/font/google"

export const titleFont = Syne({subsets: ['latin'] })
export const textFont = localFont({
  src:[ {
      path:'./Satoshi-Regular.woff2',
      weight: '400',
  }
  ]
})

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main >
      <Component {...pageProps} />
    </main>
  );
}
