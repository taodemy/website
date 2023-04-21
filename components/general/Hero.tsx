import styles from "@/styles/Hero.module.css";
import { fontSyne, fontSatoshi } from "@/pages/_app";

export interface IHero {
  isPhoneSize: boolean;
  heading: string;
  text: string;
}

const Hero = (props: IHero) => {
  return (
    <div className={styles["hero"]}>
      <div className={styles["hero__section"]}>
        <div>
          <div
            className={`${fontSyne.className} ${
              props.isPhoneSize ? "global__heading-h2" : "global__heading--medium"
            } ${styles["hero__slogan"]}`}
          >
            {props.heading}
          </div>
          <div className={`${fontSatoshi.className} global__text-xlarge ${styles["hero__txt"]}`}>
            {props.text}
          </div>
        </div>
        <img
          className={styles["hero__icon"]}
          aria-label="hero__icon"
          src="/images/vector.png"
          alt="hero icon"
        />
      </div>
      <div className={styles["hero__section"]}>
        <img
          className={styles["hero__photo"]}
          aria-label="hero__photo"
          src="/images/hero.png"
          alt="hero photo"
        />
      </div>
    </div>
  );
};

export default Hero;
