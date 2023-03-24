import styles from "./Post.module.css";
import Button from "@/components/base/Button";
import { fontRobotoMono, fontSyne } from "@/pages/_app";

export type PostProps = {
  sectionName: string;
  descriptionOne?: string;
  descriptionTwo?: string;
  descriptionThree?: string;
  imgPath: string;
};

const Post = ({
  sectionName,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  imgPath,
}: PostProps) => {
  return (
    <section className={styles.post_section}>
      <div className={styles.post_section__information}>
        <div className={styles.post_section__description}>
          <h1 className={`${fontSyne.className} global__heading-h1`}>{sectionName}</h1>
          <p className={`${fontRobotoMono.className} global__text-meta`}>{descriptionOne}</p>
          <p className={`${fontRobotoMono.className} global__text-meta`}>{descriptionTwo}</p>
          <p className={`${fontRobotoMono.className} global__text-meta`}>{descriptionThree}</p>
        </div>
        <Button variant="secondary">VIEW PROJECT</Button>
      </div>

      <img
        src={imgPath}
        alt={`${sectionName}image`}
        arial-label={`${sectionName}image`}
        className={styles.post_section__image}
      />
    </section>
  );
};

export default Post;