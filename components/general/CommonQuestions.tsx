import styles from "@/styles/CommonQuestions.module.css";
import { fontSyne, fontRobotoMono } from "@/pages/_app";
import FAQ from "./FAQ";
import EViewPortQuery from "@/constants/viewPortSize";
import useMediaQuery from "@/hooks/useMediaQuery";

const { PHONE } = EViewPortQuery;

const CommonQuestions = () => {
  const isPhoneSize = useMediaQuery(PHONE);
  return (
    <section className={styles.questions}>
      <div className={styles.questions_title__contrainer}>
        <p
          className={`${styles.msg_left_title__heading} ${fontRobotoMono.className} global__text-meta`}
        >
          FAQ
        </p>
        <h1
          className={`${isPhoneSize ? "global__heading-h2" : "global__heading--small"}  ${
            fontSyne.className
          }`}
        >
          Common Questions
        </h1>
      </div>
      <FAQ />
    </section>
  );
};
export default CommonQuestions;
