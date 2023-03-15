import { fontSyne } from "@/pages/_app";
import styles from "@/styles/LatestNews.module.css";
import Button from "../base/Button";
import Divider from "../base/Divider";
import Card from "../base/Card";
import useMediaQuery from "@/hooks/useMediaQuery";
import EViewPortQuery from "@/constants/viewPortSize";

const { DESKTOP, TABLET, PHONE } = EViewPortQuery;

const LatestNews = () => {
  let isPhoneSize = useMediaQuery(PHONE);
  return (
    <section className={styles.latest_news}>
      <div className={styles.latest_news__header}>
        <h1
          className={`
            ${fontSyne.className}
            ${isPhoneSize ? "global__uppercase-heading-h2" : "global__uppercase-heading--small"}
            ${styles.latest_news__title}
          `}
        >
          {isPhoneSize ? "Latest News" : "LATEST NEWS"}
        </h1>
        <Button variant="secondary" isBlock={true}>
          SEE ALL
        </Button>
      </div>
      <article className={styles.latest_news__article}>
        <Card
          title="Things to Look for When Comparing Branding Alternatives"
          subtitle="Branding, Design"
          image="/images/two_people_praying.png"
          direction="column_reverse"
        />

        <Divider />
        <Card
          title="5 Stand-out Features of Branding You Should Know"
          subtitle="Branding, Design"
          image="/images/channel.png"
          direction="column_reverse"
        />
        <Divider />
        <Card
          title="Branding: What Real Customers Have to Say"
          subtitle="Branding, Design"
          image="/images/brand_strategy.png"
          direction="column_reverse"
        />
      </article>
    </section>
  );
};

export default LatestNews;
