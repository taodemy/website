import React from "react";
import Contact, { IContact } from "@/components/general/Contact";
import Head from "next/head";
import ServicesTitle, { IServiceTitle } from "@/components/ServicePage/ServiceTitle";
import Services, { IServiceItems } from "@/components/ServicePage/Services";
import useMediaQuery from "@/hooks/useMediaQuery";
import EViewPortQuery from "@/constants/viewPortSize";
import { GetStaticProps } from "next";

interface Props {
  ServicePage: IServicePage;
}

export interface IServicePage {
  ServiceTitle: IServiceTitle;
  ServiceItems: IServiceItems;
  Contact: IContact;
}

const { PHONE } = EViewPortQuery;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(`${process.env.WEBSITE_API_URL}/ServicePage`);
  const data: IServicePage = await res.json();

  return {
    props: {
      ServicePage: data,
    },
  };
};

export default function Service({ ServicePage }: Props) {
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
        <ServicesTitle {...ServicePage.ServiceTitle} />
        <Services {...ServicePage.ServiceItems} />
        <Contact {...ServicePage.Contact} />
      </div>
    </>
  );
}
