import { textFont, titleFont } from "@/pages/_app";
import styles from "@/styles/Card.module.css";

interface Props {
  image: string;
  cornerMakerLeft: string;
  title: string;
}

const Card = ({ image, title, cornerMakerLeft }: Props) => {
  return (
    <div className={styles.card_list}>
      <img src={image} alt="image" aria-label="card_image" className={styles.card_list__image} />
      <p className={`${textFont.className} global__text-meta`}>{cornerMakerLeft}</p>
      <p className={`${titleFont.className} global__heading-h3`}>{title}</p>
    </div>
  );
};

export default Card;
