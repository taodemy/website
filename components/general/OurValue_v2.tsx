import styles from "@/styles/OurValueV2.module.css";
import { fontSatoshi, fontRobotoMono, fontSyne } from "@/pages/_app";
import ListItem from "./ItemList";
import Button from "../base/Button";

const OurValueV2 = () => {
  const listItems = [
    {
      id: 1,
      title: "Vision",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at. Pretium aenean pharetra magna ac placerat.",
      icon: "/images/branding_icon.svg",
    },
    {
      id: 2,
      title: "Innovation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at. Pretium aenean pharetra magna ac placerat.",
      icon: "/images/design_icon.svg",
    },
    {
      id: 3,
      title: "Connection",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at. Pretium aenean pharetra magna ac placerat.",
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
          <ListItem key={id} title={title} content={content} icon={icon} />
        ))}
      </div>
    </section>
  );
};

export default OurValueV2;
