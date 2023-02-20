import { fontSyne } from "@/pages/_app";
import styles from "@/styles/LatestNews.module.css";
import Card from "../base/Card";
import Button from "../base/Button";
import Divider from "../base/Divider";

const LatestNews = () => {
  return (
    <section className={styles.latest_news}>
      <div className={styles.latest_news__header}>
        <h1
          className={`${fontSyne.className} global__uppercase-heading--small ${styles.latest_news__title}`}
        >
          LATEST NEWS
        </h1>
        <Button variant="secondary" isBlock={true}>
          SEE ALL
        </Button>
      </div>
      <article className={styles.latest_news__article}>
        <Card
          image={"/images/two_people_praying.png"}
          cornerMakerLeft={"Branding, Design"}
          title={"Things to Look for When Comparing Branding Alternatives"}
        />
        <Divider />
        <Card
          image={"/images/channel.png"}
          cornerMakerLeft={"Branding, Design"}
          title={"5 Stand-out Features of Branding You Should Know"}
        />
        <Divider />
        <Card
          image={"/images/brand_strategy.png"}
          cornerMakerLeft={"Branding, Design"}
          title={"Branding: What Real Customers Have to Say"}
        />
      </article>
    </section>
  );
};

export default LatestNews;
