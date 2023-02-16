import Picturedbox from "../base/Picturedbox";
import styles from "../../styles/FeaturedWork.module.css";
import { textFont, titleFont } from "../../pages/_app";
import Button from "../base/Button";
import { useState } from "react";

export default function FeaturedWork() {
  const [imgBoxes, setImgBoxes] = useState([
    {
      id: 1,
      location: "img/featured-work-sec-img-1.png",
      title: "Enjoy Silence",
      hasBorder: true,
    },
    {
      id: 2,
      location: "img/featured-work-sec-img-2.png",
      title: "Pure Vision",
      hasBorder: false,
    },
    {
      id: 3,
      location: "img/featured-work-sec-img-3.png",
      title: "Boring Brand",
      hasBorder: true,
    },
    {
      id: 4,
      location: "img/featured-work-sec-img-4.png",
      title: "New Culture",
      hasBorder: false,
    },
  ]);

  return (
    <div className={styles["featured-work"]}>
      <div className={styles["featured-work__left-container"]}>
        <h1 className={`${titleFont.className} global__heading-h1 `}>
          FEATURED <br /> WORK
        </h1>
        <p className={`${textFont.className} global__text--large`}>
          The featured work section shows some of the successful works of our website.
        </p>
        <Button className={styles["featured-work__btn"]}>SEE ALL WORK</Button>
      </div>
      <div className={styles["featured-work__right-container"]}>
        <div className={styles["featured-work__big-img"]}>
          <img src="img/featured-work-sec-img-1.png" alt="Dangcing Stars" />
          <div
            className={`${styles["featured-work_img-text-box"]} ${textFont.className} text-default`}
          >
            <p className={`${titleFont.className} heading-h4`}>Dangcing Stars</p>
            <p>2022</p>
          </div>
        </div>
        <div
          className={`${styles["featured-work__right-container-bottom"]} ${textFont.className} text-default`}
        >
          {imgBoxes.map((box) => (
            <Picturedbox
              key={box.id}
              location={box.location}
              title={box.title}
              hasBorder={box.hasBorder}
            ></Picturedbox>
          ))}
        </div>
      </div>
    </div>
  );
}
