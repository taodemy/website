import Head from "next/head";
import Subscription from "@/components/general/Subscription";
import BlogTitle from "@/components/Blog/BlogTitle";
import BlogGallery from "@/components/Blog/BlogPosts";

export default function Blog() {
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
        <BlogTitle />
        <BlogGallery />
        <Subscription />
      </main>
    </>
  );
}
