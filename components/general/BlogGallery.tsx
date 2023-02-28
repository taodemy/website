import styles from "@/styles/BlogGallery.module.css";
import Card from "../base/Card";
import Divider from "../base/Divider";
import Button from "../base/Button";

const BlogGallery = () => {
  return (
    <section className={styles["blog_gallery"]}>
      <article className={styles["blog_gallery__large_group"]}>
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
      </article>
      <article className={styles["blog_gallery__small_group"]}>
        <div className={styles["blog_gallery__small_group__line_one"]}>
          <Card
            image={"/images/two_people_praying.png"}
            cornerMakerLeft={"Branding, Design"}
            title={"Things to Look for When Comparing Branding Alternatives"}
          />
          <Divider />
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
        </div>
        <div className={styles["blog_gallery__small_group__line_two"]}>
          <Card
            image={"/images/two_people_praying.png"}
            cornerMakerLeft={"Branding, Design"}
            title={"Things to Look for When Comparing Branding Alternatives"}
          />
          <Divider />
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
        </div>
        <div className={styles["blog_gallery__button_group"]}>
          <Button variant="secondary" isBlock={true}>
            PREVIOUS
          </Button>
          <Button variant="secondary" isBlock={true}>
            NEXT
          </Button>
        </div>
      </article>
    </section>
  );
};

export default BlogGallery;
