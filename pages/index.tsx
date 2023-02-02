import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.description}>
        <div>
        <p className={"heading-large"}>This is heading-large</p>
        <p className={"heading-medium"}>This is heading-medium</p>
        <p className={"heading-medium-uppercase"}>THIS IS HEADING-MEDIUM-UPPERCASE</p>
        <p className={"heading-small"}>This is heading-small</p>
        <p className={"heading-small-uppercase"}>THIS IS HEADING-H1-UPPERCASE</p>
        <p className={"heading-h1"}>This is heading-h1</p>
        <p className={"heading-h1-uppercase"}>THIS IS HEADING-H1-UPPERCASE</p>
        <p className={"heading-h2"}>This is heading-h2</p>
        <p className={"heading-h2-uppercase"}>THIS IS HEADING-H2-UPPERCASE</p>
        <p className={"heading-h3"}>This is heading-h3</p>
        <p className={"heading-h3-uppercase"}>THIS IS HEADING-H3-UPPERCASE</p>
        <p className={"heading-h4"}>This is heading-h4</p>
        <p className={"heading-h4-uppercase"}>THIS IS HEADING-H4-UPPERCASE</p>
        <p className={"text-xlarge"}>This is text-xlarge</p>
        <p className={"text-large"}>This is text-large</p>
        <p className={"text-medium"}>This is text-medium</p>
        <p className={"text-default"}>This is text-default</p>
        <p className={"text-meta"}>This is text-meta</p>
        <p className={"text-meta-small"}>This is text-meta-small</p>
        </div>
        <div className={"text-meta-small"}>there is the text default color
            <style jsx>{`
          div{
          color:var(--text-default);
          }
        `}
            </style>
        </div>

        <div className={"text-meta-small"}>there is the text inverse color
            <style jsx>{`
          div{
          color:var(--text-inverse);
          background:var(--background-primary);
          }
        `}
            </style>
        </div>
        <div className={"text-meta-small"}>there is the border color
            <style jsx>{`
          div{
            border: 1px solid ;
            border-color:var(--border-default);
          }
        `}
            </style>
        </div>
        <div className={"text-meta-small"}>there is the background default color
            <style jsx>{`
          div{
            background:var(--background-default);
          }
        `}
            </style>
        </div>
        <div className={"text-meta-small"}>there is the background primary color
            <style jsx>{`
          div{
            background:var(--background-primary);
            color:var(--text-inverse);
          }
        `}
            </style>
        </div>
        <div className={"text-meta-small"}>there is the background secondary color
            <style jsx>{`
          div{
            background:var(--background-secondary);
          }
        `}
            </style>
        </div>
      </main>
    </>
  );
}
