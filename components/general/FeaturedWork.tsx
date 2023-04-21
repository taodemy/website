import styles from "../../styles/FeaturedWork.module.css";
import { fontSyne, fontSatoshi } from "../../pages/_app";
import Button from "../base/Button";
import { useState } from "react";
import Card from "../base/Card";
import Divider from "../base/Divider";

interface IFeaturedWork {
  isDesktopSize: boolean;
  isTabletSize: boolean;
  imgBoxes: IImgBox[];
}

export interface IImgBox {
  location: string;
  title: string;
  hasBorder: string;
}

export default function FeaturedWork(props: IFeaturedWork) {
  const [imgBoxes, setImgBoxes] = useState(props.imgBoxes);

  return (
    <div className={styles["featured-work"]}>
      <div className={styles["featured-work__left-container"]}>
        <h1
          className={`${fontSyne.className}
             ${props.isDesktopSize ? "global__heading-h1" : "global__heading-h2"}
          `}
        >
          <span>{props.isTabletSize ? "FEATURED" : "Featured"}&ensp;</span>
          <span>{props.isTabletSize ? "WORK" : "Work"}</span>
        </h1>
        <p className={`${fontSatoshi.className} global__text--medium`}>
          The featured work section shows some of the successful works of our website.
        </p>
        <Button variant="primary">SEE ALL WORK</Button>
      </div>
      <div className={styles["featured-work__right-container"]}>
        <Card
          title="Dangcing Stars"
          subtitle="2022"
          image="images/featured-work-sec-img-1.png"
          direction="row"
          size="lg"
          path="work/1"
        />
        <div
          className={`${styles["featured-work__right-container-bottom"]} ${fontSyne.className} text-default`}
        >
          <Card
            title={imgBoxes[0].title}
            subtitle="2022"
            image={imgBoxes[0].location}
            direction="row"
            path="work/2"
          />
          {props.isDesktopSize ? <Divider /> : <div />}
          <Card
            title={imgBoxes[1].title}
            subtitle="2022"
            image={imgBoxes[1].location}
            direction="row"
            path="work/3"
          />
          <Card
            title={imgBoxes[2].title}
            subtitle="2022"
            image={imgBoxes[2].location}
            direction="row"
            path="work/4"
          />
          {props.isDesktopSize ? <Divider /> : <div />}
          <Card
            title={imgBoxes[3].title}
            subtitle="2022"
            image={imgBoxes[3].location}
            direction="row"
            path="work/5"
          />
        </div>
      </div>
    </div>
  );
}
