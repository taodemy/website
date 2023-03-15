import styles from "@/styles/OurTeam.module.css";
import { fontSyne, fontSatoshi } from "@/pages/_app";
import Card from "../base/Card";
import Divider from "../base/Divider";
import { PhoneSizeProp } from "@/pages/studio";

const OurTeam = ({ isPhoneSize }: PhoneSizeProp) => {
  return (
    <section className={styles["our_team"]}>
      <div className={styles["our_team__text_container"]}>
        <h1
          className={`${fontSyne.className} ${
            isPhoneSize ? "global__heading-h2" : "global__heading-h1"
          } ${styles.our_team__title}`}
        >
          {isPhoneSize ? (
            "OUR TEAM"
          ) : (
            <>
              OUR <br /> TEAM
            </>
          )}
        </h1>
        <p className={`${fontSatoshi.className} global__text--large`}>
          A team comprised of talented individuals with <br />a range of skills and expertise,
          working <br />
          collaboratively towards achieving our goals.
        </p>
      </div>

      <div className={styles["our_team__card_container"]}>
        <Card
          title="Tato"
          subtitle="Mentor"
          image="images/featured-work-sec-img-1.png"
          direction="column"
        />
        <Divider />
        <Card
          title="Kristin Watson"
          subtitle="Developer"
          image="images/featured-work-sec-img-2.png"
          direction="column"
        />
        <Card
          title="Cameron Huang"
          subtitle="Developer"
          image="images/featured-work-sec-img-3.png"
          direction="column"
        />
        <Divider />
        <Card
          title="Guy Hawkins"
          subtitle="Developer"
          image="images/featured-work-sec-img-4.png"
          direction="column"
        />
      </div>
    </section>
  );
};

export default OurTeam;
