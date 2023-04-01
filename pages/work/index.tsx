import Head from "next/head";
import Subscription from "@/components/general/Subscription";
import WorkTitle from "@/components/Work/WorkTitle";
import WorkPosts from "@/components/Work/WorkPosts";
import useMediaQuery from "@/hooks/useMediaQuery";
import EViewPortQuery from "@/constants/viewPortSize";

export default function Work() {
  const { PHONE } = EViewPortQuery;
  const isPhoneSize = useMediaQuery(PHONE);

  return (
    <>
      <Head>
        <title>Work page - TaoTech</title>
        <meta
          name="description"
          content="Work of design posts page on TaoTech. Subscribe and learn real design from us."
        />
        <meta
          name="keywords"
          content="descriptive, correlational, experimental, diagnostic design posts"
        />
        <meta name="author" content="Taodemy Team" />
      </Head>
      <main>
        <WorkTitle isPhoneSize={isPhoneSize} />
        <WorkPosts isPhoneSize={isPhoneSize} />
        <Subscription />
      </main>
    </>
  );
}
