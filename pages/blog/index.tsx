import Head from "next/head";
import Subscription from "@/components/general/Subscription";
import BlogTitle from "@/components/Blog/BlogTitle";
import BlogGallery from "@/components/Blog/BlogPosts";
import EViewPortQuery from "@/constants/viewPortSize";
import useMediaQuery from "@/hooks/useMediaQuery";
import { IBlogPost } from "@/components/Blog/BlogPosts";

const { PHONE } = EViewPortQuery;

export /* istanbul ignore next */ async function getStaticProps() {
  try {
    const res = await fetch(`${process.env.WEBSITE_API_URL}/BlogPage`);
    if (res.ok) {
      const data = await res.json();
      return {
        props: {
          data,
        },
      };
    } else {
      throw new Error("Failed to fetch data, please check!");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null,
        errorMessage: "Failed to fetch data, please check!",
      },
    };
  }
}

export default function Blog({ data, errorMessage }: IBlogPost) {
  const isPhoneSize = useMediaQuery(PHONE);

  if (!data) {
    return <div>{errorMessage}</div>;
  }

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
        <BlogGallery {...data} />
        <Subscription />
      </main>
    </>
  );
}
