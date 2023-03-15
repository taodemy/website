import OurClients from "@/components/general/OurClients";
import Head from "next/head";
import Hero from "@/components/general/Hero";
import WhatWeDo from "@/components/general/WhatWeDo";
import Contact from "@/components/general/Contact";
import Values from "@/components/general/OurValues";
import FeaturedWork from "../components/general/FeaturedWork";
import LatestNews from "@/components/general/LatestNews";
import HowWework from "@/components/general/HowWeWork";
import EViewPortQuery from "@/constants/viewPortSize";
import useMediaQuery from "@/hooks/useMediaQuery";

const { DESKTOP, TABLET, PHONE } = EViewPortQuery;

export default function Home() {
  let isDesktopSize = useMediaQuery(DESKTOP);
  let isTabletSize = useMediaQuery(TABLET);
  let isPhoneSize = useMediaQuery(PHONE);

  return (
    <>
      <Head>
        <title>Taodemy Website</title>
        <meta name="description" content="Generated by Taodemy" />
      </Head>
      <main>
        <Hero isPhoneSize={isPhoneSize} />
        <OurClients />
        <WhatWeDo />
        <FeaturedWork isDesktopSize={isDesktopSize} isTableletSize={isTabletSize} />
        <HowWework />
        <Values />
        <Contact />
        <LatestNews />
      </main>
    </>
  );
}
