import styles from "@/styles/OurTeam.module.css";
import { fontSyne, fontSatoshi } from "@/pages/_app";
import MemberCard from "../base/MemberCard";
import Divider from "../base/Divider";

const OurTeam = () => {
  const members = [
    {
      id: 1,
      name: "Tato",
      position: "Mentor",
      image: "img/featured-work-sec-img-1.png",
    },
    {
      id: 2,
      name: "Kristin Watson",
      position: "Developer",
      image: "img/featured-work-sec-img-2.png",
    },
    {
      id: 3,
      name: "Cameron Huang",
      position: "Developer",
      image: "img/featured-work-sec-img-3.png",
    },
    {
      id: 4,
      name: "Guy Hawkins",
      position: "Developer",
      image: "img/featured-work-sec-img-4.png",
    },
  ];
  return (
    <section className={styles["our_team"]}>
      <div className={styles["our_team__text_container"]}>
        <h1 className={`${fontSyne.className} global__heading-h1 ${styles.our_team__title}`}>
          OUR <br /> TEAM
        </h1>
        <p className={`${fontSatoshi.className} global__text--large`}>
          A team comprised of talented individuals with <br />a range of skills and expertise,
          working <br />
          collaboratively towards achieving our goals.
        </p>
      </div>

      <div className={styles["our_team__card_container"]}>
        <MemberCard
          title="Tato"
          subtitle="Mentor"
          image="img/featured-work-sec-img-1.png"
          direction="column"
        />
        <Divider />
        <MemberCard
          title="Kristin Watson"
          subtitle="Developer"
          image="img/featured-work-sec-img-2.png"
          direction="column"
        />
        <MemberCard
          title="Cameron Huang"
          subtitle="Developer"
          image="img/featured-work-sec-img-3.png"
          direction="column"
        />
        <Divider />
        <MemberCard
          title="Guy Hawkins"
          subtitle="Developer"
          image="img/featured-work-sec-img-4.png"
          direction="column"
        />
      </div>
    </section>
  );
};

export default OurTeam;
