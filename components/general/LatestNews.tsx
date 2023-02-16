import { titleFont } from "@/pages/_app";
import styles from "@/styles/LatestNews.module.css";
import Card from "../base/Card";

const LatestNews = () => {
  const newsList = [
    {
      id: 1,
      image: "/images/two_people_praying.png",
      cornerMakerLeft: "Branding, Design",
      title: "Things to Look for When Comparing Branding Alternatives",
    },
    {
      id: 2,
      image: "/images/channel.png",
      cornerMakerLeft: "Branding, Design",
      title: "5 Stand-out Features of Branding You Should Know",
    },
    {
      id: 3,
      image: "/images/brand_strategy.png",
      cornerMakerLeft: "Branding, Design",
      title: "Branding: What Real Customers Have to Say",
    },
  ];

  return (
    <section className={styles.last_news}>
      <header className={styles.last_news__header}>
        <h1
          className={`${titleFont.className} global__uppercase-heading--small ${styles.last_news__title}`}
        >
          LATEST NEWS
        </h1>
        <button className={styles.default_button}>SEE ALL</button>
      </header>
      <div className={styles.last_news__news}>
        {newsList.map(({ id, image, cornerMakerLeft, title }) => (
          <Card key={id} image={image} cornerMakerLeft={cornerMakerLeft} title={title} />
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
