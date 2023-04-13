import styles from "./BlogPosts.module.css";
import Divider from "../base/Divider";
import Button from "../base/Button";
import Card, { CardProps } from "../base/Card";

interface Card extends CardProps {
  id: number;
}

interface IBlogPost {
  data: Idata;
}

interface Idata {
  CardLg: Card[];
  CardSmOne: Card[];
  CardSmTwo: Card[];
}

const BlogGallery = ({ data }: IBlogPost) => {
  const cardLgData = data.CardLg;
  const cardSmOneData = data.CardSmOne;
  const cardSmTwoData = data.CardSmTwo;

  return (
    <section className={styles["blog_gallery"]}>
      <article className={styles["blog_gallery__large_group"]}>
        {cardLgData.map((card) => (
          <>
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
          </>
        ))}
      </article>
      <article className={styles["blog_gallery__small_group"]}>
        <div className={styles["blog_gallery__small_group__line_one"]}>
          {cardSmOneData.map((card) => (
            <>
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
            </>
          ))}
        </div>
        <div className={styles["blog_gallery__small_group__line_two"]}>
          {cardSmTwoData.map((card) => (
            <>
              <Card
                key={card.id}
                image={card.image}
                title={card.title}
                subtitle={card.subtitle}
                direction={card.direction}
                size={card.size}
                path={card.path}
              />
              {card.id !== cardSmTwoData[cardSmTwoData.length - 1].id && <Divider />}
            </>
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
