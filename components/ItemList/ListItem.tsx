import { textFont, titleFont } from "@/pages/_app";
import styles from "@/styles/ListItem.module.css";
import Image from "next/image";

interface Props {
  title: string;
  content: string;
  icon: string;
  ifHasBottomBorder: boolean;
}

const ListItem = ({ title, content, icon, ifHasBottomBorder }: Props) => {
  return (
    <div
      className={`${
        ifHasBottomBorder
          ? styles.item_list__with_bottom_border
          : styles.item_list___without_bottom_border
      }`}
    >
      <Image src={icon} width={34} height={34} alt="icon" />
      <div className={styles.item_list__text_container}>
        <p className={`${titleFont.className} heading-h3-uppercase`}>{title}</p>
        <p className={`${textFont.className} text-default`}>{content}</p>
      </div>
    </div>
  );
};

export default ListItem;
