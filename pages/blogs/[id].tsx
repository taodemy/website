import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import blogs from "@/constants/blogDb.json";
import styles from "@/styles/BlogSingle.module.css";
import Button from "@/components/base/Button";
import { fontSyne, fontSatoshi } from "@/pages/_app";

interface stateProps {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  image: string;
  alt: string;
  date: string;
  category: string;
  readingTime: string;
}
export default function Blog() {
  const [currentBlog, setCurrentBlog] = useState<stateProps>({
    id: "",
    title: "",
    subtitle: "",
    content: "",
    image: "",
    alt: "",
    date: "",
    category: "",
    readingTime: "",
  });
  const router = useRouter();
  const { id } = router.query;
  console.log(typeof id);
  useEffect(() => {
    const blog = blogs.data.filter((blog) => blog.id === id);
    if (blog[0]) setCurrentBlog(blog[0]);
  }, [id]);

  return (
    <div>
      <section className={`${styles.blogsingle_title_section}`}>
        <div className={`${styles.blogsingle_title_button}`}>
          <Button variant="secondary" isBlock={true}>
            <p>GO BACK</p>
          </Button>
        </div>
        <div className={`${styles.blogsingle_title_text}`}>
          <h1 className={`${fontSyne.className} global__heading--medium`}>{currentBlog.title}</h1>
          <p className={`${fontSatoshi.className} global__text-xlarge`}>{currentBlog.subtitle}</p>
        </div>
        <div className={`${styles.blogsingle_title_misc}`}>miscellaneous</div>
      </section>

      <img
        src={currentBlog.image}
        alt={currentBlog.alt}
        aria-label={currentBlog.title}
        className={`${styles.blogsingle_image_container}`}
      />
    </div>
  );
}
// }
