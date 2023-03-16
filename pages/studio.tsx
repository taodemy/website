import Head from "next/head";
import AboutUs from "@/components/general/AboutUs";
import OurValueV2 from "@/components/general/OurValue2";
import OurTeam from "@/components/general/OurTeam";
import Contact from "@/components/general/Contact";
import EViewPortQuery from "@/constants/viewPortSize";
import useMediaQuery from "@/hooks/useMediaQuery";

const { DESKTOP, TABLET, PHONE } = EViewPortQuery;

export default function Studio() {
  const isPhoneSize = useMediaQuery(PHONE);
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
        <Contact isPhoneSize={isPhoneSize} />
      </main>
    </>
  );
}
