import styles from "@/styles/SendMsg.module.css";
import { fontSyne, fontRobotoMono } from "@/pages/_app";
import SocialMedia from "./SocialMedia/SocialMedia";
import Button from "../base/Button";
import { useEffect, useRef, useState } from "react";
import EViewPortQuery from "@/constants/viewPortSize";
import useMediaQuery from "@/hooks/useMediaQuery";

const { PHONE } = EViewPortQuery;

const SendMsg = () => {
  const isPhoneSize = useMediaQuery(PHONE);
  const [usernameField, setUsernameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [messageField, setMessageField] = useState("");
  const [isNameFieldEmpty, setIsNameFieldEmpty] = useState(true);
  const [isEmailFieldEmpty, setIsEmailFieldEmpty] = useState(true);
  const [isMessageFieldEmpty, setIsMessageFieldEmpty] = useState(true);
  const userNameLabelRef = useRef<HTMLLabelElement>(null);
  const emailLabelRef = useRef<HTMLLabelElement>(null);
  const messageLabelRef = useRef<HTMLLabelElement>(null);
  const handleNameFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setIsNameFieldEmpty(text.length === 0 ? true : false);
    setUsernameField(text);
  };
  useEffect(() => {
    const label = userNameLabelRef.current;
    if (label && isNameFieldEmpty === false) {
      label.style.visibility = "hidden";
    }
    if (label && isNameFieldEmpty === true) {
      label.style.visibility = "visible";
    }
  }, [isNameFieldEmpty]);
  const handleEmailFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setIsEmailFieldEmpty(text.length === 0 ? true : false);
    setEmailField(text);
  };
  useEffect(() => {
    const label = emailLabelRef.current;
    if (label && isEmailFieldEmpty === false) {
      label.style.visibility = "hidden";
    }
    if (label && isEmailFieldEmpty === true) {
      label.style.visibility = "visible";
    }
  }, [isEmailFieldEmpty]);
  const handleMessageFieldChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setIsMessageFieldEmpty(text.length === 0 ? true : false);
    setMessageField(text);
  };
  useEffect(() => {
    const label = messageLabelRef.current;
    if (label && isMessageFieldEmpty === false) {
      label.style.visibility = "hidden";
    }
    if (label && isMessageFieldEmpty === true) {
      label.style.visibility = "visible";
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
          <h1
            className={`${isPhoneSize ? "global__heading-h2" : "global__heading--medium"} ${
              fontSyne.className
            }`}
          >
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
              ref={userNameLabelRef}
              htmlFor="username"
              className={`${fontRobotoMono.className} global__text-meta ${styles.msg__label}`}
            >
              Your Name
            </label>
            <input
              type="text"
              id="username"
              value={usernameField}
              onChange={handleNameFieldChange}
              className={`${styles.msg__input} ${fontRobotoMono.className} global__text-meta`}
            />
          </div>
          <div className={styles.label_input__container}>
            <label
              ref={emailLabelRef}
              htmlFor="email"
              className={`${fontRobotoMono.className} global__text-meta ${styles.msg__label}`}
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              value={emailField}
              onChange={handleEmailFieldChange}
              className={`${styles.msg__input} ${fontRobotoMono.className} global__text-meta`}
            />
          </div>
          <div className={styles.label_input__container}>
            <label
              ref={messageLabelRef}
              htmlFor="message"
              className={`${fontRobotoMono.className} global__text-meta ${styles.msg__label}`}
            >
              Your Message
            </label>
            <textarea
              id="message"
              value={messageField}
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
