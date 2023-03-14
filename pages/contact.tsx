import Head from "next/head";
import SendMsg from "@/components/general/SendMsg";
import OurOffices from "@/components/general/OurOffices";
import CommonQuestions from "@/components/general/CommonQuestions";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact page - TaoTech</title>
        <meta name="description" content="Way to contact us. Find the common questions." />
        <meta name="keywords" content="contact infomation, support, inquiry, help" />
        <meta name="author" content="Taodemy Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <SendMsg />
        {/* <OurOffices /> */}
        {/* <CommonQuestions /> */}
      </main>
    </>
  );
}
