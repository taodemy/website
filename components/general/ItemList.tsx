import { fontSatoshi, fontSyne } from "@/pages/_app";
import styles from "@/styles/ListItem.module.css";

interface Props {
  title: string;
  content: string;
  icon: string;
  height: number;
  width: number;
}

const ListItem = ({ title, content, icon, height, width }: Props) => {
  return (
    <div className={styles.item_list}>
      <img
        src={icon}
        alt="icon"
        arial-label="list_icon"
        className={styles.item_list__image}
        width={width}
        height={height}
      />
      <div className={styles.item_list__text_container}>
        <p className={`${fontSyne.className} global__uppercase-heading-h3`}>{title}</p>
        <p className={`${fontSatoshi.className} global__text-default`}>{content}</p>
      </div>
    </div>
  );
};

export default ListItem;
