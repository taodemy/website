import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { blogs } from "@/constants/blogDb.json";
import styles from "@/styles/BlogSingle.module.css";

interface stateProps {
  id: number;
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
  const [currentBlog, setCurrentBlog] = useState<stateProps>();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (typeof id === "undefined") {
      return;
    } else if (Array.isArray(id)) {
      return;
    } else {
      const blog = blogs.filter((blog) => blog.id === parseInt(id));
      setCurrentBlog(blog[0]);
    }
  }, [id]);

  console.log(currentBlog);
  if (currentBlog === undefined) {
    return;
  } else {
    return (
      <div>
        {currentBlog.title}
        <figure>
          <img
            src={currentBlog.image}
            alt={currentBlog.title}
            className={`${styles.blogsingle_image_container}`}
          />
        </figure>
      </div>
    );
  }
}
