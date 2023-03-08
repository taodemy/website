import styles from "@/styles/CommonQuestions.module.css";
import { fontSyne, fontRobotoMono, fontSatoshi } from "@/pages/_app";
import FAQ from "./FAQ";

const CommonQuestions = () => {
  return (
    <section className={styles.questions}>
      <div className={styles.questions_title__contrainer}>
        <p
          className={`${styles.msg_left_title__heading} ${fontRobotoMono.className} global__text-meta`}
        >
          FAQ
        </p>
        <h1 className={`global__heading--small ${fontSyne.className}`}>Common Questions</h1>
      </div>
      <FAQ />
    </section>
  );
};
export default CommonQuestions;
