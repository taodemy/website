import styles from "@/styles/OurTeam.module.css";
import { fontSyne, fontSatoshi, fontRobotoMono } from "@/pages/_app";
import Button from "../base/Button";
import Picturebox from "../base/Picturedbox";
import MemberCard from "../base/MemberCard";

interface MemberCardProps {
  name: string;
  position: string;
  image: string;
  width: number;
  height: number;
}

const OurTeam = () => {
  const members = [
    {
      id: 1,
      name: "Jacob Jones",
      position: "Mentor",
      image: "img/featured-work-sec-img-1.png",
      hasBorder: true,
    },
    {
      id: 2,
      name: "Jacob Jones",
      position: "Developer",
      image: "img/featured-work-sec-img-2.png",
      hasBorder: false,
    },
    {
      id: 3,
      name: "Jacob Jones",
      position: "Developer",
      image: "img/featured-work-sec-img-3.png",
      hasBorder: true,
    },
    {
      id: 4,
      name: "Jacob Jones",
      position: "Developer",
      image: "img/featured-work-sec-img-4.png",
      hasBorder: false,
    },
  ];
  return (
    <section className={styles["our_team"]}>
      <div className={styles["our_team__text_container"]}>
        <h1 className={`${fontSyne.className} global__heading-h1 ${styles.our_team__title}`}>
          OUR <br /> TEAM
        </h1>
        <p className={`${fontSatoshi.className} global__text--large`}>
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>

      <div className={styles["our_team__card_container"]}>
        {members.map(({ id, name, position, image }) => (
          <MemberCard key={id} title={name} image={image} subtitle={position} direction="row" />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
