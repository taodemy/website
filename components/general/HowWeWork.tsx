import styles from "@/styles/HowWeWork.module.css";
import { fontSyne, fontSatoshi, fontRobotoMono } from "@/pages/_app";
import Button from "../base/Button";

function HowWeWork() {
  return (
    <section className={styles.how_we_work}>
      <div className={styles.how_we_work__title}>
        <p
          className={`${fontRobotoMono.className} global__text-meta ${styles.how_we_work__title_heading}`}
        >
          HOW WE WORK
        </p>

        <h1
          className={`${fontSyne.className} global__heading--small ${styles.how_we_work__title_text}`}
        >
          We help our clients <br />
          succeed with innovative
          <br />
          strategies.
        </h1>

        <img
          src="/images/star.svg"
          className={styles.how_we_work__icon}
          aria-label="star_icon"
          alt="how we work icon"
        />
      </div>
      <article className={styles.how_we_work__content}>
        <p
          className={`${fontSatoshi.className} global__text--large ${styles.how_we_work__content_text}`}
        >
          Our team of experts is dedicated to delivering real results through creativity, strategic
          thinking, and technical expertise. Whether it&#39;s developing a new marketing campaign,
          designing a website, or creating a mobile app, we are always pushing the boundaries of
          what&#39;s possible to help our clients stay ahead of the curve.
        </p>
        <Button>OUR SERVICES</Button>
      </article>
    </section>
  );
}

export default HowWeWork;
