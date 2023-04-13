import ListItem from "./ItemList";
import styles from "@/styles/OurValues.module.css";
import { fontSyne } from "@/pages/_app";

export interface IValue {
  isPhoneSize: boolean;
  listItems: IlistItems[];
}

interface IlistItems {
  id: 1;
  title: string;
  content: string;
  icon: string;
  height: number;
  width: number;
}

const OurValues = (props: IValue) => {
  const listItems = Object.values(props.listItems);

  return (
    <section className={styles.our_values}>
      <h1
        className={`${fontSyne.className} ${
          props.isPhoneSize ? "global__heading-h2" : "global__uppercase-heading--small"
        } ${styles.our_values__title}`}
      >
        OUR VALUES
      </h1>
      <div className={styles.our_values__content}>
        <img
          className={styles.our_values__image}
          src="/images/our_value.jpeg"
          alt="our values image"
          aria-label="our_values_image"
        />

        <div className={styles.our_values__list}>
          {listItems.map(({ id, title, content, icon }) => (
            <ListItem key={id} title={title} content={content} icon={icon} width={34} height={34} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
