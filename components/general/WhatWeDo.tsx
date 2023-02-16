import styles from "@/styles/WhatWeDo.module.css";
import { headingFont } from "@/pages/_app";
import WhatWeDoItem from "./WhatWeDoItem";

const WhatWeDo = () => {
  const whatWeDoItems = [
    {
      id: 1,
      title: "BRANDING",
      content:
        "Branding is the process of creating a distinct identity for a business in the mind.",
      icon: "/images/branding_icon.png",
      alt: "Branding icon",
    },
    {
      id: 2,
      title: "DESIGN",
      content: "A design is a plan or specification for the construction of an object or system.",
      icon: "/images/design_icon.png",
      alt: "Design icon",
    },
    {
      id: 3,
      title: "VIDEO",
      content: "Video is an electronic medium for the recording, copying, playback, broadcasting.",
      icon: "/images/video_icon.png",
      alt: "Video icon",
    },
    {
      id: 4,
      title: "CONTENT",
      content: "something that is to be expressed through some medium, as speech, writing, or any of various arts.",
      icon: "/images/content_icon.png",
      alt: "Content icon",
    },
  ];
  return (
    <section className={styles["what-we-do"]}>
      <p className={`${styles["what-we-do__txt"]} ${headingFont.className} global__text-meta`}>WHAT WE DO</p>
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
