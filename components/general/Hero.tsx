import styles from "@/styles/Hero.module.css";
import { fontSyne, fontSatoshi } from "@/pages/_app";

type HeroProps = {
  isPhoneSize: boolean;
};

const Hero = ({ isPhoneSize }: HeroProps) => {
  return (
    <div className={styles["hero"]}>
      <div className={styles["hero__section"]}>
        <div>
          <div
            className={`${fontSyne.className} ${
              isPhoneSize ? "global__heading-h2" : "global__heading--medium"
            } ${styles["hero__slogan"]}`}
          >
            We are a <br />
            digital agency
            <br /> from Melbourne.
          </div>
          <div className={`${fontSatoshi.className} global__text-xlarge ${styles["hero__txt"]}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
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
