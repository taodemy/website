import styles from "./WorkTitle.module.css";
import { fontSyne, fontRobotoMono } from "@/pages/_app";

type WorkTitleProps = {
  isPhoneSize: boolean;
};

const WorkTitle = ({ isPhoneSize }: WorkTitleProps) => {
  return (
    <section className={styles.work_block}>
      <p className={`${fontRobotoMono.className} global__text-meta ${styles.work_block__heading}`}>
        work
      </p>
      <h1
        className={`${fontSyne.className} ${
          isPhoneSize ? "global_heading-h2" : "global__uppercase-heading--medium"
        } ${styles.work_block__title_text}`}
      >
        Our branding <br /> success stories.
      </h1>
    </section>
  );
};

export default WorkTitle;
