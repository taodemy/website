import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import blogs from "@/constants/blogDb.json";
import Divider from "@/components/base/Divider";
import styles from "@/styles/BlogSingle.module.css";
import Button from "@/components/base/Button";
import InfoItem from "@/components/general/InfoItem";
import { fontSyne, fontSatoshi, fontRobotoMono } from "@/pages/_app";
import Link from "next/link";
import SocialMedia from "@/components/general/SocialMedia/SocialMedia";
import EViewPortQuery from "@/constants/viewPortSize";
import useMediaQuery from "@/hooks/useMediaQuery";

const { PHONE } = EViewPortQuery;

interface Props {
  blogsData: IBlog[];
  errorMessage?: string;
}

interface IBlog {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  alt: string;
  info: { date: string; category: string; readingTime: string };
  author: string;
  authorInfo: string;
}

export /* istanbul ignore next */ async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.WEBSITE_API_URL}/BlogPage`);
    if (res.ok) {
      const data = await res.json();
      const blogsData = data.blogsData;
      
      return {
        props: {
          blogsData: blogsData || null,
        },
      };
    } else {
      throw new Error("Failed to fetch data, please check!");
    }
  } catch (error) {
    return {
      props: {
        blogsData: null,
        errorMessage: "Failed to fetch data, please check!",
      },
    };
  }
}

export default function Blog({ blogsData, errorMessage }: Props) {
  const [currentBlog, setCurrentBlog] = useState<IBlog | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (blogsData) {
      const blog = blogsData.find((blog) => blog.id === id);
      if (blog) setCurrentBlog(blog);
    }
  }, [id, blogsData]);
  const isPhoneSize = useMediaQuery(PHONE);

  if (!blogsData) {
    return <div>{errorMessage}</div>;
  }

  return currentBlog ? (
    <>
      <header className={`${styles.blog_title_section}`}>
        <div className={`${styles.blog_title_button}`}>
          <Link href="/">
            <Button variant="secondary" padding="small">
              <p>GO BACK</p>
            </Button>
          </Link>
        </div>
        <div className={`${styles.blog_title_text}`}>
          <h1
            className={`${fontSyne.className} 
          ${isPhoneSize ? "global__heading-h2" : "global__heading--medium"}
          ${styles.blog_title_head}`}
          >
            {currentBlog.title}
          </h1>
          <p className={`${fontSatoshi.className} global__text-xlarge`}>{currentBlog.subtitle}</p>
        </div>
        <Divider style={{ margin: "0px 48px" }} />
        <aside className={`${styles.blog_title_aside}`}>
          {Object.entries(currentBlog.info).map(([key, value], index) => {
            if (key === "readingTime") {
              key = "reading Time";
            }
            return <InfoItem key={index} title={key} text={value} />;
          })}
        </aside>
      </header>
      <img
        src={currentBlog.image}
        alt={currentBlog.alt}
        aria-label={currentBlog.title}
        className={`${styles.blog_image}`}
      />
      <section className={`${styles.blog_content_section}`}>
        <aside className={`${styles.blog_content_blank}`} />
        <p className={`${styles.blog_content_text} ${fontSatoshi.className} global__text-default`}>
          {currentBlog.content}
        </p>
        <Divider style={{ margin: "0px 48px" }} />
        <aside className={`${styles.blog_content_aside}`}>
          <h5 className={`${fontRobotoMono.className} global__text-meta`}>AUTHOR</h5>
          <h4 className={`${styles.blog_content_author} global__heading-h4 ${fontSyne.className}`}>
            {currentBlog.author}
          </h4>
          <p
            className={`${styles.blog_content_authorInfo} ${fontSatoshi.className} global__text-default`}
          >
            {currentBlog.authorInfo}
          </p>
          <h5 className={`${fontRobotoMono.className} global__text-meta`}>SHARE</h5>
          <div className={`${styles.blog_content_share}`}>
            <SocialMedia isReverse={true} />
          </div>
        </aside>
      </section>
    </>
  ) : (
    <></>
  );
}
