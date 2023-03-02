import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import blogs from "@/constants/blogDb.json";
import Divider from "@/components/base/Divider";
import styles from "@/styles/BlogSingle.module.css";
import Button from "@/components/base/Button";
import InfoItem from "@/components/general/InfoItem";
import { fontSyne, fontSatoshi, fontRobotoMono } from "@/pages/_app";

interface Blog {
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
export default function Blog() {
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);
  const router = useRouter();
  const { id } = router.query;
  console.log(typeof id);
  useEffect(() => {
    const blog = blogs.data.filter((blog) => blog.id === id);
    if (blog[0]) setCurrentBlog(blog[0]);
  }, [id]);

  return currentBlog ? (
    <div>
      <section className={`${styles.blog_title_section}`}>
        <div className={`${styles.blog_title_button}`}>
          <Button variant="secondary" padding="small">
            <p>GO BACK</p>
          </Button>
        </div>
        <div className={`${styles.blog_title_text}`}>
          <h1 className={`${fontSyne.className} global__heading--medium`}>{currentBlog.title}</h1>
          <p className={`${fontSatoshi.className} global__text-xlarge`}>{currentBlog.subtitle}</p>
        </div>
        <Divider style={{ margin: "0px 48px" }} />
        <div className={`${styles.blog_title_aside}`}>
          {Object.entries(currentBlog.info).map(([key, value], index) => {
            if (key === "readingTime") {
              key = "reading Time";
            }
            return <InfoItem key={index} title={key} text={value} />;
          })}
        </div>
      </section>
      <section className={`${styles.blog_image_container}`}>
        <img
          src={currentBlog.image}
          alt={currentBlog.alt}
          aria-label={currentBlog.title}
          className={`${styles.blog_image}`}
        />
      </section>
      <section className={`${styles.blog_content_section}`}>
        <section className={`${styles.blog_content_blank}`} />
        <p className={`${styles.blog_content_text} ${fontSatoshi.className} global__text-default`}>
          {currentBlog.content}
        </p>
        <Divider style={{ margin: "0px 48px" }} />
        <section className={`${styles.blog_content_aside}`}>
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
          <ul className={`${styles.blog_content_share}`}>
            <li>
              <img src="/images/badge-fb.svg" alt="badge" aria-label="badge__fb" />
            </li>
            <li>
              <img src="/images/badge-in.svg" alt="badge" aria-label="badge__in" />
            </li>
            <li>
              <img src="/images/badge-ln.svg" alt="badge" aria-label="badge__ln" />
            </li>
          </ul>
        </section>
      </section>
    </div>
  ) : (
    <></>
  );
}
// }
