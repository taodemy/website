import { textFont, titleFont } from "@/pages/_app";
import styles from "@/styles/ListItem.module.css";
import Image from "next/image";

interface Props {
  title: string;
  content: string;
  icon: string;
}

const ListItem = ({ title, content, icon }: Props) => {
  return (
    <div className={styles.item_list}>
      <Image src={icon} width={34} height={34} alt="icon" />
      <div className={styles.item_list__text_container}>
        <p className={`${titleFont.className} heading-h3-uppercase`}>{title.toUpperCase()}</p>
        <p className={`${textFont.className} text-default`}>{content}</p>
      </div>
    </div>
  );
};

export default ListItem;
