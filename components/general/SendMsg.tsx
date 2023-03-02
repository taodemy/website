import styles from "@/styles/ContactPage.module.css";
import { fontSyne, fontRobotoMono } from "@/pages/_app";
import SocialMedia from "./SocialMedia/SocialMedia";
import Button from "../base/Button";
import { useEffect, useState } from "react";

const SendMsg = () => {
  const [isNameFieldEmpty, setIsNameFieldEmpty] = useState(true);
  const [isEmailFieldEmpty, setIsEmailFieldEmpty] = useState(true);
  const [isMessageFieldEmpty, setIsMessageFieldEmpty] = useState(true);
  const handleNameFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsNameFieldEmpty(event.target.value.length == 0 ? true : false);
  };
  useEffect(() => {
    const label = document.getElementById("username_label");
    if (label) {
      if (isNameFieldEmpty == false) {
        label.style.visibility = "hidden";
      } else {
        label.style.visibility = "visible";
      }
    }
  }, [isNameFieldEmpty]);
  const handleEmailFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsEmailFieldEmpty(event.target.value.length == 0 ? true : false);
  };
  useEffect(() => {
    const label = document.getElementById("email_label");
    if (label) {
      if (isEmailFieldEmpty == false) {
        label.style.visibility = "hidden";
      } else {
        label.style.visibility = "visible";
      }
    }
  }, [isEmailFieldEmpty]);
  const handleMessageFieldChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsMessageFieldEmpty(event.target.value.length == 0 ? true : false);
  };
  useEffect(() => {
    const label = document.getElementById("message_label");
    if (label) {
      if (isMessageFieldEmpty == false) {
        label.style.visibility = "hidden";
      } else {
        label.style.visibility = "visible";
      }
    }
  }, [isMessageFieldEmpty]);
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
          <div className={styles.label_input__container}>
            <label
              id="username_label"
              htmlFor="username"
              className={`${fontRobotoMono.className} global__text-meta ${styles.msg__label}`}
            >
              Your Name
            </label>
            <input
              type="text"
              id="username"
              onChange={handleNameFieldChange}
              className={`${styles.msg__input} ${fontRobotoMono.className} global__text-meta`}
            />
          </div>
          <div className={styles.label_input__container}>
            <label
              id="email_label"
              htmlFor="email"
              className={`${fontRobotoMono.className} global__text-meta ${styles.msg__label}`}
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              onChange={handleEmailFieldChange}
              className={`${styles.msg__input} ${fontRobotoMono.className} global__text-meta`}
            />
          </div>
          <div className={styles.label_input__container}>
            <label
              id="message_label"
              htmlFor="message"
              className={`${fontRobotoMono.className} global__text-meta ${styles.msg__label}`}
            >
              Your Message
            </label>
            <textarea
              id="message"
              onChange={handleMessageFieldChange}
              className={`${styles.msg__input} ${styles.msg__textarea} ${fontRobotoMono.className} global__text-meta`}
            />
          </div>
          <Button>send message</Button>
        </form>
      </div>
    </section>
  );
};

export default SendMsg;
