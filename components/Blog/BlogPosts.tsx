import React from "react";
import styles from "./BlogPosts.module.css";
import Divider from "../base/Divider";
import Button from "../base/Button";
import Card from "../base/Card";
import { CardDirectionVariant, CardSizeVariant } from "../base/Card";

export interface IBlogPost {
  data: IData;
  errorMessage?: string;
}

export interface IData {
  cardLg: ICardLg[];
  cardSmOne: ICardSmOne[];
  cardSmTwo: ICardSmOne[];
}

interface ICardSmOne {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  direction?: CardDirectionVariant;
  size?: CardSizeVariant;
  path: string;
}

interface ICardLg {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  direction?: CardDirectionVariant;
  size?: CardSizeVariant;
  large_title: boolean;
  path: string;
}

const BlogGallery = ({ cardLg, cardSmOne, cardSmTwo }: IData) => {
  const cardLgData = cardLg;
  const cardSmOneData = cardSmOne;
  const cardSmTwoData = cardSmTwo;

  return (
    <section className={styles["blog_gallery"]}>
      <article className={styles["blog_gallery__large_group"]}>
        {cardLgData.map((card) => (
          <React.Fragment key={card.id}>
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
              direction={card.direction}
              size={card.size}
              large_title={card.large_title}
              path={card.path}
            />
            {card.id !== cardLgData[cardLgData.length - 1].id && <Divider />}
          </React.Fragment>
        ))}
      </article>
      <article className={styles["blog_gallery__small_group"]}>
        <div className={styles["blog_gallery__small_group__line_one"]}>
          {cardSmOneData.map((card) => (
            <React.Fragment key={card.id}>
              <Card
                key={card.id}
                image={card.image}
                title={card.title}
                subtitle={card.subtitle}
                direction={card.direction}
                size={card.size}
                path={card.path}
              />
              {card.id !== cardSmOneData[cardSmOneData.length - 1].id && <Divider />}
            </React.Fragment>
          ))}
        </div>
        <div className={styles["blog_gallery__small_group__line_two"]}>
          {cardSmTwoData.map((card) => (
            <React.Fragment key={card.id}>
              <Card
                image={card.image}
                title={card.title}
                subtitle={card.subtitle}
                direction={card.direction}
                size={card.size}
                path={card.path}
              />
              {card.id !== cardSmTwoData[cardSmTwoData.length - 1].id && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </article>
      <div className={styles["blog_gallery__button_group"]}>
        <Button variant="secondary" isBlock={true}>
          PREVIOUS
        </Button>
        <Button variant="secondary" isBlock={true}>
          NEXT
        </Button>
      </div>
    </section>
  );
};

export default BlogGallery;
