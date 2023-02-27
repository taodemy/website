import styles from "@/styles/ContactPage.module.css";
import SendMsg from "./SendMsg";
import OurOffices from "./OurOffices";
import CommonQuestions from "./CommonQuestions";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <SendMsg />
      <OurOffices />
      <CommonQuestions />
    </div>
  );
};

export default Contact;
