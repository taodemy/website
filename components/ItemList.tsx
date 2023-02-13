import { textFont, titleFont } from "@/pages/_app";
import styles from "@/styles/ListItem.module.css";

interface Props {
  title: string;
  content: string;
  icon: string;
}

const ListItem = ({ title, content, icon }: Props) => {
  return (
    <div className={styles.item_list}>
      <img src={icon} alt="icon" arial-label="list_icon" className={styles.item_list__image} />
      <div className={styles.item_list__text_container}>
        <p className={`${titleFont.className} global__uppercase-heading-h3`}>
          {title.toUpperCase()}
        </p>
        <p className={`${textFont.className} global__text-default`}>{content}</p>
      </div>
    </div>
  );
};

export default ListItem;
