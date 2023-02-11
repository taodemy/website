import Values from "@/components/OurValues";
import Head from "next/head";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Taodemy Website</title>
        <meta name="description" content="Generated by Taodemy" />
      </Head>
      <main className="page__wrapper">
        <Hero />
        <Values />
      </main>
    </>
  );
}
