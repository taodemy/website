import { fontRobotoMono, fontSyne } from "@/pages/_app";
import styles from "@/styles/Card.module.css";

interface Props {
  image: string;
  cornerMakerLeft?: string;
  title?: string;
}

const Card = ({ image, title, cornerMakerLeft }: Props) => {
  return (
    <figure className={styles.card}>
      <img src={image} alt="image" aria-label="card_image" className={styles.card__image} />
      <div className={styles.card__text}>
        <p className={`${fontRobotoMono.className} global__text-meta ${styles.card__text__corner}`}>
          {cornerMakerLeft}
        </p>
        <h3 className={`${fontSyne.className} global__heading-h3 ${styles.card__text__title}`}>
          {title}
        </h3>
      </div>
    </figure>
  );
};

export default Card;
