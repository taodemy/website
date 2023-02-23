import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import blogs from "@/constants/blogDb.json";
import styles from "@/styles/BlogSingle.module.css";

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
      {currentBlog.title}

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
