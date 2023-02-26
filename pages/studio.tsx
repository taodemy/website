import Head from "next/head";
import AboutUs from "@/components/general/AboutUs";
import OurValueV2 from "@/components/general/OurValue2";
import OurTeam from "@/components/general/OurTeam";
import Contact from "@/components/general/Contact";

export default function Studio() {
  return (
    <>
      <Head>
        <title>Taodemy Website</title>
        <meta name="description" content="Generated by Taodemy" />
      </Head>
      <main>
        <AboutUs />
        <OurValueV2 />
        <OurTeam />
        <Contact />
      </main>
    </>
  );
}
