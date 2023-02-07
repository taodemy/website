import styles from "@/styles/Hero.module.css";
import { textFont, titleFont } from "@/pages/_app";

const Hero = () => {
  return (
    <div className={styles["hero"]}>
      <div className={styles["hero__section"]}>
        <div>
          <div
            data-testid="hero__section__slogan"
            className={`${titleFont.className} heading--medium ${styles["hero__section__slogan"]}`}
          >
            We are a <br />
            digital agency
            <br /> from Melbourne.
          </div>
          <div
            data-testid="hero__section__txt"
            className={`${textFont.className} text--xlarge ${styles["hero__section__txt"]}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </div>
        </div>
        <img
          data-testid="hero__icon"
          className={styles["hero__icon"]}
          src="/images/vector.png"
          alt="hero icon"
        />
      </div>
      <div className={styles["hero__section"]}>
        <img
          data-testid="hero__photo"
          className={styles["hero__photo"]}
          src="/images/hero.png"
          alt="hero photo"
        />
      </div>
    </div>
  );
};

export default Hero;
