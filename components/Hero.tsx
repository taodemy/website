import styles from "@/styles/Hero.module.css";
import { textFont, titleFont } from "@/pages/_app";

const Hero = () => {
  return (
    <div className={styles["hero"]}>
      <div className={styles["hero__section"]}>
        <div>
          <div
            className={`${titleFont.className} global__heading--medium ${styles["hero__slogan"]}`}
          >
            We are a <br />
            digital agency
            <br /> from Melbourne.
          </div>
          <div className={`${textFont.className} global__text-xlarge ${styles["hero__txt"]}`}>
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
