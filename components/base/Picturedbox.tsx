import styles from "@/styles/FeaturedWork.module.css";
import { fontSatoshi, fontRobotoMono } from "../../pages/_app";

interface MyProps {
  location: string;
  title: string;
  hasBorder: boolean;
}

const Picturebox = (props: MyProps) => {
  let border = `${styles["picturedbox_img-box"]} ${
    styles[props.hasBorder ? "picturedbox_img-box--border" : ""]
  }`;
  return (
    <div className={border}>
      <img src={props.location} alt={props.location} />
      <div className={styles["picturedbox_img-text-box"]}>
        <p className={`${fontSatoshi.className} heading-h4`}>{props.title}</p>
        <p className={`${fontRobotoMono.className}`}>2022</p>
      </div>
    </div>
  );
};

export default Picturebox;
