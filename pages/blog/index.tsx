import Head from "next/head";
import Subscription from "@/components/general/Subscription";
import BlogTitle from "@/components/Blog/BlogTitle";
import BlogGallery from "@/components/Blog/BlogPosts";
import EViewPortQuery from "@/constants/viewPortSize";
import useMediaQuery from "@/hooks/useMediaQuery";

const { PHONE } = EViewPortQuery;

export async function getStaticProps() {
  const res = await fetch(`${process.env.WEBSITE_API_URL}/BlogPage`);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}

export default function Blog({ data }: any) {
  const isPhoneSize = useMediaQuery(PHONE);

  return (
    <>
      <Head>
        <title>Blog page - TaoTech</title>
        <meta
          name="description"
          content="Blog of design posts page on TaoTech. Subscribe and learn real design from us."
        />
        <meta
          name="keywords"
          content="descriptive, correlational, experimental, diagnostic design posts"
        />
        <meta name="author" content="Taodemy Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <BlogTitle isPhoneSize={isPhoneSize} />
        <BlogGallery data={data} />
        <Subscription />
      </main>
    </>
  );
}
