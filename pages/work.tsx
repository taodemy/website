import Head from "next/head";
import Subscription from "@/components/general/Subscription";
import WorkTitle from "@/components/Work/WorkTitle";
import WorkPosts from "@/components/Work/WorkPosts";

export default function Work() {
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <WorkTitle />
        <WorkPosts />
        <Subscription />
      </main>
    </>
  );
}
