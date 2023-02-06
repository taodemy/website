import styles from "@/styles/Hero.module.css";
import { textFont, titleFont } from "@/pages/_app";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroSection}>
        <div>
          <div
            data-testid="heroSectionSolgan"
            className={`${titleFont.className} heading-medium ${styles.heroSectionSolgan}`}
          >
            We are a <br />
            digital agency
            <br /> from Melbourne.
          </div>
          <div
            data-testid="heroSectionTxt"
            className={`${textFont.className} text-xlarge ${styles.heroSectionTxt}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </div>
        </div>
        <img
          data-testid="heroIcon"
          className={styles.heroIcon}
          src="/images/vector.png"
          alt="hero icon"
        />
      </div>
      <div className={styles.heroSection}>
        <img
          data-testid="heroPhoto"
          className={styles.heroPhoto}
          src="/images/hero.png"
          alt="hero photo"
        />
      </div>
    </div>
  );
};

export default Hero;
