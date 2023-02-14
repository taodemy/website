import { textFont, titleFont } from "@/pages/_app";
import styles from "@/styles/Card.module.css";

interface Props {
  image: string;
  cornerMakerLeft?: string;
  title?: string;
}

const Card = ({ image, title, cornerMakerLeft }: Props) => {
  return (
    <section className={styles.card_list}>
      <img src={image} alt="image" aria-label="card_image" className={styles.card_list__image} />
      <div className={styles.card_list__text}>
        <p className={styles.card_list__text__corner}>{cornerMakerLeft}</p>
        <p className={styles.card_list__text__title}>{title}</p>
      </div>
    </section>
  );
};

export default Card;
