import styles from "@/styles/WhatWeDo.module.css";
import { fontRobotoMono } from "@/pages/_app";
import WhatWeDoItem from "./WhatWeDoItem";

export interface IWhatWeDo {
  whatWeDoItems: IWhatWeDoItem[];
}

interface IWhatWeDoItem {
  id: number;
  title: string;
  content: string;
  icon: string;
  alt: string;
}

const WhatWeDo = ({ whatWeDoItems }: IWhatWeDo) => {
  return (
    <section className={styles["what-we-do"]}>
      <p className={`${styles["what-we-do__txt"]} ${fontRobotoMono.className} global__text-meta`}>
        WHAT WE DO
      </p>
      <div className={styles["what-we-do__content"]}>
        {whatWeDoItems.map((item) => (
          <WhatWeDoItem
            key={item.id}
            title={item.title}
            content={item.content}
            icon={item.icon}
            alt={item.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
