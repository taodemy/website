import styles from "./WorkTitle.module.css";
import { fontSyne, fontRobotoMono } from "@/pages/_app";

const WorkTitle = () => {
  return (
    <section className={styles.work_block}>
      <p className={`${fontRobotoMono.className} global__text-meta ${styles.work_block__heading}`}>
        work
      </p>
      <h1
        className={`${fontSyne.className} global__uppercase-heading--medium ${styles.work_block__title_text}`}
      >
        Our branding <br /> success stories.
      </h1>
    </section>
  );
};

export default WorkTitle;
