import React from "react";
import Contact, { IContact } from "@/components/general/Contact";
import Head from "next/head";
import ServicesTitle, { IServiceTitle } from "@/components/ServicePage/ServiceTitle";
import Services, { IServiceItems } from "@/components/ServicePage/Services";
import useMediaQuery from "@/hooks/useMediaQuery";
import EViewPortQuery from "@/constants/viewPortSize";

interface Props {
  servicePage: IServicePage;
  errorMessage?: string;
}

interface IServicePage {
  serviceTitle: IServiceTitle;
  serviceItems: IServiceItems;
  contact: IContact;
}

const { PHONE } = EViewPortQuery;

export /* istanbul ignore next */ async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.WEBSITE_API_URL}/ServicePage`);
    if (res.ok) {
      const data: IServicePage = await res.json();
      return {
        props: {
          servicePage: data,
        },
      };
    } else {
      throw new Error("Failed to fetch data, please check!");
    }
  } catch (error) {
    return {
      props: {
        servicePage: null,
        errorMessage: "Failed to fetch data, please check!",
      },
    };
  }
}

export default function Service({ servicePage, errorMessage }: Props) {
  const isPhoneSize = useMediaQuery(PHONE);

  if (!servicePage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <>
      <Head>
        <title>Service page - TaoTech</title>
        <meta
          name="description"
          content="The services that our provid include banding, video, design and cotent"
        />
        <meta name="keywords" content="services,banding,video,design,cotent" />
        <meta name="author" content="Taodemy Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <ServicesTitle {...servicePage.serviceTitle} isPhoneSize={isPhoneSize} />
        <Services {...servicePage.serviceItems} isPhoneSize={isPhoneSize} />
        <Contact {...servicePage.contact} isPhoneSize={isPhoneSize} />
      </div>
    </>
  );
}
