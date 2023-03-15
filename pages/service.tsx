import React from "react";
import Contact from "@/components/general/Contact";
import Head from "next/head";
import ServiceTitle from "@/components/service/ServiceTitle";
import Services from "@/components/service/Services";

export default function service() {
  return (
    <>
      <Head>
        <title>Contact page - TaoTech</title>
        <meta name="description" content="Our services" />
        <meta name="author" content="Taodemy Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <ServiceTitle />
        <Services />
        <Contact />
      </div>
    </>
  );
}
