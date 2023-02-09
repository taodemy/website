import styles from "@/styles/Contact.module.css";
import Image from "next/image";
import arrows from "@/assets/arrows.svg";
import { titleFont } from "@/pages/_app";

function Contact() {
  return (
    <section className={styles.contact__container}>
      <div className={styles.contact__title_container}>
        <p className={`${titleFont.className} text-meta ${styles.contact_heading}`}>Contact</p>
        <h1 className={`${titleFont.className} heading-medium-uppercase ${styles.contact__title}`}>
          Let’s bring your brand to the next level
        </h1>
        <Image
          src={arrows}
          alt="contact arrows svg"
          width={100}
          height={100}
          className={styles.contact__icon}
        />
      </div>
      <div className={styles.contact_content_container}>
        <p className={`${titleFont.className} heading-h3 ${styles.contact__content}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
}

export default Contact;
