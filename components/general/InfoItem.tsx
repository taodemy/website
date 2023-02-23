import { fontRobotoMono } from "@/pages/_app";
import styles from "@/styles/InfoItem.module.css";

type InfoItemProps = {
  title: string;
  text: string;
};

const InfoItem = ({ title, text }: InfoItemProps) => {
  return (
    <section className={styles["info-item"]}>
      <h3 className={`${styles["info-item__title"]} ${fontRobotoMono.className} global__text-meta`}>
        {title.toUpperCase()}
      </h3>
      <p className={`${fontRobotoMono.className} global__text-meta`}>{text.toUpperCase()}</p>
    </section>
  );
};

export default InfoItem;
