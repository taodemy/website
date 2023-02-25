import styles from "../../styles/FeaturedWork.module.css";
import { fontSyne, fontSatoshi, fontRobotoMono } from "../../pages/_app";
import Button from "../base/Button";
import { useState } from "react";
import MemberCard from "../base/MemberCard";
import Divider from "../base/Divider";

export default function FeaturedWork() {
  const [imgBoxes, setImgBoxes] = useState([
    {
      id: 1,
      location: "images/featured-work-sec-img-2.png",
      title: "Enjoy Silence",
      hasBorder: true,
    },
    {
      id: 2,
      location: "images/featured-work-sec-img-3.png",
      title: "Pure Vision",
      hasBorder: false,
    },
    {
      id: 3,
      location: "images/featured-work-sec-img-4.png",
      title: "Boring Brand",
      hasBorder: true,
    },
    {
      id: 4,
      location: "images/featured-work-sec-img-5.png",
      title: "New Culture",
      hasBorder: false,
    },
  ]);

  return (
    <div className={styles["featured-work"]}>
      <div className={styles["featured-work__left-container"]}>
        <h1 className={`${fontSyne.className} global__heading-h1 `}>
          FEATURED <br /> WORK
        </h1>
        <p className={`${fontSatoshi.className} global__text--medium`}>
          The featured work section shows some of the successful works of our website.
        </p>
        <Button variant="primary">SEE ALL WORK</Button>
      </div>
      <div className={styles["featured-work__right-container"]}>
        <MemberCard
          title="Dangcing Stars"
          subtitle="2022"
          image="images/featured-work-sec-img-1.png"
          direction="row"
          size="lg"
        />
        <div
          className={`${styles["featured-work__right-container-bottom"]} ${fontSyne.className} text-default`}
        >
          <MemberCard
            title={imgBoxes[0].title}
            subtitle="2022"
            image={imgBoxes[0].location}
            direction="row"
          />
          <Divider />
          <MemberCard
            title={imgBoxes[1].title}
            subtitle="2022"
            image={imgBoxes[1].location}
            direction="row"
          />
          <MemberCard
            title={imgBoxes[2].title}
            subtitle="2022"
            image={imgBoxes[2].location}
            direction="row"
          />
          <Divider />
          <MemberCard
            title={imgBoxes[3].title}
            subtitle="2022"
            image={imgBoxes[3].location}
            direction="row"
          />

          {/* {imgBoxes.map((box) => (
            <Picturedbox
              key={box.id}
              location={box.location}
              title={box.title}
              hasBorder={box.hasBorder}
            ></Picturedbox>
          ))} */}
        </div>
      </div>
    </div>
  );
}
