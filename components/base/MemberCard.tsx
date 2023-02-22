import styles from "@/styles/MemberCard.module.css";
import { fontRobotoMono, fontSyne } from "../../pages/_app";

type CardVariant = "column" | "row";

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  direction: CardVariant;
}

const MemberCard = ({ title, subtitle, image, direction, ...otherProps }: CardProps) => {
  const directionVariants = {
    row: "card__title_container_row",
    column: "card__title_container_column",
    column_reverse: "card__title_container_column_reverse",
  };

  return (
    <div className={styles["card"]} {...otherProps}>
      <img
        src={image}
        alt={`${title} image`}
        className={styles["card__image"]}
        width="100%"
        height="380"
      />
      <div className={styles[directionVariants[direction]]}>
        <h1 className={`${fontSyne.className} global__text--large ${styles["card__title"]}`}>
          {title}
        </h1>
        <p className={`${fontRobotoMono.className} ${styles["card__subtitle"]}`}>{subtitle}</p>
      </div>
    </div>
  );
};

export default MemberCard;
