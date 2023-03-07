import styles from "@/styles/CommonQuestions.module.css";
import { fontSyne, fontRobotoMono, fontSatoshi } from "@/pages/_app";
import QuestionItem from "./QuestionItem";

const CommonQuestions = () => {
  return (
    <section className={styles.questions}>
      <div className={styles.questions_title__contrainer}>
        <p
          className={`${styles.msg_left_title__heading} ${fontRobotoMono.className} global__text-meta`}
        >
          FAQ
        </p>
        <h1 className={`global__heading--small ${fontSyne.className}`}>
          Common
          <br />
          Questions
        </h1>
      </div>
      <div className={styles.questions_right__container}>
        <div className={styles.questions_right__question}>
          <QuestionItem question="Integer vitae justo eget magna?" />
          <p className={`${fontSatoshi.className} global__text-default ${styles.question__text}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Elit ullamcorper dignissim cras tincidunt
            lobortis feugiat vivamus at. Tincidunt vitae semper quis lectus nulla at volutpat diam
            ut.
          </p>
        </div>
        <div className={styles.questions_right__question}>
          <QuestionItem question="Dolor magna eget est lorem ipsum?" />
        </div>
        <div className={styles.questions_right__question}>
          <QuestionItem question="Ac tincidunt vitae semper quis lectus?" />
        </div>
        <div className={styles.questions_right__question}>
          <QuestionItem question="Sagittis orci a scelerisque?" />
        </div>
      </div>
    </section>
  );
};
export default CommonQuestions;
