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
    column: "card__title_container_column",
    row: "card__title_container_row",
  };
  return (
    <div className={styles["card"]}>
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
