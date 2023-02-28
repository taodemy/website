import styles from "./BlogTitle.module.css";
import { fontSyne, fontSatoshi } from "@/pages/_app";
import Button from "../../base/Button";

const BlogTitle = () => {
  return (
    <section className={styles["blog_title"]}>
      <h1
        className={`${fontSyne.className} global__heading--medium ${styles["blog_title__title"]} `}
      >
        Blog
      </h1>
      <div className={styles["blog_title__sub_title"]}>
        <div
          className={`${fontSatoshi.className} global__text-xlarge ${styles["blog_title__sub_title__text"]}`}
        >
          Discover, learn, and be inspired <br />
          with our blog.
        </div>
        <div className={styles["blog_title__sub_title__button_group"]}>
          <Button variant="secondary" isBlock={true}>
            VIDEO
          </Button>
          <Button variant="secondary" isBlock={true}>
            BRANDING
          </Button>
          <Button variant="secondary" isBlock={true}>
            DESIGN
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogTitle;
