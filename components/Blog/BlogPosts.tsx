import styles from "./BlogPosts.module.css";
import Divider from "../base/Divider";
import Button from "../base/Button";
import Card from "../base/Card";

const BlogGallery = () => {
  return (
    <section className={styles["blog_gallery"]}>
      <article className={styles["blog_gallery__large_group"]}>
        <Card
          image={"/images/two_people_praying.png"}
          title={"Things to Look for When Comparing Branding Alternatives"}
          subtitle={"Branding, Design"}
          direction={"column_reverse"}
          size={"lg"}
          large_title={true}
          path={"blog/1"}
        />
        <Divider />
        <Card
          image={"/images/channel.png"}
          title={"5 Stand-out Features of Branding You Should Know"}
          subtitle={"Branding, Design"}
          direction={"column_reverse"}
          size={"lg"}
          large_title={true}
          path={"blog/2"}
        />
      </article>
      <article className={styles["blog_gallery__small_group"]}>
        <div className={styles["blog_gallery__small_group__line_one"]}>
          <Card
            image={"/images/what_is_brand_strategy.png"}
            title={"Branding: What Real Customers Have to Say"}
            subtitle={"Branding, Design"}
            direction={"column_reverse"}
            size={"sm"}
            path={"blog/3"}
          />
          <Divider />
          <Card
            image={"/images/shaping_art.png"}
            title={"Branding: Pros and Cons They Don't Tell You"}
            subtitle={"Branding, Design"}
            direction={"column_reverse"}
            size={"sm"}
            path={"blog/4"}
          />
          <Divider />
          <Card
            image={"/images/hero_hand.png"}
            title={"How to Spot the Best Branding for You: Signs and Features"}
            subtitle={"Branding, Design"}
            direction={"column_reverse"}
            size={"sm"}
            path={"blog/5"}
          />
        </div>
        <div className={styles["blog_gallery__small_group__line_two"]}>
          <Card
            image={"/images/perfume.png"}
            title={"How Much Should I Spend on Branding"}
            subtitle={"Branding, Design"}
            direction={"column_reverse"}
            size={"sm"}
            path={"blog/6"}
          />
          <Divider />
          <Card
            image={"/images/hero.png"}
            title={"Rookie Mistakes You're Making With Your Branding"}
            subtitle={"Branding, Design"}
            direction={"column_reverse"}
            size={"sm"}
            path={"blog/7"}
          />
          <Divider />
          <Card
            image={"/images/gabby.png"}
            title={"Real Branding Customer Reviews You Need to See"}
            subtitle={"Branding, Design"}
            direction={"column_reverse"}
            size={"sm"}
            path={"blog/8"}
          />
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
