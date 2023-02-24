import styles from "@/styles/Contact.module.css";
import { fontSyne, fontRobotoMono } from "@/pages/_app";
import SocialMedia from "./SocialMedia/SocialMedia";
import Button from "../base/Button";

const SendMsg = () => {
  return (
    <section className={styles.msg__container}>
      <div className={styles.msg_left__container}>
        <div className={styles.msg_left_title__container}>
          <p
            className={`${styles.msg_left_title__heading} ${fontRobotoMono.className} global__text-meta`}
          >
            CONTACT
          </p>
          <h1 className={`global__heading--medium ${fontSyne.className}`}>
            Creating true brands together.
          </h1>
        </div>
        <div className={styles.social_media__container}>
          <p className={`${fontRobotoMono.className} global__text-meta ${styles.social}`}>
            FIND US ON
          </p>
          <SocialMedia isReverse={true} />
        </div>
      </div>
      <div className={styles.msg_form__container}>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className={`${styles.msg__input} ${fontRobotoMono.className} global__text-meta`}
          />
          <input
            type="email"
            placeholder="Your Email"
            className={`${styles.msg__input} ${fontRobotoMono.className} global__text-meta`}
          />
          <textarea
            placeholder="Your Message"
            className={`${styles.msg__input} ${fontRobotoMono.className} global__text-meta`}
          />
          <Button>send message</Button>
        </form>
      </div>
    </section>
  );
};

export default SendMsg;
