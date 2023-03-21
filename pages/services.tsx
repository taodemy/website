import React from "react";
import Contact from "@/components/general/Contact";
import Head from "next/head";
import ServicesTitle from "@/components/ServicePage/ServiceTitle";
import Services from "@/components/ServicePage/Services";
import useMediaQuery from "@/hooks/useMediaQuery";
import EViewPortQuery from "@/constants/viewPortSize";

const {PHONE } = EViewPortQuery;

export default function Service() {
  const isPhoneSize = useMediaQuery(PHONE);
  
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
        <ServicesTitle />
        <Services />
        <Contact isPhoneSize={isPhoneSize} />
      </div>
    </>
  );
}