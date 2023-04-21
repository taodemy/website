import styles from "@/styles/Card.module.css";
import Link from "next/link";
import { fontRobotoMono, fontSyne } from "../../pages/_app";
import EViewPortQuery from "@/constants/viewPortSize";
import useMediaQuery from "@/hooks/useMediaQuery";

const { PHONE } = EViewPortQuery;

export type CardDirectionVariant = "column" | "column_reverse" | "row";
export type CardSizeVariant = "lg" | "md" | "sm";

export interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  large_title?: boolean;
  direction?: CardDirectionVariant;
  size?: CardSizeVariant;
  path?: string;
}

const Card = ({
  title,
  subtitle,
  image,
  direction = "column",
  size = "sm",
  large_title = false,
  path = "",
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
  const isPhoneSize = useMediaQuery(PHONE);
  return (
    <figure className={`${styles["card"]}`} {...otherProps}>
      <Link href={path}>
        <img
          src={image}
          alt={`${title} image`}
          className={`${styles["card__image"]} ${styles[sizeVariants[size]]}`}
        />
      </Link>
      <div className={styles[directionVariants[direction]]}>
        <Link href={path} className={styles["card__text_link"]}>
          {direction === "column_reverse" && large_title && (
            <h1
              className={`${fontSyne.className} 
               ${isPhoneSize ? ".global__heading-h4" : "  global__heading-h2"}
              `}
            >
              {title}
            </h1>
          )}
          {direction === "column_reverse" && !large_title && (
            <h1
              className={`${fontSyne.className} 
               ${isPhoneSize ? ".global__heading-h4" : "global__text-xlarge"}
              `}
            >
              {title}
            </h1>
          )}
          {direction !== "column_reverse" && (
            <h1 className={`${fontSyne.className} global__text--large`}>{title}</h1>
          )}
        </Link>
        <p className={`${fontRobotoMono.className} global__text-meta`}>{subtitle}</p>
      </div>
    </figure>
  );
};

export default Card;
