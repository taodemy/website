import styles from "@/styles/AboutUs.module.css";
import { fontSyne, fontRobotoMono } from "@/pages/_app";
import { PhoneSizeProp } from "@/pages/studio";

const AboutUs = ({ isPhoneSize }: PhoneSizeProp) => {
  return (
    <section className={styles["about_us"]}>
      <p className={`${fontRobotoMono.className} global__text-meta ${styles["about_us__heading"]}`}>
        About Us
      </p>
      <h1
        className={`${fontSyne.className} ${
          isPhoneSize ? "global__heading-h2" : "global__heading--medium"
        } ${styles["about_us__title"]} `}
      >
        Creative studio <br />
        that inspires.
      </h1>
      <img
        className={styles["about_us__image"]}
        src="/images/our_value.jpeg"
        aria-label="studio page about us image"
        alt="studio page about us image"
      />
    </section>
  );
};

export default AboutUs;
