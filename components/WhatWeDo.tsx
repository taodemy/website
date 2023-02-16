import styles from "@/styles/WhatWeDo.module.css";
import WhatWeDoItem from "./WhatWeDoItem";

const WhatWeDo = () => {
  const whatWeDoItems = [
    {
      id: 1,
      title: "BRANDING",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      icon: "/images/branding_icon.png",
      alt: "Branding icon",
    },
    {
      id: 2,
      title: "DESIGN",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      icon: "/images/design_icon.png",
      alt: "Design icon",
    },
    {
      id: 3,
      title: "VIDEO",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      icon: "/images/video_icon.png",
      alt: "Video icon",
    },
    {
      id: 4,
      title: "CONTENT",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      icon: "/images/content_icon.png",
      alt: "Content icon",
    },
  ];
  return (
    <section className={styles["what-we-do"]}>
      <p className={`${styles["what-we-do__txt"]} global__text-meta`}>WHAT WE DO</p>
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
