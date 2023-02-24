import styles from "@/styles/OurValueV2.module.css";
import { fontRobotoMono, fontSyne } from "@/pages/_app";
import ListItem from "./ItemList";
import Button from "../base/Button";

const OurValueV2 = () => {
  const listItems = [
    {
      id: 1,
      title: "Vision",
      content:
        "With the power of technology, we can unlock a future where humanity's greatest dreams become a reality.",
      icon: "/images/branding_icon.svg",
    },
    {
      id: 2,
      title: "Innovation",
      content:
        "The continuous development of cutting-edge technology is the key to unlocking new frontiers of progress and discovery",
      icon: "/images/design_icon.svg",
    },
    {
      id: 3,
      title: "Connection",
      content:
        "By connecting people and ideas across borders and cultures, technology has the power to bring us closer together and create a more unified global community.",
      icon: "/images/video_icon.svg",
    },
  ];

  return (
    <section className={styles["our_values"]}>
      <div className={styles["our_values__title_container"]}>
        <div className={styles["our_values_title_text_container"]}>
          <p
            className={`${fontRobotoMono.className} global__text-meta ${styles["our_values__heading"]}`}
          >
            OUR VALUES
          </p>
          <h1
            className={`${fontSyne.className} global__uppercase-heading--medium ${styles["our_values__title"]}`}
          >
            Our vision is to connect with the world technology trough innovation.
          </h1>
        </div>

        <Button>Our services</Button>
      </div>
      <div className={styles["our_values__content_container"]}>
        {listItems.map(({ id, title, content, icon }) => (
          <ListItem key={id} title={title} content={content} icon={icon} width={64} height={64} />
        ))}
      </div>
    </section>
  );
};

export default OurValueV2;
