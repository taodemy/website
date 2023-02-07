import styles from "@/styles/Hero.module.css";
import { textFont, titleFont } from "@/pages/_app";

const Hero = () => {
  return (
    <div className={styles["hero"]}>
      <div className={styles["hero-section"]}>
        <div>
          <div
            data-testid="hero-section-slogan"
            className={`${titleFont.className} heading-medium ${styles["hero-section-slogan"]}`}
          >
            We are a <br />
            digital agency
            <br /> from Melbourne.
          </div>
          <div
            data-testid="hero-section-txt"
            className={`${textFont.className} text-xlarge ${styles["hero-section-txt"]}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </div>
        </div>
        <img
          data-testid="hero-icon"
          className={styles["hero-icon"]}
          src="/images/vector.png"
          alt="hero icon"
        />
      </div>
      <div className={styles["hero-section"]}>
        <img
          data-testid="hero-photo"
          className={styles["hero-photo"]}
          src="/images/hero.png"
          alt="hero photo"
        />
      </div>
    </div>
  );
};

export default Hero;
