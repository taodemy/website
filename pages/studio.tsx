import Head from "next/head";
import AboutUs from "@/components/general/AboutUs";
import OurValueV2 from "@/components/general/OurValue2";
import OurTeam from "@/components/general/OurTeam";
import Contact, { IContact } from "@/components/general/Contact";
import useMediaQuery from "@/hooks/useMediaQuery";
import EViewPortQuery from "@/constants/viewPortSize";
import { GetStaticProps } from "next";

interface Props {
  indexPage: IIndexPage;
  errorMessage?: string;
}

interface IIndexPage {
  contact: IContact;
}

export interface PhoneSizeProp {
  isPhoneSize: boolean;
}

export /* istanbul ignore next */ async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.WEBSITE_API_URL}/IndexPage`);
    if (res.ok) {
      const data: IIndexPage = await res.json();
      return {
        props: {
          indexPage: data,
        },
      };
    } else {
      throw new Error("Failed to fetch data, please check!");
    }
  } catch (error) {
    return {
      props: {
        indexPage: null,
        errorMessage: "Failed to fetch data, please check!",
      },
    };
  }
}

export default function Studio({ indexPage, errorMessage }: Props) {
  const { PHONE } = EViewPortQuery;
  const isPhoneSize = useMediaQuery(PHONE);

  if (!indexPage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <>
      <Head>
        <title>Taodemy Website</title>
        <meta name="description" content="Generated by Taodemy" />
      </Head>
      <main>
        <AboutUs isPhoneSize={isPhoneSize} />
        <OurValueV2 isPhoneSize={isPhoneSize} />
        <OurTeam isPhoneSize={isPhoneSize} />
        <Contact {...indexPage.contact} />
      </main>
    </>
  );
}
