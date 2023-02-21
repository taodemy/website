import styles from "@/styles/WhatWeDoItem.module.css";
import { fontSyne, fontSatoshi } from "@/pages/_app";

type WhatWeDoProps = {
  title: string;
  content: string;
  icon: string;
  alt: string;
};

const WhatWeDoItem = ({ title, content, icon, alt }: WhatWeDoProps) => {
  return (
    <section className={styles["what-we-do-item"]}>
      <img src={icon} alt={alt}></img>
      <div className={styles["what-we-do-item__txt-wrapper"]}>
        <h3 className={`${fontSyne.className} global__uppercase-heading-h3`}>{title}</h3>
        <p className={`${fontSatoshi.className} global__text--medium`}>{content}</p>
      </div>
    </section>
  );
};

export default WhatWeDoItem;
