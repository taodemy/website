import { textFont, titleFont } from "@/pages/_app";
import styles from "@/styles/LatestNews.module.css";
import Card from "./Cards";

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
      <h1>Latest News</h1>
    </section>
  );
};

export default LatestNews;
