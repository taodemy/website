import { fontSyne } from "@/pages/_app";
import styles from "@/styles/LatestNews.module.css";
import Button from "../base/Button";
import Divider from "../base/Divider";
import Card from "../base/Card";

export interface ILatestNews {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  direction: string;
  isPhoneSize: boolean;
}

const LatestNews = (props: ILatestNews) => {
  const cardsData = Object.values(props);

  return (
    <section className={styles.latest_news}>
      <div className={styles.latest_news__header}>
        <h1
          className={`
            ${fontSyne.className}
            ${
              props.isPhoneSize
                ? "global__uppercase-heading-h2"
                : "global__uppercase-heading--small"
            }
            ${styles.latest_news__title}
          `}
        >
          {props.isPhoneSize ? "Latest News" : "LATEST NEWS"}
        </h1>
        <Button variant="secondary" isBlock={true}>
          SEE ALL
        </Button>
      </div>
      <article className={styles.latest_news__article}>
        {cardsData.map((card) => (
          <>
            <Card
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              image={card.image}
              direction={card.direction}
            />
            {card.id !== cardsData[cardsData.length - 1].id && <Divider />}
          </>
        ))}
      </article>
    </section>
  );
};

export default LatestNews;
