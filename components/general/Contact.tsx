import styles from "@/styles/Contact.module.css";
import { fontSyne, fontSatoshi, fontRobotoMono } from "@/pages/_app";
import Button from "../base/Button";

function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contact__title}>
        <p className={`${fontRobotoMono.className} global__text-meta ${styles.contact_heading}`}>
          Contact
        </p>
        <h1
          className={`${fontSyne.className} global__uppercase-heading--medium ${styles.contact__title_text}`}
        >
          Let’s bring your brand to the next level
        </h1>
        <img
          src="/images/design_icon.svg"
          alt="contact arrows icon"
          aria-label="contact_arrows_icon"
          width={100}
          height={100}
          className={styles.contact__icon}
        />
      </div>
      <div className={styles.contact__content}>
        <p
          className={`${fontSatoshi.className} global__text-xlarge ${styles.contact__content_text}`}
        >
          A programming journey can be challenging, but the potential for personal and professional
          growth makes it a rewarding experience that can lead to endless opportunities for
          innovation and problem-solving.
        </p>
        <Button>get in touch</Button>
      </div>
    </section>
  );
}

export default Contact;
