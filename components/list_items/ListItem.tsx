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
    <div className={`${styles.container} ${ifHasBottomBorder ? styles.bottom_border : null}`}>
      <Image src={icon} width={34} height={34} alt="icon" />
      <div className={styles.text_container}>
        <p className={`${titleFont.className} heading-h3-uppercase`}>{title}</p>
        <p className={`${textFont.className} text-default`}>{content}</p>
      </div>
    </div>
  );
};

export default ListItem;
