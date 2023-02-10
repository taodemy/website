import ListItem from "./ItemList";

import styles from "@/styles/OurValues.module.css";
import { titleFont } from "@/pages/_app";

function OurValues() {
  const listItems = [
    {
      id: 1,
      title: "Vision",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at. Pretium aenean pharetra magna ac placerat.",
      icon: "/images/number_one_icon.svg",
    },
    {
      id: 2,
      title: "Innovation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at. Pretium aenean pharetra magna ac placerat.",
      icon: "/images/number_two_icon.svg",
    },
    {
      id: 3,
      title: "Connection",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at. Pretium aenean pharetra magna ac placerat.",
      icon: "/images/number_three_icon.svg",
    },
  ];

  return (
    <section className={styles.our_values}>
      <h1 className={`${titleFont.className} heading-small-uppercase ${styles.our_values__title}`}>
        OUR VALUES
      </h1>
      <div className={styles.our_values__content}>
        <img
          className={styles.our_values__image}
          src="/images/our_value.jpeg"
          alt="our values image"
        />

        <div className={styles.our_values__list}>
          {listItems.map(({ id, title, content, icon }) => (
            <ListItem key={id} title={title} content={content} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurValues;
