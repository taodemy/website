import styles from "@/styles/WhatWeDoItem.module.css";
import { titleFont, textFont } from "@/pages/_app";

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
        <h3 className={`${titleFont.className} global__uppercase-heading-h3`}>{title}</h3>
        <p className={`${textFont.className} global__text--medium`}>{content}</p>
      </div>
    </section>
  );
};

export default WhatWeDoItem;
