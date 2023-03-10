import styles from "@/styles/Card.module.css";
import { fontRobotoMono, fontSyne } from "../../pages/_app";

type CardDirectionVariant = "column" | "column_reverse" | "row";
type CardSizeVariant = "lg" | "md" | "sm";

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  large_title?: boolean;
  direction?: CardDirectionVariant;
  size?: CardSizeVariant;
}

const Card = ({
  title,
  subtitle,
  image,
  direction = "column",
  size = "sm",
  large_title = false,
  ...otherProps
}: CardProps) => {
  const directionVariants = {
    row: "card__title_container_row",
    column: "card__title_container_column",
    column_reverse: "card__title_container_column_reverse",
  };

  const sizeVariants = {
    lg: "card__image_large",
    md: "card__image_medium",
    sm: "card__image_small",
  };

  return (
    <figure className={`${styles["card"]}`} {...otherProps}>
      <img
        src={image}
        alt={`${title} image`}
        className={`${styles["card__image"]} ${styles[sizeVariants[size]]}`}
      />
      <div className={styles[directionVariants[direction]]}>
        {direction === "column_reverse" && large_title && (
          <h1 className={`${fontSyne.className} global__heading-h2`}>{title}</h1>
        )}
        {direction === "column_reverse" && !large_title && (
          <h1 className={`${fontSyne.className} global__text-xlarge`}>{title}</h1>
        )}
        {direction !== "column_reverse" && (
          <h1 className={`${fontSyne.className} global__text--large`}>{title}</h1>
        )}
        <p className={`${fontRobotoMono.className} global__text-meta`}>{subtitle}</p>
      </div>
    </figure>
  );
};

export default Card;
