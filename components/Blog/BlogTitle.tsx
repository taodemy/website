import styles from "./BlogTitle.module.css";
import { fontSyne, fontSatoshi } from "@/pages/_app";
import Button from "../base/Button";
import EViewPortQuery from "@/constants/viewPortSize";
import useMediaQuery from "@/hooks/useMediaQuery";

const { PHONE } = EViewPortQuery;
const BlogTitle = () => {
  const isPhoneSize = useMediaQuery(PHONE);
  return (
    <section className={styles["blog_title"]}>
      <h1
        className={`${fontSyne.className} 
        ${isPhoneSize ? "global__heading-h2" : "global__heading--medium"}
        ${styles["blog_title__title"]} `}
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
