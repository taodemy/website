import Image from "next/image";
import ListItem from "../ItemList/ListItem";
import ourValuesImage from "../../assets/our_value.jpeg";
import styles from "@/styles/OurValues.module.css";
import { titleFont } from "@/pages/_app";
import NumberSvg1 from "@/assets/number_one_icon.svg";
import NumberSvg2 from "@/assets/number_two_icon.svg";
import NumberSvg3 from "@/assets/number_three_icon.svg";

const Values = () => {
  const listItems = [
    {
      id: 1,
      title: "Vision",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at. Pretium aenean pharetra magna ac placerat.",
      ifHasBottomBorder: true,
      icon: NumberSvg1,
    },
    {
      id: 2,
      title: "Innovation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at. Pretium aenean pharetra magna ac placerat.",
      ifHasBottomBorder: true,
      icon: NumberSvg2,
    },
    {
      id: 3,
      title: "Connection",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam at. Pretium aenean pharetra magna ac placerat.",
      ifHasBottomBorder: false,
      icon: NumberSvg3,
    },
  ];

  return (
    <section className={styles.our_values__container}>
      <h1 className={`${titleFont.className} heading-small-uppercase ${styles.our_values__title}`}>
        OUR VALUES
      </h1>
      <div className={styles.our_values__content}>
        <Image
          priority
          className={styles.our_values__image}
          src={ourValuesImage}
          alt="our values image"
        />
        <div className={styles.our_values__list}>
          {listItems.map(({ id, title, content, ifHasBottomBorder, icon }) => (
            <ListItem
              key={id}
              title={title}
              content={content}
              ifHasBottomBorder={ifHasBottomBorder}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
