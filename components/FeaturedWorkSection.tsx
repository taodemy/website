import Picturedbox from "./Picturedbox";
import styles from "../styles/FeaturedWork.module.css";
import { textFont, titleFont } from "../pages/_app";

export default function Home() {
  return (
    <div className={styles["featured-work"]}>
      <div className={styles["featured-work__left-container"]}>
        <h1 className={`${titleFont.className} global__heading-h1 `}>
          FEATURED <br /> WORK
        </h1>
        <p className={`${textFont.className} global__text--large`}>
          The featured work section shows some of the successful works of our website.
        </p>
        <button className={styles["featured-work__btn"]}>SEE ALL WORK</button>
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
          <Picturedbox
            className={styles["featured-work__small-img-1"]}
            location="img/featured-work-sec-img-2.png"
            title="Enjoy Silence"
            hasBorder={true}
          ></Picturedbox>
          <Picturedbox
            className={styles["featured-work__small-img-2"]}
            location="img/featured-work-sec-img-3.png"
            title="Pure Vision"
            hasBorder={false}
          ></Picturedbox>
          <Picturedbox
            className={styles["featured-work__small-img-3"]}
            location="img/featured-work-sec-img-4.png"
            title="Boring Brand"
            hasBorder={true}
          ></Picturedbox>
          <Picturedbox
            className={styles["featured-work__small-img-4"]}
            location="img/featured-work-sec-img-5.png"
            title="New Culture"
            hasBorder={false}
          ></Picturedbox>
        </div>
      </div>
    </div>
  );
}
